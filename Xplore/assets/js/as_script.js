let directionsService, directionsRenderer;
var position = [10.937053504205005, 76.95575398672943];
function initMap() {
  var latlng = new google.maps.LatLng(position[0], position[1]);
  directionsService = new google.maps.DirectionsService();
  directionsRenderer = new google.maps.DirectionsRenderer();
  map = new google.maps.Map(document.getElementById('map'), {
    mapId: "d163eb47d3b45b00",
    center: latlng,//{ lat: 10.936804443444528,lng:  76.95596154764792},
    zoom: 18,
  });
  //Name
  //lat,lon
  //image url
  //scaledSize width, height
  let markers =
    [
      [
        '<div id="iw-container">' +
        '<div class="iw-title1">Hurray - Level 1 UP</div>' +
        '<div class="iw-title2">First Destination - Amrita College</div>' +
        '<div class="iw-content">' +
        '<div class="iw-subTitle">History</div>' +

        '<p>The first to be established was the Coimbatore campus in 1994, with the opening of Amrita School of Engineering at Ettimadai, a village about 20 km east of the Coimbatore city. Amrita Institute of Medical Sciences (AIMS) in Edapally, Kochi was inaugurated on 17 May 1998 by the then Prime Minister, Atal Bihari Vajpayee.</p>' +
        '<div class="iw-subTitle">Location</div>' +
        '<p>Amritanagar, Ettimadai, Tamil Nadu 641112<br>' +
        '</p>' +
        '</div>' +
        '<div class="iw-bottom-gradient"></div>' +
        '</div>',
        11.000630728264372,
        77.0001989377071,
        "/Xplore_Ashwin/Xplore/Images/star.svg",
        60,
        60
      ],
      [
        '<div id="iw-container">' +
        '<div class="iw-title1">Hurray - Level 1 UP</div>' +
        '<div class="iw-title2">First Destination - Amrita College</div>' +
        '<div class="iw-content">' +
        '<div class="iw-subTitle">History</div>' +

        '<p>The first to be established was the Coimbatore campus in 1994, with the opening of Amrita School of Engineering at Ettimadai, a village about 20 km east of the Coimbatore city. Amrita Institute of Medical Sciences (AIMS) in Edapally, Kochi was inaugurated on 17 May 1998 by the then Prime Minister, Atal Bihari Vajpayee.</p>' +
        '<div class="iw-subTitle">Location</div>' +
        '<p>Amritanagar, Ettimadai, Tamil Nadu 641112<br>' +
        '</p>' +
        '</div>' +
        '<div class="iw-bottom-gradient"></div>' +
        '</div>',
        10.937053504205005, 76.95575398672943,
        "/Xplore_Ashwin/Xplore/Images/star.svg",
        60,
        60
      ],

      [
        '<div id="iw-container">' +
        '<div class="iw-title1">Hurray - Level 4 UP</div>' +
        '<div class="iw-title2">Fourth Destination - Siruvani Waterfalls</div>' +
        '<div class="iw-content">' +
        '<div class="iw-subTitle">History</div>' +

        '<p>The Siruvani River is a river near Coimbatore, India. It is tributary of Bhavani river, which in turn is a tributary of Kaveri. Part of the Siruvani River is near Mannarkkad in the Indian District of Palakkad, Kerala.</p>' +
        '<div class="iw-subTitle">Location</div>' +
        '<p>Noyyal River<br>' +
        '</p>' +
        '</div>' +
        '<div class="iw-bottom-gradient"></div>' +
        '</div>',
        10.976609096905108,
        76.76805336856182,
        "/Xplore_Ashwin/Xplore/Images/star.svg",
        60
      ],
      [
        '<div id="iw-container">' +
        '<div class="iw-title1">Hurray - Level 3 UP</div>' +
        '<div class="iw-title2">Third Destination - Vellingiri Hills</div>' +
        '<div class="iw-content">' +
        '<div class="iw-subTitle">History</div>' +

        '<p>Seven Mountains", these mountains are held and revered on par with spiritually most powerful place on the planet - Mount Kailash, the legendary abode of Lord Shiva.</p>' +
        '<div class="iw-subTitle">Location</div>' +
        '<p>vellingiri hills, Coimbatore, Tamil Nadu 641114<br>' +
        '</p>' +
        '</div>' +
        '<div class="iw-bottom-gradient"></div>' +
        '</div>',
        10.962870579532193,
        76.81984274519617,
        "/Xplore_Ashwin/Xplore/Images/star.svg",
        60,
        60
      ],
      [
        '<div id="iw-container">' +
        '<div class="iw-title1">Hurray - Level 2 UP</div>' +
        '<div class="iw-title2">Second Destination - Sri Krishna College of Engineering and Technology</div>' +
        '<div class="iw-content">' +
        '<div class="iw-subTitle">History</div>' +

        '<p>Sri Krishna College of Engineering and Technology is the most sought after Institution among the premier technical Institutions in South India. With a decade of establishment in 1998, the Institution has marched towards the pinnacle of glory through its remarkable achievements in the field of Engineering Education.</p>' +
        '<div class="iw-subTitle">Location</div>' +
        '<p>WXP4+JF5, BK Pudur, Sugunapuram East, Kuniyamuthur, Tamil Nadu 641008<br>' +
        '</p>' +
        '</div>' +
        '<div class="iw-bottom-gradient"></div>' +
        '</div>',
        10.970421, 76.910928,
        "/Xplore_Ashwin/Xplore/Images/star.svg",
        60,
        60
      ],

      [
        "City Cafe: <br>a fabulous yellow building with dazzling lights hanging on a nice painted wall ",
        10.978374782700895,
        76.8806108562768,
        "/Xplore_Ashwin/Xplore/Images/coffee.svg",
        42,
        42
      ],
      [
        "Gandhi Park: <br>towards your left you'll see an arch of beatiful flowers which is the entrance of the park. ",
        10.978037742866055,
        76.97536792640543,
        "/Xplore_Ashwin/Xplore/Images/park.svg", 45,
        45
      ],
      [
        "HP Petrol Pump",
        10.96388172265236,
        76.84593526177322,
        "/Xplore_Ashwin/Xplore/Images/petrol.svg", 45,
        45
      ],
      [
        "5 Corner Bus Stand: <br>its a famous bus stand where all the buses of Coimbatore stops",
        10.956129329159833,
        76.79615346768391,
        "/Xplore_Ashwin/Xplore/Images/bus.svg", 45,
        45
      ],
      [
        '<div id="iw-container">' +
        '<div class="iw-title1">CONGRATULATIONS! - You have reached the Final Destination</div>' +
        '<div class="iw-title2">Final Destination - Isha Yoga Centre</div>' +
        '<div class="iw-content">' +
        '<div class="iw-subTitle">History</div>' +

        '<p>Isha Foundation is a nonprofit, spiritual organisation founded in 1992 near Coimbatore, India, by Jaggi Vasudev. It hosts the Isha Yoga Centre, which offers yoga programs under the name Isha Yoga.</p>' +
        '<div class="iw-subTitle">Location</div>' +
        '<p>Velliangiri Foothills Ishana Vihar, Post, Coimbatore, Tamil Nadu 641114<br>' +
        '</p>' +
        '</div>' +
        '<div class="iw-bottom-gradient"></div>' +
        '</div>',
        10.976539854637787,
        76.73659829921144,
        "/Xplore_Ashwin/Xplore/Images/star.svg", 60,
        60
      ],
    ];



  directionsRenderer.setMap(map);
  navigator.geolocation.getCurrentPosition((pos) => {
    calculateAndDisplayRoute(directionsService, directionsRenderer, { lat: 10.936772841537431, lng: 76.95581134395441 });

    markers[0][1] = pos.coords.latitude;
    markers[0][2] = pos.coords.longitude;


    //   const image =
    //     "assets/car.png";
    new_marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: "Latitude:" + position[0] + " | Longitude:" + position[1],
      //icon: image
    });

    google.maps.event.addListener(map, 'click', function (event) {
      var result = [event.latLng.lat(), event.latLng.lng()];
      transition(result);
    });

    for (let i = 0; i < markers.length; i++) {
      const currMarker = markers[i];
      const marker = new google.maps.Marker({
        position: { lat: currMarker[1], lng: currMarker[2] },
        map,
        title: currMarker[0],
        icon: {
          url: currMarker[3],
          scaledSize: new google.maps.Size(currMarker[4], currMarker[5])
        },
        animation: google.maps.Animation.DROP,
      });

      const infowindow = new google.maps.InfoWindow({
        content: currMarker[0],
        maxWidth: 700,
        maxHeight: 400,
      });

      marker.addListener("click", () => {
        infowindow.open({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });

      marker.addListener("mouseout", () => {
        infowindow.close({
          anchor: marker,
          map,
          shouldFocus: false,
        });
      });

    }


    const locationButton = document.createElement("button");
    locationButton.textContent = "Finish";
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(locationButton);
    locationButton.addEventListener("click", () => {
      window.location.href = "/Xplore_Ashwin/Xplore/ash_rating.html"
    })



  })

  navigator.geolocation.watchPosition((pos) => {
    //   calculateAndDisplayRoute(directionsService, directionsRenderer, {lat: pos.coords.latitude, lng: pos.coords.longitude});
  })
  /*const onChangeHandler = function () {
    calculateAndDisplayRoute(directionsService, directionsRenderer);
  };

  document.getElementById("start").addEventListener("change", onChangeHandler);
  document.getElementById("end").addEventListener("change", onChangeHandler);
}*/
}
function calculateAndDisplayRoute(directionsService, directionsRenderer, origin = { lat: 10.936772841537431, lng: 76.95581134395441 }) {
  directionsService
    .route({
      origin: { lat: 10.936772841537431, lng: 76.95581134395441 },
      destination: { lat: 10.97655994561818, lng: 76.73679195318847 },
      travelMode: google.maps.TravelMode.DRIVING,
    })
    .then((response) => {
      directionsRenderer.setDirections(response);
    })
    .catch((e) => window.alert("Directions request failed due to " + e));

}

//google.maps.event.addDomListener(window, 'load', initMap);

var numDeltas = 100;
var delay = 150;
var i = 0;
var deltaLat;
var deltaLng;

function transition(result) {
  i = 0;
  deltaLat = (result[0] - position[0]) / numDeltas;
  deltaLng = (result[1] - position[1]) / numDeltas;
  moveMarker();
}

function moveMarker() {
  position[0] += deltaLat;
  position[1] += deltaLng;
  var latlng = new google.maps.LatLng(position[0], position[1]);
  new_marker.setTitle("Latitude:" + position[0] + " | Longitude:" + position[1]);
  new_marker.setPosition(latlng);
  if (i != numDeltas) {
    i++;
    setTimeout(moveMarker, delay);
  }
}

