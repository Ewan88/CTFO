import React from 'react';
import ReactMapboxGl from "react-mapbox-gl";
import './styles/map.css';


const Map = () => {

  // function _locateUser() {
  //   // https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/Using_geolocation
  //   navigator.geolocation.getCurrentPosition(position => {
  //     this.updateViewport({
  //       longitude: position.coords.longitude,
  //       latitude: position.coords.latitude
  //     });
  //   });
  // }

  const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoicm9kZ2VyLXRoZS1zaHJ1YmJlciIsImEiOiJjanNqZ3gxNnoyYXFyNDN0YnV2dGVjeTl1In0.7YUhBJNDpqGmjW8iLzpgaQ"
  })
  //
  // var nav = new mapboxgl.NavigationControl();
  // map.addControl(nav, 'bottom-left');

  return (
    <div id="map">
    <Map
    style="mapbox://styles/mapbox/streets-v8"
    center={[ -4.251433, 55.860916 ]}
    containerStyle={{
      height: "100vh",
      width: "80vw"
    }}>
    </Map>
    </div>
  )
}

export default Map;
