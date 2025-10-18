// composables/useProperties.ts
import { ref, readonly } from 'vue'

interface SearchFilters {
  query: string
  propertyType: string
  listingType: 'rent' | 'sale' | 'both'
  minPrice: number | null
  maxPrice: number | null
  bedrooms: number | null
  bathrooms: number | null
  nearestBtsId: string | null
  maxBtsWalkingMinutes: number
  location: unknown | null
  radius: number
}

interface Property {
  id: string
  title_en?: string
  title_th?: string
  description_en?: string
  status?: string
  is_available?: boolean
  property_type?: string
  listing_type?: string
  sale_price?: number
  rent_price?: number
  bedrooms?: number
  bathrooms?: number
  nearest_bts_id?: string
  bts_walking_minutes?: number
  created_at?: string
  // Add more fields as needed
}

interface Favorite {
  id: string
  user_id: string
  property_id: string
  notes?: string
  created_at?: string
  properties?: Property[]
}

export const useProperties = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const properties = ref<Property[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const searchFilters = ref<SearchFilters>({
    query: '',
    propertyType: '',
    listingType: 'rent',
    minPrice: null,
    maxPrice: null,
    bedrooms: null,
    bathrooms: null,
    nearestBtsId: null,
    maxBtsWalkingMinutes: 10,
    location: null,
    radius: 1000,
  })

  const searchProperties = async (filters: SearchFilters = searchFilters.value) => {
    loading.value = true
    error.value = null

    try {
      let query = supabase
        .from('properties')
        .select(`
          *,
          property_categories(name_en, name_th, icon),
          transport_stations(name_en, name_th, station_code),
          agents(id, full_name, rating),
          property_images(image_url, is_primary)
        `)
        .eq('status', 'active')
        .eq('is_available', true)

      if (filters.query) {
        query = query.or(`title_en.ilike.%${filters.query}%,title_th.ilike.%${filters.query}%,description_en.ilike.%${filters.query}%`)
      }

      if (filters.propertyType) {
        query = query.eq('property_type', filters.propertyType)
      }

      if (filters.listingType && filters.listingType !== 'both') {
        query = query.eq('listing_type', filters.listingType)
      }

      if (filters.minPrice !== null) {
        const priceColumn = filters.listingType === 'sale' ? 'sale_price' : 'rent_price'
        query = query.gte(priceColumn, filters.minPrice)
      }

      if (filters.maxPrice !== null) {
        const priceColumn = filters.listingType === 'sale' ? 'sale_price' : 'rent_price'
        query = query.lte(priceColumn, filters.maxPrice)
      }

      if (filters.bedrooms !== null) {
        query = query.eq('bedrooms', filters.bedrooms)
      }

      if (filters.bathrooms !== null) {
        query = query.gte('bathrooms', filters.bathrooms)
      }

      if (filters.nearestBtsId) {
        query = query.eq('nearest_bts_id', filters.nearestBtsId)
      }

      if (filters.maxBtsWalkingMinutes !== null) {
        query = query.lte('bts_walking_minutes', filters.maxBtsWalkingMinutes)
      }

      const { data, error: queryError } = await query
        .order('created_at', { ascending: false })
        .limit(50)

      if (queryError) throw queryError

      properties.value = data || []
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err)
      console.error('Error searching properties:', err)
    } finally {
      loading.value = false
    }
  }

  const searchNearBTS = async (stationId: string, radiusMeters: number = 1000) => {
    loading.value = true
    error.value = null

    try {
      // Add type assertion for the RPC call
      const { data, error: queryError } = await (supabase as any)
        .rpc('get_properties_near_bts', {
          station_id: stationId,
          radius_meters: radiusMeters
        })

      if (queryError) throw queryError

      properties.value = data || []
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err)
      console.error('Error searching near BTS:', err)
    } finally {
      loading.value = false
    }
  }

  const getProperty = async (id: string): Promise<Property | null> => {
    loading.value = true
    error.value = null

    try {
      const { data, error: queryError } = await supabase
        .from('properties')
        .select(`
          *,
          property_categories(name_en, name_th, icon),
          transport_stations(name_en, name_th, station_code, location),
          agents(id, full_name, phone, email, rating, company:companies(name)),
          property_images(image_url, thumbnail_url, caption_en, sort_order),
          property_amenities(amenities(name_en, name_th, icon))
        `)
        .eq('id', id)
        .single()

      if (queryError) throw queryError

      // Add type assertion for the RPC call
      await (supabase as any).rpc('update_property_view_count', { property_id: id })

      return data
    } catch (err) {
      error.value = err instanceof Error ? err.message : String(err)
      console.error('Error getting property:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  const addToFavorites = async (propertyId: string, notes: string = ''): Promise<boolean> => {
    if (!user.value) {
      throw new Error('User must be logged in to add favorites')
    }

    try {
      // Add type assertion for the insert
      const { error: insertError } = await supabase
        .from('user_favorites')
        .insert([
          {
            user_id: user.value.id,
            property_id: propertyId,
            notes
          }
        ] as any)

      if (insertError) throw insertError

      return true
    } catch (err) {
      console.error('Error adding to favorites:', err)
      throw err
    }
  }

  const removeFromFavorites = async (propertyId: string): Promise<boolean> => {
    if (!user.value) return false

    try {
      const { error: deleteError } = await supabase
        .from('user_favorites')
        .delete()
        .eq('user_id', user.value.id)
        .eq('property_id', propertyId)

      if (deleteError) throw deleteError

      return true
    } catch (err) {
      console.error('Error removing from favorites:', err)
      throw err
    }
  }

  const getFavorites = async (): Promise<Favorite[]> => {
    if (!user.value) return []

    try {
      const { data, error: queryError } = await supabase
        .from('user_favorites')
        .select(`
          *,
          properties(
            *,
            property_categories(name_en, name_th, icon),
            transport_stations(name_en, name_th, station_code),
            property_images(image_url, is_primary)
          )
        `)
        .eq('user_id', user.value.id)
        .order('created_at', { ascending: false })

      if (queryError) throw queryError

      return data || []
    } catch (err) {
      console.error('Error getting favorites:', err)
      return []
    }
  }

  const formatPrice = (price: number, currency: string = 'THB'): string => {
    if (!price) return 'Contact for price'

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })

    return formatter.format(price)
  }

  const getWalkingTimeText = (minutes: number): string => {
    if (!minutes) return 'Distance unknown'
    if (minutes <= 5) return `${minutes} min walk (Very close)`
    if (minutes <= 10) return `${minutes} min walk (Close)`
    if (minutes <= 15) return `${minutes} min walk (Walkable)`
    return `${minutes} min walk (Far)`
  }

  return {
    // State
    properties: readonly(properties),
    loading: readonly(loading),
    error: readonly(error),
    searchFilters,

    // Methods
    searchProperties,
    searchNearBTS,
    getProperty,
    addToFavorites,
    removeFromFavorites,
    getFavorites,
    formatPrice,
    getWalkingTimeText,
  }
}