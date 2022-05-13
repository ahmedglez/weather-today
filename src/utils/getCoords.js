var latitude = 0;
var longitude = 0;

const success = (position) => {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
	console.log(latitude, longitude);
};

if (navigator.geolocation) {
	navigator.geolocation.getCurrentPosition(success, function () {
		console.error('Error');
	});
} else {
	alert('No ubicacion disponible');
}

export { latitude, longitude };
