<template>
  <div class="min-h-screen bg-gray-50 py-8">
    <div class="max-w-6xl mx-auto px-6">
      <h1 class="text-3xl font-bold text-brand-navy mb-8">Create Property Listing</h1>
      
      <form @submit.prevent="createProperty" class="space-y-8">
        <!-- Basic Property Details -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 class="text-xl font-semibold text-brand-navy mb-6">Basic Details</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">Property Title (English) *</label>
              <input 
                v-model="form.title_en"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="Modern 2BR Condo with City View"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Property Type *</label>
              <select 
                v-model="form.property_type"
                required
                @change="resetPropertySpecificFields"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
              >
                <option value="">Select type...</option>
                <option value="condo">Condominium</option>
                <option value="house">House</option>
                <option value="townhouse">Townhouse</option>
                <option value="commercial">Commercial</option>
                <option value="land">Land</option>
                <option value="warehouse">Warehouse</option>
              </select>
            </div>
            
            <div class="lg:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">Property Title (Thai)</label>
              <input 
                v-model="form.title_th"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="คอนโดสมัยใหม่ 2 ห้องนอน วิวเมือง"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Listing Type *</label>
              <select 
                v-model="form.listing_type"
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
              >
                <option value="">Select type...</option>
                <option value="rent">For Rent</option>
                <option value="sale">For Sale</option>
                <option value="both">Both</option>
              </select>
            </div>
            
            <div class="lg:col-span-3">
              <label class="block text-sm font-medium text-gray-700 mb-2">Description (English)</label>
              <textarea 
                v-model="form.description_en"
                rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="Describe the property features, location benefits, etc."
              ></textarea>
            </div>
            
            <div class="lg:col-span-3">
              <label class="block text-sm font-medium text-gray-700 mb-2">Description (Thai)</label>
              <textarea 
                v-model="form.description_th"
                rows="3"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="คำอธิบายคุณสมบัติของอสังหาริมทรัพย์"
              ></textarea>
            </div>
          </div>
        </div>

        <!-- Location Details -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 class="text-xl font-semibold text-brand-navy mb-6">Location</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="lg:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">Address (English) *</label>
              <input 
                v-model="form.address_en"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="123 Sukhumvit Road, Klongtoei"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">District *</label>
              <input 
                v-model="form.district"
                type="text" 
                required
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="Klongtoei"
              />
            </div>
            
            <div class="lg:col-span-2">
              <label class="block text-sm font-medium text-gray-700 mb-2">Address (Thai)</label>
              <input 
                v-model="form.address_th"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="123 ถนนสุขุมวิท คลองเตย"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Province</label>
              <input 
                v-model="form.province"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="Bangkok"
              />
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Postal Code</label>
              <input 
                v-model="form.postal_code"
                type="text" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="10110"
              />
            </div>
          </div>
        </div>

        <!-- Property Specifications - Dynamic based on type -->
        <div v-if="form.property_type" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 class="text-xl font-semibold text-brand-navy mb-6">{{ getPropertyTypeTitle() }} Specifications</h2>
          
          <!-- CONDO SPECIFIC FIELDS -->
          <div v-if="form.property_type === 'condo'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Bedrooms *</label>
              <input v-model.number="form.bedrooms" type="number" min="0" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="2" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Bathrooms *</label>
              <input v-model.number="form.bathrooms" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="2" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Floor Area (sqm) *</label>
              <input v-model.number="form.floor_area_sqm" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="65" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Floor Level *</label>
              <input v-model.number="form.floor_level" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="15" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Building Floors</label>
              <input v-model.number="form.building_floors" type="number" min="1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="30" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Unit Number</label>
              <input v-model="form.unit_number" type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="1502" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Furnished</label>
              <select v-model="form.furnished" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light">
                <option value="">Select...</option>
                <option value="unfurnished">Unfurnished</option>
                <option value="partially">Partially Furnished</option>
                <option value="fully">Fully Furnished</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Parking Spaces</label>
              <input v-model.number="form.parking_spaces" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="1" />
            </div>
          </div>

          <!-- HOUSE SPECIFIC FIELDS -->
          <div v-if="form.property_type === 'house'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Bedrooms *</label>
              <input v-model.number="form.bedrooms" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="3" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Bathrooms *</label>
              <input v-model.number="form.bathrooms" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="2" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Usable Area (sqm) *</label>
              <input v-model.number="form.usable_area_sqm" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="150" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Land Size (sqwa) *</label>
              <input v-model.number="form.land_size_sqwa" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="50" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Number of Floors</label>
              <input v-model.number="form.number_of_floors" type="number" min="1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="2" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Furnished</label>
              <select v-model="form.furnished" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light">
                <option value="">Select...</option>
                <option value="unfurnished">Unfurnished</option>
                <option value="partially">Partially Furnished</option>
                <option value="fully">Fully Furnished</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Parking Spaces</label>
              <input v-model.number="form.parking_spaces" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="2" />
            </div>
          </div>

          <!-- TOWNHOUSE SPECIFIC FIELDS -->
          <div v-if="form.property_type === 'townhouse'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Bedrooms *</label>
              <input v-model.number="form.bedrooms" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="3" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Bathrooms *</label>
              <input v-model.number="form.bathrooms" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="2" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Usable Area (sqm) *</label>
              <input v-model.number="form.usable_area_sqm" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="120" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Land Size (sqwa) *</label>
              <input v-model.number="form.land_size_sqwa" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="25" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Number of Floors</label>
              <input v-model.number="form.number_of_floors" type="number" min="1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="3" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Furnished</label>
              <select v-model="form.furnished" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light">
                <option value="">Select...</option>
                <option value="unfurnished">Unfurnished</option>
                <option value="partially">Partially Furnished</option>
                <option value="fully">Fully Furnished</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Parking Spaces</label>
              <input v-model.number="form.parking_spaces" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="1" />
            </div>
          </div>

          <!-- COMMERCIAL SPECIFIC FIELDS -->
          <div v-if="form.property_type === 'commercial'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Floor Area (sqm) *</label>
              <input v-model.number="form.floor_area_sqm" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="200" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Floor Level</label>
              <input v-model.number="form.floor_level" type="number" min="1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="3" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Building Floors</label>
              <input v-model.number="form.building_floors" type="number" min="1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="20" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Commercial Type *</label>
              <select v-model="form.commercial_type" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light">
                <option value="">Select...</option>
                <option value="office">Office</option>
                <option value="retail">Retail</option>
                <option value="restaurant">Restaurant</option>
                <option value="warehouse">Warehouse</option>
                <option value="shophouse">Shophouse</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Parking Spaces</label>
              <input v-model.number="form.parking_spaces" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="3" />
            </div>
          </div>

          <!-- LAND SPECIFIC FIELDS -->
          <div v-if="form.property_type === 'land'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Land Size (sqwa) *</label>
              <input v-model.number="form.land_size_sqwa" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="100" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Land Size (rai)</label>
              <input v-model.number="form.land_size_rai" type="number" min="0" step="0.01" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="0.25" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Land Type *</label>
              <select v-model="form.land_type" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light">
                <option value="">Select...</option>
                <option value="residential">Residential</option>
                <option value="commercial">Commercial</option>
                <option value="industrial">Industrial</option>
                <option value="agricultural">Agricultural</option>
                <option value="mixed_use">Mixed Use</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Land Title Type *</label>
              <select v-model="form.land_title_type" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light">
                <option value="">Select...</option>
                <option value="chanote">Chanote</option>
                <option value="nor_sor_3_kor">Nor Sor 3 Kor</option>
                <option value="nor_sor_3">Nor Sor 3</option>
                <option value="possession_right">Possession Right</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Road Access</label>
              <select v-model="form.road_access" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light">
                <option value="">Select...</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Road Width (meters)</label>
              <input v-model.number="form.road_width_meters" type="number" min="1" step="0.1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="6" />
            </div>
          </div>

          <!-- WAREHOUSE SPECIFIC FIELDS -->
          <div v-if="form.property_type === 'warehouse'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Warehouse Area (sqm) *</label>
              <input v-model.number="form.warehouse_area_sqm" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="500" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Land Size (sqwa) *</label>
              <input v-model.number="form.land_size_sqwa" type="number" min="1" required class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="200" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Ceiling Height (meters)</label>
              <input v-model.number="form.ceiling_height_meters" type="number" min="1" step="0.1" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="8" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Loading Docks</label>
              <input v-model.number="form.loading_docks" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="2" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Office Area (sqm)</label>
              <input v-model.number="form.office_area_sqm" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="50" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Parking Spaces</label>
              <input v-model.number="form.parking_spaces" type="number" min="0" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light" placeholder="5" />
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Warehouse Type</label>
              <select v-model="form.warehouse_type" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light">
                <option value="">Select...</option>
                <option value="cold_storage">Cold Storage</option>
                <option value="dry_storage">Dry Storage</option>
                <option value="distribution">Distribution</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="mixed_use">Mixed Use</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Pricing -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 class="text-xl font-semibold text-brand-navy mb-6">Pricing</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div v-if="form.listing_type === 'rent' || form.listing_type === 'both'">
              <label class="block text-sm font-medium text-gray-700 mb-2">Monthly Rent (THB) *</label>
              <input 
                v-model.number="form.rent_price"
                type="number" 
                min="1"
                :required="form.listing_type === 'rent' || form.listing_type === 'both'"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="25000"
              />
            </div>
            
            <div v-if="form.listing_type === 'sale' || form.listing_type === 'both'">
              <label class="block text-sm font-medium text-gray-700 mb-2">Sale Price (THB) *</label>
              <input 
                v-model.number="form.sale_price"
                type="number" 
                min="1"
                :required="form.listing_type === 'sale' || form.listing_type === 'both'"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="3500000"
              />
            </div>
            
            <div v-if="form.listing_type === 'rent' || form.listing_type === 'both'">
              <label class="block text-sm font-medium text-gray-700 mb-2">Deposit (Months)</label>
              <input 
                v-model.number="form.deposit_months"
                type="number" 
                min="0"
                max="12"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="2"
              />
            </div>
            
            <div v-if="form.property_type === 'land'">
              <label class="block text-sm font-medium text-gray-700 mb-2">Price per Sqwa (THB)</label>
              <input 
                v-model.number="form.price_per_sqwa"
                type="number" 
                min="1"
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-brand-red-light"
                placeholder="50000"
              />
            </div>
            
            <!-- Show message if no listing type selected -->
            <div v-if="!form.listing_type" class="lg:col-span-4">
              <p class="text-gray-500 text-center py-8">Please select a listing type above to configure pricing</p>
            </div>
          </div>
        </div>

        <!-- Property Images -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 class="text-xl font-semibold text-brand-navy mb-4">Property Images</h2>
          
          <!-- Image Upload Zone -->
          <div 
            @drop="handleImageDrop"
            @dragover.prevent
            @dragenter.prevent
            @click="triggerImageUpload"
            class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-brand-red-light transition-colors"
          >
            <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
            <p class="text-gray-600">Drop images here or click to browse</p>
            <p class="text-sm text-gray-500 mt-2">JPEG, PNG, WebP, HEIC supported • Max 20 images • Auto-optimized by BunnyCDN</p>
          </div>
          
          <input 
            ref="imageInput"
            type="file" 
            multiple 
            accept="image/*"
            @change="handleImageSelect"
            class="hidden"
          />
          
          <!-- Image Upload Progress -->
          <div v-if="imageUploads.length > 0" class="mt-6 space-y-3">
            <h3 class="font-medium text-gray-900">Uploading Images...</h3>
            <div v-for="upload in imageUploads" :key="upload.id" class="flex items-center space-x-3">
              <div class="flex-1">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-gray-600">{{ upload.name }}</span>
                  <span class="text-gray-500">{{ formatFileSize(upload.size) }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    class="bg-brand-red-light h-2 rounded-full transition-all duration-300"
                    :style="{ width: upload.progress + '%' }"
                  ></div>
                </div>
              </div>
              <div v-if="upload.status === 'success'" class="text-green-500">✓</div>
              <div v-else-if="upload.status === 'error'" class="text-red-500">✗</div>
            </div>
          </div>
          
          <!-- Uploaded Images Preview -->
          <div v-if="uploadedImages.length > 0" class="mt-6">
            <h3 class="font-medium text-gray-900 mb-4">Uploaded Images ({{ uploadedImages.length }}/20)</h3>
            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <div v-for="(image, index) in uploadedImages" :key="image.id" class="relative group">
                <img 
                  :src="image.url + '?width=200&height=150'" 
                  :alt="`Property image ${index + 1}`"
                  class="w-full h-24 object-cover rounded-lg border border-gray-200"
                />
                <button 
                  @click="removeImage(index)"
                  class="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  ×
                </button>
                <div v-if="index === 0" class="absolute bottom-1 left-1 bg-brand-red-light text-white text-xs px-2 py-1 rounded">
                  Featured
                </div>
                <button 
                  v-if="index !== 0"
                  @click="setFeaturedImage(index)"
                  class="absolute bottom-1 left-1 bg-gray-600 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Set Featured
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Property Video -->
        <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 class="text-xl font-semibold text-brand-navy mb-4">Property Video Tour (Optional)</h2>
          
          <!-- Video Upload Zone -->
          <div v-if="!videoUpload.file && !form.video_tour">
            <div 
              @drop="handleVideoDrop"
              @dragover.prevent
              @dragenter.prevent
              @click="triggerVideoUpload"
              class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-brand-red-light transition-colors"
            >
              <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p class="text-gray-600">Drop video here or click to browse</p>
              <p class="text-sm text-gray-500 mt-2">MP4, MOV, AVI supported • Max 200MB • Auto-optimized by BunnyCDN</p>
            </div>
            
            <input 
              ref="videoInput"
              type="file" 
              accept="video/*"
              @change="handleVideoSelect"
              class="hidden"
            />
          </div>
          
          <!-- Video Upload Progress -->
          <div v-if="videoUpload.status === 'uploading'" class="mt-4">
            <div class="flex items-center space-x-3">
              <div class="flex-1">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-gray-600">{{ videoUpload.file?.name }}</span>
                  <span class="text-gray-500">{{ formatFileSize(videoUpload.file?.size) }}</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    class="bg-brand-red-light h-2 rounded-full transition-all duration-300"
                    :style="{ width: videoUpload.progress + '%' }"
                  ></div>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-500 mt-2">Uploading to BunnyCDN...</p>
          </div>
          
          <!-- Video Processing Status -->
          <div v-if="videoUpload.status === 'processing'" class="mt-4">
            <div class="flex items-center space-x-3">
              <div class="flex-1">
                <div class="flex justify-between text-sm mb-1">
                  <span class="text-gray-600">{{ videoUpload.file?.name }}</span>
                  <span class="text-green-500">✓ Uploaded</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-2">
                  <div class="bg-yellow-500 h-2 rounded-full animate-pulse" style="width: 100%;"></div>
                </div>
              </div>
            </div>
            <p class="text-sm text-yellow-600 mt-2">
              🎬 Processing video... This usually takes 30-60 seconds. 
              <br><span class="text-xs text-gray-500">We're checking every 10 seconds until it's ready!</span>
            </p>
            <!-- Debug info -->
            <div class="mt-2 text-xs text-gray-400">
              DEBUG: Status={{ videoUpload.status }}, HasVideoTour={{ !!form.video_tour }}, VideoID={{ form.video_id }}
            </div>
          </div>
          
          <!-- FORCE SHOW Video Preview if we have URL and ID -->
          <div v-if="form.video_tour && form.video_id" class="mt-4">
            <h3 class="font-medium text-gray-900 mb-4">Property Video Tour</h3>
            <div class="relative w-full bg-gray-900 rounded-lg overflow-hidden">
              <!-- Use iframe for BunnyCDN Stream player -->
              <iframe
                :key="`video-${videoPlayerKey}-${form.video_id}`"
                :src="form.video_tour"
                style="border: none; position: absolute; top: 0; left: 0; height: 100%; width: 100%; min-height: 400px;"
                allowfullscreen="true"
                allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
                class="rounded-lg"
              ></iframe>
              <!-- Maintain 16:9 aspect ratio with minimum height -->
              <div class="w-full" style="padding-bottom: 56.25%; min-height: 400px;"></div>
              
              <button 
                @click="removeVideo"
                class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600 transition-colors z-20"
              >
                ×
              </button>
            </div>
            <div class="mt-2 text-sm text-gray-600">
              <p v-if="form.video_duration_seconds">
                Duration: {{ formatDuration(form.video_duration_seconds) }}
              </p>
              <p class="text-xs text-gray-500">
                Original size: {{ formatFileSize(videoUpload.file?.size) }}
                <span v-if="videoUpload.processedSize"> → Processed: {{ formatFileSize(videoUpload.processedSize) }}</span>
              </p>
            </div>
          </div>
        </div>

        <!-- Amenities -->
        <div v-if="form.property_type" class="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 class="text-xl font-semibold text-brand-navy mb-6">Amenities</h2>
          
          <!-- Property-specific amenities -->
          <div class="mb-6">
            <h3 class="text-lg font-medium text-gray-800 mb-4">{{ getPropertyTypeTitle() }} Features</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <label v-for="amenity in getPropertyAmenities()" :key="amenity.key" class="flex items-center space-x-2 cursor-pointer">
                <input 
                  v-model="form.unit_amenities[amenity.key]" 
                  type="checkbox" 
                  class="rounded border-gray-300 text-brand-red-light focus:ring-brand-red-light"
                />
                <span class="text-sm text-gray-700">{{ amenity.label }}</span>
              </label>
            </div>
          </div>

          <!-- Project/Building amenities -->
          <div v-if="form.property_type !== 'land'">
            <h3 class="text-lg font-medium text-gray-800 mb-4">Building/Project Facilities</h3>
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <label v-for="amenity in getBuildingAmenities()" :key="amenity.key" class="flex items-center space-x-2 cursor-pointer">
                <input 
                  v-model="form.project_amenities[amenity.key]" 
                  type="checkbox" 
                  class="rounded border-gray-300 text-brand-red-light focus:ring-brand-red-light"
                />
                <span class="text-sm text-gray-700">{{ amenity.label }}</span>
              </label>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="flex justify-end space-x-4">
          <button 
            type="button"
            @click="saveDraft"
            class="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Save as Draft
          </button>
          <button 
            type="submit"
            :disabled="isSubmitting || imageUploads.some(u => u.status === 'uploading') || videoUpload.status === 'uploading'"
            class="px-8 py-3 bg-brand-navy text-white rounded-lg hover:bg-brand-red-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isSubmitting">Creating Listing...</span>
            <span v-else>Create Listing</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, nextTick } from 'vue'

// Page title
useHead({
  title: 'Create Property Listing - thaikeys.co.th'
})

// BunnyCDN Configuration from env (only CDN URL needed client-side)
const config = useRuntimeConfig()
const BUNNY_CDN_URL = config.public.bunnyCdnUrl

// Form data - comprehensive for all property types
const form = reactive({
  // Basic details
  title_en: '',
  title_th: '',
  description_en: '',
  description_th: '',
  property_type: '',
  listing_type: '',
  
  // Location
  address_en: '',
  address_th: '',
  district: '',
  province: 'Bangkok',
  postal_code: '',
  
  // Pricing
  rent_price: null,
  sale_price: null,
  deposit_months: 2,
  price_per_sqwa: null, // for land
  
  // Common property fields
  bedrooms: null,
  bathrooms: null,
  parking_spaces: null,
  furnished: '',
  
  // Condo specific
  floor_area_sqm: null,
  floor_level: null,
  building_floors: null,
  unit_number: '',
  
  // House/Townhouse specific
  usable_area_sqm: null,
  land_size_sqwa: null,
  number_of_floors: null,
  
  // Commercial specific
  commercial_type: '',
  
  // Land specific
  land_size_rai: null,
  land_type: '',
  land_title_type: '',
  road_access: null,
  road_width_meters: null,
  
  // Warehouse specific
  warehouse_area_sqm: null,
  ceiling_height_meters: null,
  loading_docks: null,
  office_area_sqm: null,
  warehouse_type: '',
  
  // Media - FIXED VIDEO ID HANDLING
  video_tour: null,
  video_id: null,
  video_duration_seconds: null,
  
  // Amenities (will be populated based on property type)
  unit_amenities: {},
  project_amenities: {}
})

// Upload state
const imageUploads = ref([])
const uploadedImages = ref([])
const videoUpload = ref({
  file: null,
  status: null,
  progress: 0,
  processedSize: null
})
const isSubmitting = ref(false)
const videoPlayerKey = ref(0) // For forcing iframe refresh

// Refs for file inputs
const imageInput = ref(null)
const videoInput = ref(null)

// Supabase client
const supabase = useSupabaseClient()

// Property type specific amenities
const propertyAmenities = {
  condo: [
    { key: 'air_conditioner', label: 'Air Conditioner' },
    { key: 'balcony', label: 'Balcony' },
    { key: 'built_in_wardrobe', label: 'Built-in Wardrobe' },
    { key: 'cable_tv', label: 'Cable TV' },
    { key: 'internet', label: 'Internet/WiFi' },
    { key: 'kitchen_appliances', label: 'Kitchen Appliances' },
    { key: 'microwave', label: 'Microwave' },
    { key: 'refrigerator', label: 'Refrigerator' },
    { key: 'washing_machine', label: 'Washing Machine' },
    { key: 'water_heater', label: 'Water Heater' }
  ],
  house: [
    { key: 'air_conditioner', label: 'Air Conditioner' },
    { key: 'garden', label: 'Garden' },
    { key: 'maid_room', label: 'Maid Room' },
    { key: 'storage_room', label: 'Storage Room' },
    { key: 'terrace', label: 'Terrace' },
    { key: 'internet', label: 'Internet/WiFi' },
    { key: 'kitchen_appliances', label: 'Kitchen Appliances' },
    { key: 'water_heater', label: 'Water Heater' },
    { key: 'carport', label: 'Carport' },
    { key: 'fence', label: 'Fence' }
  ],
  townhouse: [
    { key: 'air_conditioner', label: 'Air Conditioner' },
    { key: 'balcony', label: 'Balcony' },
    { key: 'garden', label: 'Garden' },
    { key: 'storage_room', label: 'Storage Room' },
    { key: 'internet', label: 'Internet/WiFi' },
    { key: 'kitchen_appliances', label: 'Kitchen Appliances' },
    { key: 'water_heater', label: 'Water Heater' },
    { key: 'carport', label: 'Carport' },
    { key: 'covered_parking', label: 'Covered Parking' }
  ],
  commercial: [
    { key: 'air_conditioner', label: 'Air Conditioner' },
    { key: 'elevator_access', label: 'Elevator Access' },
    { key: 'kitchen_facilities', label: 'Kitchen Facilities' },
    { key: 'reception_area', label: 'Reception Area' },
    { key: 'storage_room', label: 'Storage Room' },
    { key: 'internet', label: 'Internet/WiFi' },
    { key: 'conference_room', label: 'Conference Room' },
    { key: 'restroom', label: 'Restroom' }
  ],
  land: [
    { key: 'utilities_available', label: 'Utilities Available' },
    { key: 'water_supply', label: 'Water Supply' },
    { key: 'electricity', label: 'Electricity' },
    { key: 'drainage', label: 'Drainage System' },
    { key: 'fence', label: 'Fence' }
  ],
  warehouse: [
    { key: 'forklift_access', label: 'Forklift Access' },
    { key: 'crane_available', label: 'Crane Available' },
    { key: 'cold_storage', label: 'Cold Storage' },
    { key: 'security_fence', label: 'Security Fence' },
    { key: 'office_space', label: 'Office Space' },
    { key: 'loading_bay', label: 'Loading Bay' }
  ]
}

const buildingAmenities = [
  { key: 'pool', label: 'Swimming Pool' },
  { key: 'fitness', label: 'Fitness Center' },
  { key: 'security_24h', label: '24h Security' },
  { key: 'cctv', label: 'CCTV' },
  { key: 'elevator', label: 'Elevator' },
  { key: 'parking', label: 'Parking' },
  { key: 'playground', label: 'Playground' },
  { key: 'garden', label: 'Garden' },
  { key: 'lobby', label: 'Lobby' },
  { key: 'shuttle_service', label: 'Shuttle Service' },
  { key: 'co_working_space', label: 'Co-working Space' },
  { key: 'rooftop_deck', label: 'Rooftop Deck' }
]

// Methods
const getPropertyTypeTitle = () => {
  const titles = {
    condo: 'Condominium',
    house: 'House',
    townhouse: 'Townhouse', 
    commercial: 'Commercial',
    land: 'Land',
    warehouse: 'Warehouse'
  }
  return titles[form.property_type] || 'Property'
}

const getPropertyAmenities = () => {
  return propertyAmenities[form.property_type] || []
}

const getBuildingAmenities = () => {
  return buildingAmenities
}

const resetPropertySpecificFields = () => {
  // Reset all property-specific fields when type changes
  form.bedrooms = null
  form.bathrooms = null
  form.floor_area_sqm = null
  form.floor_level = null
  form.building_floors = null
  form.unit_number = ''
  form.usable_area_sqm = null
  form.land_size_sqwa = null
  form.number_of_floors = null
  form.commercial_type = ''
  form.land_size_rai = null
  form.land_type = ''
  form.land_title_type = ''
  form.road_access = null
  form.road_width_meters = null
  form.warehouse_area_sqm = null
  form.ceiling_height_meters = null
  form.loading_docks = null
  form.office_area_sqm = null
  form.warehouse_type = ''
  form.unit_amenities = {}
  form.project_amenities = {}
}

// Image upload functions
const triggerImageUpload = () => {
  if (uploadedImages.value.length >= 20) {
    alert('Maximum 20 images allowed')
    return
  }
  imageInput.value?.click()
}

const handleImageSelect = (event) => {
  const files = Array.from(event.target.files)
  processImageFiles(files)
  event.target.value = ''
}

const handleImageDrop = (event) => {
  event.preventDefault()
  const files = Array.from(event.dataTransfer.files).filter(file => file.type.startsWith('image/'))
  processImageFiles(files)
}

const processImageFiles = async (files) => {
  if (uploadedImages.value.length + files.length > 20) {
    alert('Maximum 20 images allowed')
    return
  }
  
  for (const file of files) {
    const uploadId = Date.now() + Math.random()
    
    const upload = {
      id: uploadId,
      name: file.name,
      size: file.size,
      progress: 0,
      status: 'uploading'
    }
    imageUploads.value.push(upload)
    
    try {
      // Create FormData for upload
      const formData = new FormData()
      formData.append('file', file)
      
      // Upload via Nuxt API route
      const response = await $fetch('/api/upload/image', {
        method: 'POST',
        body: formData
      })
      
      upload.progress = 100
      upload.status = 'success'
      
      uploadedImages.value.push({
        id: uploadId,
        url: response.url,
        path: response.path,
        fileName: response.fileName
      })
      
    } catch (error) {
      upload.status = 'error'
      console.error('Image upload error:', error)
      alert(`Failed to upload ${file.name}: ${error.data?.message || error.message}`)
    }
  }
}

const removeImage = async (index) => {
  const image = uploadedImages.value[index]
  
  try {
    // Delete image from Storage API
    await $fetch('/api/upload/delete', {
      method: 'DELETE',
      query: { 
        path: image.path,
        type: 'image'
      }
    })
  } catch (error) {
    console.error('Error deleting image from BunnyCDN:', error)
  }
  
  uploadedImages.value.splice(index, 1)
  const uploadIndex = imageUploads.value.findIndex(u => u.id === image.id)
  if (uploadIndex > -1) {
    imageUploads.value.splice(uploadIndex, 1)
  }
}

const setFeaturedImage = (index) => {
  const [image] = uploadedImages.value.splice(index, 1)
  uploadedImages.value.unshift(image)
}

// FIXED Video upload functions
const triggerVideoUpload = () => {
  videoInput.value?.click()
}

const handleVideoSelect = (event) => {
  const file = event.target.files[0]
  if (file) {
    processVideoFile(file)
  }
  event.target.value = ''
}

const handleVideoDrop = (event) => {
  event.preventDefault()
  const files = Array.from(event.dataTransfer.files).filter(file => file.type.startsWith('video/'))
  if (files.length > 0) {
    processVideoFile(files[0])
  }
}

const processVideoFile = async (file) => {
  console.log('🎬 Video upload started:', file.name)
  
  if (file.size > 200 * 1024 * 1024) {
    alert('Video file too large. Maximum size is 200MB.')
    return
  }
  
  videoUpload.value = {
    file,
    status: 'uploading',
    progress: 0,
    processedSize: null
  }
  
  try {
    console.log('🎬 Creating FormData for video upload...')
    
    // Create FormData for upload
    const formData = new FormData()
    formData.append('file', file)
    
    console.log('🎬 Sending request to /api/upload/video...')
    
    // Upload via Nuxt API route
    const response = await $fetch('/api/upload/video', {
      method: 'POST',
      body: formData
    })
    
    console.log('🎬 Video upload API response:', response)
    
    videoUpload.value.progress = 100
    videoUpload.value.status = 'processing'  // Change to processing
    videoUpload.value.processedSize = response.processedSize
    
    // Store video ID immediately but don't show player yet
    form.video_id = response.videoId
    
    console.log('🎬 Video uploaded, now checking processing status...')
    
    // Get video duration from the file
    const video = document.createElement('video')
    video.src = URL.createObjectURL(file)
    video.onloadedmetadata = () => {
      form.video_duration_seconds = Math.floor(video.duration)
      console.log('🎬 Video duration set:', form.video_duration_seconds)
    }
    
    // Start polling for video processing completion
    await pollVideoProcessingStatus(response.videoId, response.url)
    
  } catch (error) {
    videoUpload.value.status = 'error'
    console.error('🎬 Video upload error:', error)
    alert(`Failed to upload video: ${error.data?.message || error.message}`)
  }
}

// NEW: Poll video processing status
const pollVideoProcessingStatus = async (videoId, embedUrl) => {
  console.log('🎬 Starting video processing status polling for video:', videoId)
  console.log('🎬 Embed URL that will be used:', embedUrl)
  
  const maxAttempts = 20 // 3+ minutes max (10 second intervals)
  let attempts = 0
  
  const checkStatus = async () => {
    attempts++
    console.log(`🎬 Checking processing status (attempt ${attempts}/${maxAttempts})...`)
    
    try {
      // Check video status via our API
      const statusResponse = await $fetch('/api/upload/video-status', {
        method: 'GET',
        query: { videoId }
      })
      
      console.log('🎬 Video status response:', JSON.stringify(statusResponse, null, 2))
      
      // BunnyCDN Status codes: 0=Queued, 1=Processing, 2=Encoding, 3=Finished, 4=Error, 5=Timed out
      
      // Success case: Status is 3 (Finished)
      if (statusResponse.status === 3) {
        console.log('🎬 SUCCESS! Video processing complete! Status = 3 (Finished)')
        
        try {
          console.log('🎬 Setting form.video_tour to:', embedUrl)
          console.log('🎬 Video ID already stored:', form.video_id)
          
          // Set status first to trigger reactivity
          videoUpload.value = {
            ...videoUpload.value,
            status: 'success'
          }
          console.log('🎬 Status set to success:', videoUpload.value.status)
          
          // Then set the video URL
          form.video_tour = embedUrl
          console.log('🎬 Video tour URL set:', form.video_tour)
          
          console.log('🎬 Final form state:', {
            video_tour: form.video_tour,
            video_id: form.video_id
          })
          
          console.log('🎬 About to call nextTick...')
          await nextTick()
          console.log('🎬 nextTick completed')
          
          console.log('🎬 About to update videoPlayerKey...')
          videoPlayerKey.value++
          console.log('🎬 Player key updated to:', videoPlayerKey.value)
          
          // Force Vue to update by touching the reactive refs
          console.log('🎬 Forcing Vue reactivity update...')
          await nextTick()
          
          console.log('🎬 SUCCESS BLOCK COMPLETED!')
          return true
        } catch (error) {
          console.error('🎬 ERROR in success block:', error)
          throw error
        }
      }
      
      // BunnyCDN quirk: Sometimes returns status 4 (Error) but video is actually ready
      // Check if video has duration OR storage size - this means it processed successfully
      if (statusResponse.status === 4 && (statusResponse.duration > 0 || statusResponse.storageSize > 0)) {
        console.log('🎬 SUCCESS! BunnyCDN shows error status but video has duration/size - treating as success')
        console.log('🎬 Duration:', statusResponse.duration, 'Storage size:', statusResponse.storageSize)
        
        videoUpload.value.status = 'success'
        form.video_tour = embedUrl
        
        console.log('🎬 Final form state:', {
          video_tour: form.video_tour,
          video_id: form.video_id
        })
        
        await nextTick()
        videoPlayerKey.value++
        console.log('🎬 Player key updated to:', videoPlayerKey.value)
        
        return true
      }
      
      // Real error: Status 4 with no duration/size, or status 5 (timeout)
      if ((statusResponse.status === 4 && statusResponse.duration === 0 && statusResponse.storageSize === 0) || statusResponse.status === 5) {
        if (attempts < 10) {
          console.log('🎬 Error status but will try a few more times...')
          return false // Keep trying for a bit
        } else {
          console.log('🎬 Video processing failed after multiple attempts')
          videoUpload.value.status = 'error'
          alert('Video processing failed. Please try uploading again.')
          return true
        }
      }
      
      // Still processing (status 0, 1, or 2)
      console.log(`🎬 Video still processing (status: ${statusResponse.status} = ${statusResponse.statusText}), checking again in 10 seconds...`)
      return false
      
    } catch (error) {
      console.error('🎬 ERROR checking video status:', error)
      
      // After many attempts, just show the video anyway
      if (attempts >= maxAttempts) {
        console.log('🎬 Max attempts reached, showing video player anyway')
        videoUpload.value.status = 'success'
        form.video_tour = embedUrl
        await nextTick()
        videoPlayerKey.value++
        return true
      }
      
      return false
    }
  }
  
  // Initial check
  console.log('🎬 Running initial status check...')
  const completed = await checkStatus()
  if (completed) {
    console.log('🎬 Initial check completed, video is ready!')
    return
  }
  
  // Set up polling interval
  console.log('🎬 Setting up 10-second polling interval...')
  const pollInterval = setInterval(async () => {
    console.log('🎬 Polling interval tick...')
    const completed = await checkStatus()
    
    if (completed || attempts >= maxAttempts) {
      console.log('🎬 Clearing polling interval')
      clearInterval(pollInterval)
    }
  }, 10000) // Check every 10 seconds
}

const removeVideo = async () => {
  console.log('🎬 Remove video function called')
  console.log('🎬 Current video state:', {
    video_tour: form.video_tour,
    video_id: form.video_id
  })
  
  if (form.video_tour && form.video_id) {
    try {
      console.log('🎬 Attempting to delete video with ID:', form.video_id)
      // Delete video from Stream API using video ID
      const result = await $fetch('/api/upload/delete', {
        method: 'DELETE',
        query: { 
          videoId: form.video_id,
          type: 'video'
        }
      })
      console.log('🎬 Delete API result:', result)
    } catch (error) {
      console.error('🎬 Error deleting video from BunnyCDN Stream:', error)
    }
  } else {
    console.log('🎬 No video to delete or missing video ID')
  }
  
  // Clear form data
  console.log('🎬 Clearing video form data...')
  form.video_tour = null
  form.video_id = null
  form.video_duration_seconds = null
  videoUpload.value = { file: null, status: null, progress: 0, processedSize: null }
  videoPlayerKey.value++
  console.log('🎬 Video form data cleared')
}

// Form submission
const createProperty = async () => {
  isSubmitting.value = true
  
  try {
    // TEMP: Skip auth check for testing
    // const { data: { user } } = await supabase.auth.getUser()
    // if (!user) {
    //   alert('Please log in to create a property listing')
    //   return
    // }
    
    // Use dummy user ID for testing
    const dummyUserId = '550e8400-e29b-41d4-a716-446655440000'
    
    // Determine table name
    const tableMap = {
      'condo': 'condos',
      'house': 'houses', 
      'townhouse': 'townhouses',
      'commercial': 'commercial',
      'land': 'land',
      'warehouse': 'warehouses'
    }
    
    const tableName = tableMap[form.property_type]
    if (!tableName) {
      alert('Please select a valid property type')
      return
    }
    
    // Build property data based on schema
    const propertyData = {
      // Required fields
      listed_by_type: 'network_agent', // Change based on your auth system
      listed_by_id: dummyUserId, // Using dummy ID for testing
      agency_id: null, // Set if applicable
      landlord_id: null, // Set if applicable
      
      // Basic fields
      title_en: form.title_en,
      title_th: form.title_th,
      description_en: form.description_en,
      description_th: form.description_th,
      listing_type: form.listing_type,
      
      // Location
      address_en: form.address_en,
      address_th: form.address_th,
      district: form.district,
      province: form.province,
      postal_code: form.postal_code,
      
      // Pricing
      rent_price: form.rent_price,
      sale_price: form.sale_price,
      deposit_months: form.deposit_months,
      currency: 'THB',
      
      // Media
      images: uploadedImages.value.map(img => img.url),
      featured_image: uploadedImages.value[0]?.url || null,
      video_tour: form.video_tour,
      
      // Status
      status: 'active',
      is_available: true
    }
    
    // Add property-type specific fields
    if (form.property_type === 'condo') {
      Object.assign(propertyData, {
        bedrooms: form.bedrooms,
        bathrooms: form.bathrooms,
        floor_area_sqm: form.floor_area_sqm,
        floor_level: form.floor_level,
        building_floors: form.building_floors,
        unit_number: form.unit_number,
        furnished: form.furnished,
        parking_spaces: form.parking_spaces,
        unit_amenities: form.unit_amenities,
        project_amenities: form.project_amenities
      })
    } else if (form.property_type === 'house') {
      Object.assign(propertyData, {
        bedrooms: form.bedrooms,
        bathrooms: form.bathrooms,
        usable_area_sqm: form.usable_area_sqm,
        land_size_sqwa: form.land_size_sqwa,
        number_of_floors: form.number_of_floors,
        furnished: form.furnished,
        parking_spaces: form.parking_spaces,
        house_amenities: form.unit_amenities,
        project_amenities: form.project_amenities
      })
    } else if (form.property_type === 'townhouse') {
      Object.assign(propertyData, {
        bedrooms: form.bedrooms,
        bathrooms: form.bathrooms,
        usable_area_sqm: form.usable_area_sqm,
        land_size_sqwa: form.land_size_sqwa,
        number_of_floors: form.number_of_floors,
        furnished: form.furnished,
        parking_spaces: form.parking_spaces,
        townhouse_amenities: form.unit_amenities,
        project_amenities: form.project_amenities
      })
    } else if (form.property_type === 'commercial') {
      Object.assign(propertyData, {
        floor_area_sqm: form.floor_area_sqm,
        floor_level: form.floor_level,
        building_floors: form.building_floors,
        commercial_type: form.commercial_type,
        parking_spaces: form.parking_spaces,
        commercial_amenities: form.unit_amenities,
        building_amenities: form.project_amenities
      })
    } else if (form.property_type === 'land') {
      Object.assign(propertyData, {
        land_size_sqwa: form.land_size_sqwa,
        land_size_rai: form.land_size_rai,
        land_type: form.land_type,
        land_title_type: form.land_title_type,
        road_access: form.road_access === 'true',
        road_width_meters: form.road_width_meters,
        price_per_sqwa: form.price_per_sqwa,
        land_features: form.unit_amenities,
        area_amenities: form.project_amenities
      })
    } else if (form.property_type === 'warehouse') {
      Object.assign(propertyData, {
        warehouse_area_sqm: form.warehouse_area_sqm,
        land_size_sqwa: form.land_size_sqwa,
        ceiling_height_meters: form.ceiling_height_meters,
        loading_docks: form.loading_docks,
        office_area_sqm: form.office_area_sqm,
        parking_spaces: form.parking_spaces,
        warehouse_type: form.warehouse_type,
        warehouse_features: form.unit_amenities,
        complex_amenities: form.project_amenities
      })
    }
    
    // Insert into database
    const { data: property, error } = await supabase
      .from(tableName)
      .insert(propertyData)
      .select()
      .single()
    
    if (error) throw error
    
    alert('Property listing created successfully!')
    
    // Reset form
    resetForm()
    
    // Redirect to property page or listings
    // await navigateTo(`/properties/${property.id}`)
    
  } catch (error) {
    console.error('Error creating property:', error)
    alert('Error creating property: ' + error.message)
  } finally {
    isSubmitting.value = false
  }
}

const saveDraft = async () => {
  // Similar to createProperty but with status: 'draft'
  alert('Draft save functionality would go here')
}

const resetForm = () => {
  // Reset all form fields
  Object.keys(form).forEach(key => {
    if (typeof form[key] === 'string') {
      form[key] = key === 'province' ? 'Bangkok' : ''
    } else if (typeof form[key] === 'number') {
      form[key] = key === 'deposit_months' ? 2 : null
    } else if (typeof form[key] === 'object') {
      form[key] = {}
    } else {
      form[key] = null
    }
  })
  
  // Reset upload states
  uploadedImages.value = []
  imageUploads.value = []
  videoUpload.value = { file: null, status: null, progress: 0, processedSize: null }
  videoPlayerKey.value++
}

// Helper functions
const formatFileSize = (bytes) => {
  if (!bytes) return '0 B'
  const k = 1024
  const sizes = ['B', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i]
}

const formatDuration = (seconds) => {
  if (!seconds) return '0:00'
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`
}
</script>

<style scoped>
/* Custom styles for better UX */
.brand-navy {
  color: #1e3a8a;
}

.brand-red-light {
  color: #3b82f6;
}

/* Hide number input spinners for cleaner look */
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

/* Smooth transitions for form sections */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Progress bar animations */
.progress-bar {
  transition: width 0.3s ease;
}

/* Image grid hover effects */
.image-grid-item {
  transition: transform 0.2s ease;
}

.image-grid-item:hover {
  transform: scale(1.02);
}

/* Focus states for better accessibility */
input:focus,
select:focus,
textarea:focus {
  ring: 2px;
  ring-color: #3b82f6;
  ring-opacity: 0.5;
  border-color: #3b82f6;
}

/* Upload zone hover states */
.upload-zone {
  transition: all 0.2s ease;
}

.upload-zone:hover {
  background-color: #f8fafc;
  border-color: #3b82f6;
}

/* Button loading states */
.btn-loading {
  position: relative;
}

.btn-loading::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border: 2px solid #ffffff;
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Responsive improvements */
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
  
  .lg\:col-span-2,
  .lg\:col-span-3 {
    grid-column: span 1;
  }
}

/* Form validation styles */
.field-error {
  border-color: #ef4444;
  ring-color: #ef4444;
}

.field-error:focus {
  border-color: #ef4444;
  ring-color: #ef4444;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Success states */
.field-success {
  border-color: #10b981;
}

.success-message {
  color: #10b981;
  font-size: 0.875rem;
  margin-top: 0.25rem;
}
</style>