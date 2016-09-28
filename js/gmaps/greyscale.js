// GOOGLE MAP - GREYSCALE
google.maps.event.addDomListener(window, 'load', init);

function init() {
	var mapOptions = {
		zoom: 16,

		center: new google.maps.LatLng(-34.083160, 18.843220), // 40 St James Street, Somerset West
		scrollwheel: false,
        draggable: false,


		styles: [{
			"featureType": "water",
                                "elementType": "all",
                                "stylers": [{
                                    "color": "#3b5998"
                                }]
                            }, {
                                "featureType": "administrative.province",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "off"
                                }]
                            }, {
                                "featureType": "all",
                                "elementType": "all",
                                "stylers": [{
                                    "hue": "#3b5998"
                                }, {
                                    "saturation": -22
                                }]
                            }, {
                                "featureType": "landscape",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#f7f7f7"
                                }, {
                                    "saturation": 10
                                }, {
                                    "lightness": 76
                                }]
                            }, {
                                "featureType": "landscape.natural",
                                "elementType": "all",
                                "stylers": [{
                                    "color": "#f7f7f7"
                                }]
                            }, {
                                "featureType": "road.highway",
                                "elementType": "all",
                                "stylers": [{
                                    "color": "#ABA69B"
                                }]
                            }, {
                                "featureType": "administrative.country",
                                "elementType": "geometry.stroke",
                                "stylers": [{
                                    "visibility": "simplified"
                                }, {
                                    "color": "#3b5998"
                                }]
                            }, {
                                "featureType": "road.highway",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#ABA69B"
                                }]
                            }, {
                                "featureType": "road.highway",
                                "elementType": "all",
                                "stylers": [{
                                    "visibility": "simplified"
                                }, {
                                    "color": "#ABA69B"
                                }]
                            }, {
                                "featureType": "transit.line",
                                "elementType": "all",
                                "stylers": [{
                                    "invert_lightness": false
                                }, {
                                    "color": "#EADEC5"
                                }, {
                                    "weight": 0.43
                                }]
                            }, {
                                "featureType": "road.highway",
                                "elementType": "labels.icon",
                                "stylers": [{
                                        "visibility": "off"
                                    },
                                    // {
                                    //   "color": "#F71D0A"
                                    // }
                                ]
                            }, {
                                "featureType": "road.local",
                                "elementType": "geometry.fill",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#EADEC5"
                                }]
                            }, {
                                "featureType": "administrative",
                                "elementType": "labels.icon",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "color": "#3b5998"
                                }]
                            }, {
                                "featureType": "road.arterial",
                                "elementType": "geometry",
                                "stylers": [{
                                    "color": "#6E8A9F"
                                }, {
                                    "saturation": -31
                                }, {
                                    "visibility": "simplified"
                                }]
                            }, {
                                "featureType": "road.local",
                                "elementType": "labels",
                                "stylers": [{
                                    "visibility": "on"
                                }, {
                                    "hue": "#0000ff"
                                }, {
                                    "color": "#255F7A"
                                }, {
                                    "saturation": -25
                                }, {
                                    "weight": 0.4
                                }]
                            }, {
                                "featureType": "road.arterial",
                                "elementType": "labels.text",
                                "stylers": [{
                                    "visibility": "off"
                                }, {
                                    "color": "#255F7A"
                                }, {
                                    "weight": 1.2
                                }]
		}]
	};

	var mapElement = document.getElementById('map-greyscale');

	var map = new google.maps.Map(mapElement, mapOptions);


	var marker = new google.maps.Marker({
	position: {lat: -34.083160, lng: 18.843220},
	map: map,
	title: 'Montgomery & Miller Academy',
	icon: {
		url: "images/marker.png",
		scaledSize: new google.maps.Size(64, 64)
	}
});

}
