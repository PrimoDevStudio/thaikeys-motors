"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useProperties = void 0;
// composables/useProperties.ts
var vue_1 = require("vue");
var useProperties = function () {
    var supabase = useSupabaseClient();
    var user = useSupabaseUser();
    var properties = (0, vue_1.ref)([]);
    var loading = (0, vue_1.ref)(false);
    var error = (0, vue_1.ref)(null);
    var searchFilters = (0, vue_1.ref)({
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
    });
    var searchProperties = function () {
        var args_1 = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args_1[_i] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([], args_1, true), void 0, function (filters) {
            var query, priceColumn, priceColumn, _a, data, queryError, err_1;
            if (filters === void 0) { filters = searchFilters.value; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        loading.value = true;
                        error.value = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        query = supabase
                            .from('properties')
                            .select("\n          *,\n          property_categories(name_en, name_th, icon),\n          transport_stations(name_en, name_th, station_code),\n          agents(id, full_name, rating),\n          property_images(image_url, is_primary)\n        ")
                            .eq('status', 'active')
                            .eq('is_available', true);
                        if (filters.query) {
                            query = query.or("title_en.ilike.%".concat(filters.query, "%,title_th.ilike.%").concat(filters.query, "%,description_en.ilike.%").concat(filters.query, "%"));
                        }
                        if (filters.propertyType) {
                            query = query.eq('property_type', filters.propertyType);
                        }
                        if (filters.listingType && filters.listingType !== 'both') {
                            query = query.eq('listing_type', filters.listingType);
                        }
                        if (filters.minPrice !== null) {
                            priceColumn = filters.listingType === 'sale' ? 'sale_price' : 'rent_price';
                            query = query.gte(priceColumn, filters.minPrice);
                        }
                        if (filters.maxPrice !== null) {
                            priceColumn = filters.listingType === 'sale' ? 'sale_price' : 'rent_price';
                            query = query.lte(priceColumn, filters.maxPrice);
                        }
                        if (filters.bedrooms !== null) {
                            query = query.eq('bedrooms', filters.bedrooms);
                        }
                        if (filters.bathrooms !== null) {
                            query = query.gte('bathrooms', filters.bathrooms);
                        }
                        if (filters.nearestBtsId) {
                            query = query.eq('nearest_bts_id', filters.nearestBtsId);
                        }
                        if (filters.maxBtsWalkingMinutes !== null) {
                            query = query.lte('bts_walking_minutes', filters.maxBtsWalkingMinutes);
                        }
                        return [4 /*yield*/, query
                                .order('created_at', { ascending: false })
                                .limit(50)];
                    case 2:
                        _a = _b.sent(), data = _a.data, queryError = _a.error;
                        if (queryError)
                            throw queryError;
                        properties.value = data || [];
                        return [3 /*break*/, 5];
                    case 3:
                        err_1 = _b.sent();
                        error.value = err_1 instanceof Error ? err_1.message : String(err_1);
                        console.error('Error searching properties:', err_1);
                        return [3 /*break*/, 5];
                    case 4:
                        loading.value = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    var searchNearBTS = function (stationId_1) {
        var args_1 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args_1[_i - 1] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([stationId_1], args_1, true), void 0, function (stationId, radiusMeters) {
            var _a, data, queryError, err_2;
            if (radiusMeters === void 0) { radiusMeters = 1000; }
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        loading.value = true;
                        error.value = null;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, 4, 5]);
                        return [4 /*yield*/, supabase
                                .rpc('get_properties_near_bts', {
                                station_id: stationId,
                                radius_meters: radiusMeters
                            })];
                    case 2:
                        _a = _b.sent(), data = _a.data, queryError = _a.error;
                        if (queryError)
                            throw queryError;
                        properties.value = data || [];
                        return [3 /*break*/, 5];
                    case 3:
                        err_2 = _b.sent();
                        error.value = err_2 instanceof Error ? err_2.message : String(err_2);
                        console.error('Error searching near BTS:', err_2);
                        return [3 /*break*/, 5];
                    case 4:
                        loading.value = false;
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    var getProperty = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, queryError, err_3;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    loading.value = true;
                    error.value = null;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 4, 5, 6]);
                    return [4 /*yield*/, supabase
                            .from('properties')
                            .select("\n          *,\n          property_categories(name_en, name_th, icon),\n          transport_stations(name_en, name_th, station_code, location),\n          agents(id, full_name, phone, email, rating, company:companies(name)),\n          property_images(image_url, thumbnail_url, caption_en, sort_order),\n          property_amenities(amenities(name_en, name_th, icon))\n        ")
                            .eq('id', id)
                            .single()];
                case 2:
                    _a = _b.sent(), data = _a.data, queryError = _a.error;
                    if (queryError)
                        throw queryError;
                    // Add type assertion for the RPC call
                    return [4 /*yield*/, supabase.rpc('update_property_view_count', { property_id: id })];
                case 3:
                    // Add type assertion for the RPC call
                    _b.sent();
                    return [2 /*return*/, data];
                case 4:
                    err_3 = _b.sent();
                    error.value = err_3 instanceof Error ? err_3.message : String(err_3);
                    console.error('Error getting property:', err_3);
                    return [2 /*return*/, null];
                case 5:
                    loading.value = false;
                    return [7 /*endfinally*/];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var addToFavorites = function (propertyId_1) {
        var args_1 = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args_1[_i - 1] = arguments[_i];
        }
        return __awaiter(void 0, __spreadArray([propertyId_1], args_1, true), void 0, function (propertyId, notes) {
            var insertError, err_4;
            if (notes === void 0) { notes = ''; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!user.value) {
                            throw new Error('User must be logged in to add favorites');
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, supabase
                                .from('user_favorites')
                                .insert([
                                {
                                    user_id: user.value.id,
                                    property_id: propertyId,
                                    notes: notes
                                }
                            ])];
                    case 2:
                        insertError = (_a.sent()).error;
                        if (insertError)
                            throw insertError;
                        return [2 /*return*/, true];
                    case 3:
                        err_4 = _a.sent();
                        console.error('Error adding to favorites:', err_4);
                        throw err_4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    var removeFromFavorites = function (propertyId) { return __awaiter(void 0, void 0, void 0, function () {
        var deleteError, err_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!user.value)
                        return [2 /*return*/, false];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, supabase
                            .from('user_favorites')
                            .delete()
                            .eq('user_id', user.value.id)
                            .eq('property_id', propertyId)];
                case 2:
                    deleteError = (_a.sent()).error;
                    if (deleteError)
                        throw deleteError;
                    return [2 /*return*/, true];
                case 3:
                    err_5 = _a.sent();
                    console.error('Error removing from favorites:', err_5);
                    throw err_5;
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var getFavorites = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a, data, queryError, err_6;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!user.value)
                        return [2 /*return*/, []];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, supabase
                            .from('user_favorites')
                            .select("\n          *,\n          properties(\n            *,\n            property_categories(name_en, name_th, icon),\n            transport_stations(name_en, name_th, station_code),\n            property_images(image_url, is_primary)\n          )\n        ")
                            .eq('user_id', user.value.id)
                            .order('created_at', { ascending: false })];
                case 2:
                    _a = _b.sent(), data = _a.data, queryError = _a.error;
                    if (queryError)
                        throw queryError;
                    return [2 /*return*/, data || []];
                case 3:
                    err_6 = _b.sent();
                    console.error('Error getting favorites:', err_6);
                    return [2 /*return*/, []];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var formatPrice = function (price, currency) {
        if (currency === void 0) { currency = 'THB'; }
        if (!price)
            return 'Contact for price';
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });
        return formatter.format(price);
    };
    var getWalkingTimeText = function (minutes) {
        if (!minutes)
            return 'Distance unknown';
        if (minutes <= 5)
            return "".concat(minutes, " min walk (Very close)");
        if (minutes <= 10)
            return "".concat(minutes, " min walk (Close)");
        if (minutes <= 15)
            return "".concat(minutes, " min walk (Walkable)");
        return "".concat(minutes, " min walk (Far)");
    };
    return {
        // State
        properties: (0, vue_1.readonly)(properties),
        loading: (0, vue_1.readonly)(loading),
        error: (0, vue_1.readonly)(error),
        searchFilters: searchFilters,
        // Methods
        searchProperties: searchProperties,
        searchNearBTS: searchNearBTS,
        getProperty: getProperty,
        addToFavorites: addToFavorites,
        removeFromFavorites: removeFromFavorites,
        getFavorites: getFavorites,
        formatPrice: formatPrice,
        getWalkingTimeText: getWalkingTimeText,
    };
};
exports.useProperties = useProperties;
