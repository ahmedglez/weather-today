"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longitude = exports.latitude = void 0;
var latitude = 0;
exports.latitude = latitude;
var longitude = 0;
exports.longitude = longitude;

var success = function success(position) {
  exports.latitude = latitude = position.coords.latitude;
  exports.longitude = longitude = position.coords.longitude;
  console.log(latitude, longitude);
};

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success, function () {
    console.error('Error');
  });
} else {
  alert('No ubicacion disponible');
}