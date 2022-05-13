"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialLocation = exports.initialCurrent = void 0;
var initialLocation = {
  name: undefined,
  region: undefined,
  country: undefined,
  lat: undefined,
  lon: undefined,
  tz_id: undefined,
  localtime_epoch: undefined,
  localtime: undefined
};
exports.initialLocation = initialLocation;
var initialCurrent = {
  temp_c: undefined,
  temp_f: undefined,
  is_day: undefined,
  condition: {
    text: undefined,
    icon: undefined,
    code: undefined
  },
  wind_mph: undefined,
  wind_kph: undefined,
  wind_degree: undefined,
  wind_dir: undefined,
  pressure_mb: undefined,
  pressure_in: undefined,
  precip_mm: undefined,
  precip_in: undefined,
  humidity: undefined,
  cloud: undefined,
  feelslike_c: undefined,
  feelslike_f: undefined
};
exports.initialCurrent = initialCurrent;