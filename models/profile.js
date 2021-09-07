var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

var ProfileSchema = Schema(
  {
    _id: {type: String, required: true},
    nc_url: {type: String, required: true},
    position_qc: {type: Number, required: true},
    cycle_number: {type: Number, required: true},
    dac: {type: String, required: true, max: 100},
    date: {type: Date, required: true},
    date_added: {type: Date, required: false},
    date_qc: {type: Number, required: false},
    max_pres: {type: Number, required: true},
    measurements: [{ pres: {type: Number, required: true}, //defaulting to null may cause performance issues for profiles with all nan
                     temp: {type: Number, required: false, default: null}, 
                     psal: {type: Number, required: false, default: null},
                     }],
    //bgcMeas: [mongoose.Schema.Types.Mixed], // defining schema slows down for large bgcMeas
    bgcMeas: [{ pres: {type: Number, required: false},
      pres_qc: {type: Number, required: false},
      temp: {type: Number, required: false},
      temp_qc: {type: Number, required: false},
      psal: {type: Number, required: false},
      psal_qc: {type: Number, required: false},
      cndc: {type: Number, required: false},
      cndc_qc: {type: Number, required: false},
      doxy: {type: Number, required: false},
      doxy_qc: {type: Number, required: false},
      chla: {type: Number, required: false},
      chla_qc: {type: Number, required: false},
      cdom: {type: Number, required: false},
      cdom_qc: {type: Number, required: false},
      nitrate: {type: Number, required: false},
      nitrate_qc: {type: Number, required: false},
      bbp700: {type: Number, required: false},
      bbp700_qc: {type: Number, required: false},
      down_irradiance412: {type: Number, required: false},
      down_irradiance412_qc: {type: Number, required: false},
      down_irradiance443: {type: Number, required: false},
      down_irradiance443_qc: {type: Number, required: false},
      down_irradiance490: {type: Number, required: false},
      down_irradiance490_qc: {type: Number, required: false},
      downwelling_par: {type: Number, required: false},
      downwelling_par_qc: {type: Number, required: false},
      cfc_12_btl: {type: Number, required: false},
      cfc_12_btl_qc: {type: Number, required: false},
      dissolved_organic_carbon_btl: {type: Number, required: false},
      dissolved_organic_carbon_btl_qc: {type: Number, required: false},
      total_dissolved_nitrogen_btl: {type: Number, required: false},
      total_dissolved_nitrogen_btl_qc: {type: Number, required: false},
      neon_btl: {type: Number, required: false},
      neon_btl_qc: {type: Number, required: false},
      cfc_11_btl: {type: Number, required: false},
      cfc_11_btl_qc: {type: Number, required: false},
      potential_temperature_68_btl: {type: Number, required: false},
      potential_temperature_68_btl_qc: {type: Number, required: false},
      doxy_ctd: {type: Number, required: false},
      doxy_ctd_qc: {type: Number, required: false},
      ctd_elapsed_time_ctd: {type: Number, required: false},
      ctd_elapsed_time_ctd_qc: {type: Number, required: false},
      tritium_btl: {type: Number, required: false},
      tritium_btl_qc: {type: Number, required: false},
      bottle_latitude_btl: {type: Number, required: false},
      bottle_latitude_btl_qc: {type: Number, required: false},
      rev_temperature_btl: {type: Number, required: false},
      rev_temperature_btl_qc: {type: Number, required: false},
      ctd_beamcp_ctd: {type: Number, required: false},
      ctd_beamcp_ctd_qc: {type: Number, required: false},
      ctd_pressure_raw_btl: {type: Number, required: false},
      ctd_pressure_raw_btl_qc: {type: Number, required: false},
      partial_co2_temperature_btl: {type: Number, required: false},
      partial_co2_temperature_btl_qc: {type: Number, required: false},
      rev_pressure_btl: {type: Number, required: false},
      rev_pressure_btl_qc: {type: Number, required: false},
      delta_helium_3_btl: {type: Number, required: false},
      delta_helium_3_btl_qc: {type: Number, required: false},
      cfc_113_btl: {type: Number, required: false},
      cfc_113_btl_qc: {type: Number, required: false},
      methyl_chloroform_btl: {type: Number, required: false},
      methyl_chloroform_btl_qc: {type: Number, required: false},
      total_alkalinity_btl: {type: Number, required: false},
      total_alkalinity_btl_qc: {type: Number, required: false},
      bottle_longitude_btl: {type: Number, required: false},
      bottle_longitude_btl_qc: {type: Number, required: false},
      hplc_placeholder_btl: {type: Number, required: false},
      hplc_placeholder_btl_qc: {type: Number, required: false},
      ctd_transmissometer_raw_ctd: {type: Number, required: false},
      ctd_transmissometer_raw_ctd_qc: {type: Number, required: false},
      dissolved_organic_nitrogen_btl: {type: Number, required: false},
      dissolved_organic_nitrogen_btl_qc: {type: Number, required: false},
      tritium_error_btl: {type: Number, required: false},
      tritium_error_btl_qc: {type: Number, required: false},
      del_carbon_13_dic_btl: {type: Number, required: false},
      del_carbon_13_dic_btl_qc: {type: Number, required: false},
      ammonium_btl: {type: Number, required: false},
      ammonium_btl_qc: {type: Number, required: false},
      del_oxygen_18_error_btl: {type: Number, required: false},
      del_oxygen_18_error_btl_qc: {type: Number, required: false},
      oxygen_btl: {type: Number, required: false},
      oxygen_btl_qc: {type: Number, required: false},
      ctd_fluor_arbitrary_ctd: {type: Number, required: false},
      ctd_fluor_arbitrary_ctd_qc: {type: Number, required: false},
      ctd_transmissometer_ctd: {type: Number, required: false},
      ctd_transmissometer_ctd_qc: {type: Number, required: false},
      radium_228_btl: {type: Number, required: false},
      radium_228_btl_qc: {type: Number, required: false},
      ctd_fluor_raw_btl: {type: Number, required: false},
      ctd_fluor_raw_btl_qc: {type: Number, required: false},
      ctd_temperature_68_ctd: {type: Number, required: false},
      ctd_temperature_68_ctd_qc: {type: Number, required: false},
      oxygen_ml_l_btl: {type: Number, required: false},
      oxygen_ml_l_btl_qc: {type: Number, required: false},
      ctd_fluor_raw_ctd: {type: Number, required: false},
      ctd_fluor_raw_ctd_qc: {type: Number, required: false},
      phosphate_btl: {type: Number, required: false},
      phosphate_btl_qc: {type: Number, required: false},
      silicate_btl: {type: Number, required: false},
      silicate_btl_qc: {type: Number, required: false},
      rev_temperature_90_btl: {type: Number, required: false},
      rev_temperature_90_btl_qc: {type: Number, required: false},
      delta_helium_3_error_btl: {type: Number, required: false},
      delta_helium_3_error_btl_qc: {type: Number, required: false},
      total_carbon_btl: {type: Number, required: false},
      total_carbon_btl_qc: {type: Number, required: false},
      neon_error_btl: {type: Number, required: false},
      neon_error_btl_qc: {type: Number, required: false},
      carbon_tetrachloride_btl: {type: Number, required: false},
      carbon_tetrachloride_btl_qc: {type: Number, required: false},
      ctd_number_of_observations_ctd: {type: Number, required: false},
      ctd_number_of_observations_ctd_qc: {type: Number, required: false},
      fco2_btl: {type: Number, required: false},
      fco2_btl_qc: {type: Number, required: false},
      ph_sws_btl: {type: Number, required: false},
      ph_sws_btl_qc: {type: Number, required: false},
      chlorophyll_a_ug_kg_btl: {type: Number, required: false},
      chlorophyll_a_ug_kg_btl_qc: {type: Number, required: false},
      helium_btl: {type: Number, required: false},
      helium_btl_qc: {type: Number, required: false},
      ref_temperature_c_btl: {type: Number, required: false},
      ref_temperature_c_btl_qc: {type: Number, required: false},
      del_oxygen_18_btl: {type: Number, required: false},
      del_oxygen_18_btl_qc: {type: Number, required: false},
      chlorophyll_a_btl: {type: Number, required: false},
      chlorophyll_a_btl_qc: {type: Number, required: false},
      particulate_organic_nitrogen_btl: {type: Number, required: false},
      particulate_organic_nitrogen_btl_qc: {type: Number, required: false},
      potential_temperature_btl: {type: Number, required: false},
      potential_temperature_btl_qc: {type: Number, required: false},
      nitrate_btl: {type: Number, required: false},
      nitrate_btl_qc: {type: Number, required: false},
      par_ctd: {type: Number, required: false},
      par_ctd_qc: {type: Number, required: false},
      psal_ctd: {type: Number, required: false},
      psal_ctd_qc: {type: Number, required: false},
      radium_226_btl: {type: Number, required: false},
      radium_226_btl_qc: {type: Number, required: false},
      rev_temperature_c_btl: {type: Number, required: false},
      rev_temperature_c_btl_qc: {type: Number, required: false},
      temp_ctd: {type: Number, required: false},
      temp_ctd_qc: {type: Number, required: false},
      ctd_oxygen_ml_l_ctd: {type: Number, required: false},
      ctd_oxygen_ml_l_ctd_qc: {type: Number, required: false},
      nitrite_btl: {type: Number, required: false},
      nitrite_btl_qc: {type: Number, required: false},
      ctd_fluor_ctd: {type: Number, required: false},
      ctd_fluor_ctd_qc: {type: Number, required: false},
      salinity_btl: {type: Number, required: false},
      salinity_btl_qc: {type: Number, required: false},
      bottle_time_btl: {type: Number, required: false},
      bottle_time_btl_qc: {type: Number, required: false},
      partial_pressure_of_co2_btl: {type: Number, required: false},
      partial_pressure_of_co2_btl_qc: {type: Number, required: false},
      del_carbon_14_dic_btl: {type: Number, required: false},
      del_carbon_14_dic_btl_qc: {type: Number, required: false},
      psal_btl: {type: Number, required: false},
      psal_btl_qc: {type: Number, required: false},
      ph_total_h_scale_btl: {type: Number, required: false},
      ph_total_h_scale_btl_qc: {type: Number, required: false},
      phaeophytin_ug_l_btl: {type: Number, required: false},
      phaeophytin_ug_l_btl_qc: {type: Number, required: false},
      ctd_temperature_unk_btl: {type: Number, required: false},
      ctd_temperature_unk_btl_qc: {type: Number, required: false},
      del_carbon_14_dic_error_btl: {type: Number, required: false},
      del_carbon_14_dic_error_btl_qc: {type: Number, required: false},
      helium_error_btl: {type: Number, required: false},
      helium_error_btl_qc: {type: Number, required: false},
      ctd_transmissometer_raw_btl: {type: Number, required: false},
      ctd_transmissometer_raw_btl_qc: {type: Number, required: false},
      sulfur_hexifluoride_btl: {type: Number, required: false},
      sulfur_hexifluoride_btl_qc: {type: Number, required: false},
      temp_btl: {type: Number, required: false},
      temp_btl_qc: {type: Number, required: false},
      ph_temperature_btl: {type: Number, required: false},
      ph_temperature_btl_qc: {type: Number, required: false},
      phaeophytin_btl: {type: Number, required: false},
      phaeophytin_btl_qc: {type: Number, required: false},
      potential_temperature_c_btl: {type: Number, required: false},
      potential_temperature_c_btl_qc: {type: Number, required: false},
      ctd_temperature_unk_ctd: {type: Number, required: false},
      ctd_temperature_unk_ctd_qc: {type: Number, required: false},
      doxy_btl: {type: Number, required: false},
      doxy_btl_qc: {type: Number, required: false},
      fco2_temperature_btl: {type: Number, required: false},
      fco2_temperature_btl_qc: {type: Number, required: false},
      sample_btl: {type: Number, required: false},
      sample_btl_qc: {type: Number, required: false},
      nitrous_oxide_btl: {type: Number, required: false},
      nitrous_oxide_btl_qc: {type: Number, required: false},
      particulate_organic_carbon_btl: {type: Number, required: false},
      particulate_organic_carbon_btl_qc: {type: Number, required: false},
      sample_ctd: {type: Number, required: false},
      sample_ctd_qc: {type: Number, required: false},
      bottle_number_btl: {type: Number, required: false},
      bottle_number_btl_qc: {type: Number, required: false},
      nitrite_nitrate_btl: {type: Number, required: false},
      nitrite_nitrate_btl_qc: {type: Number, required: false},
      ref_temperature_btl: {type: Number, required: false},
      ref_temperature_btl_qc: {type: Number, required: false},
 }],
    bgcMeasKeys: {type: [String], required: false},
    lat: {type: Number, required: true},
    lon: {type: Number, required: true},
    platform_number: {type: Number, required: true, max: 100},
    geoLocation: {type: Schema.Types.Mixed, required: true},
    station_parameters: {type: [String], required: true},
    station_parameters_in_nc: {type: [String], required: false},
    VERTICAL_SAMPLING_SCHEME: {type:String, required: false},
    PI_NAME: {type: String, required: false, max: 100},
    WMO_INST_TYPE: {type: String, required: false, max: 100},
    POSITIONING_SYSTEM: {type: String, required: false, max: 100},
    DATA_MODE: {type: String, required: false, max: 100},
    PARAMETER_DATA_MODE: { type: [String], required: false},
    DATA_CENTRE: {type: String, required: false, max: 100},
    DIRECTION: {type: String, required: false, max: 100},
    PLATFORM_TYPE: {type: String, required: false, max: 100},
    pres_max_for_TEMP: {type: Number, required: false},
    pres_max_for_PSAL: {type: Number, required: false},
    pres_min_for_TEMP: {type: Number, required: false},
    pres_min_for_PSAL: {type: Number, required: false},
    containsBGC: {type: Boolean, required: false},
    isDeep: {type: Boolean, required: false},
    BASIN: {type: Number, required: false},
  },
  {
    toObject: { virtuals: true },
    toJSON: { virtuals: true }
  }
);

// Virtual for profile's URL
ProfileSchema
.virtual('url')
.get(function () {
  return '/catalog/profiles/' + this._id;
});

ProfileSchema
.virtual('core_data_mode')
.get(function() {
  let core_data_mode
  if (this.DATA_MODE) {
    core_data_mode = this.DATA_MODE
  }
  else if (this.PARAMETER_DATA_MODE.length > 0) {
    core_data_mode = this.PARAMETER_DATA_MODE[0]
  }
  else {
    core_data_mode = 'Unknown'
  }
  return core_data_mode
})

ProfileSchema
.virtual('jcommopsPlatform')
.get(function () {
  return 'http://www.jcommops.org/board/wa/Platform?ref=' + this.platform_number
})

ProfileSchema
.virtual('euroargoPlatform')
.get(function () {
  return 'https://fleetmonitoring.euro-argo.eu/float/'+this.platform_number
})

ProfileSchema
.virtual('formatted_station_parameters')
.get(function () {
  return this.station_parameters.map(param => ' '+param)
})

ProfileSchema
.virtual('roundLat')
.get(function () {
  return this.lat.toFixed(3);
});
ProfileSchema
.virtual('roundLon')
.get(function () {
  return this.lon.toFixed(3);
});

ProfileSchema
.virtual('strLat')
.get(function () {
  let lat = this.lat;
  if (lat > 0) {
    strLat = Math.abs(lat).toFixed(3).toString() + ' N';
  }
  else {
      strLat = Math.abs(lat).toFixed(3).toString() + ' S';
  }
  return strLat
});

ProfileSchema
.virtual('strLon')
.get(function () {
  let lon = this.lon;
  if (lon > 0) {
    strLon = Math.abs(lon).toFixed(3).toString() + ' E';
  }
  else {
      strLon = Math.abs(lon).toFixed(3).toString() + ' W';
  }
  return strLon
});

// Virtual for formatted date
ProfileSchema
.virtual('date_formatted')
.get(function () {
  return moment.utc(this.date).format('YYYY-MM-DD');
});

//Export model, mongoose automatically looks for the plural of the first input. 'profiles'
module.exports = mongoose.model('profile', ProfileSchema);
