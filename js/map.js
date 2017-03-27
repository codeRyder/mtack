// When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);

            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 15,
                    zoomControl: true,
                    scaleControl: false,
                    scrollwheel: false,
                    disableDoubleClickZoom: true,
                    center: new google.maps.LatLng(49.491470, 8.412925),
                    styles: [{"featureType":"landscape","stylers":[{"hue":"#FFAD00"},{"saturation":50.2},{"lightness":-34.8},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFAD00"},{"saturation":-19.8},{"lightness":-1.8},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FFAD00"},{"saturation":72.4},{"lightness":-32.6},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FFAD00"},{"saturation":74.4},{"lightness":-18},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#00FFA6"},{"saturation":-63.2},{"lightness":38},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#FFC300"},{"saturation":54.2},{"lightness":-14.4},{"gamma":1}]}]
                };

                var mapElement = document.getElementById('map');

                var map = new google.maps.Map(mapElement, mapOptions);

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(49.491470, 8.412925),
                    map: map,
                    icon: 'http://s668670430.online.de/images/icons/oktoberfest-ludwigshafen-marker.png',
                    title: 'Oktoberfest Ludwigshafen'
                });
            }
