function initMap() {
	const myLatLng = {
		lat: 52.343303089822285,
		lng: 4.892188798496245,
	};
	const map = new google.maps.Map(document.getElementById("map"), {
		zoom: 15,
		center: myLatLng,
	});

	new google.maps.Marker({
		position: myLatLng,
		map,
		title: "Europaplein 24, 1078 GZ Amsterdam",
	});
}

window.initMap = initMap;
