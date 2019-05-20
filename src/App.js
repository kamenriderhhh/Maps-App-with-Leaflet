import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import pin from './pinpoint.png'; 
import './App.css';

var myIcon = L.icon({
  iconUrl: pin,
  iconSize: [30, 41],
  iconAnchor: [12.5, 40],
  popupAnchor: [0, -45],
})

class App extends Component {
  state = {
    location: {
      lat: 5.354482, 
      lng: 100.301226,
    },
    haveUsersLocation: false,
    zoom: 1,
  }
  
  // Get user geolocation and reconfigurate some attributes
  componentDidMount(){
    navigator.geolocation.getCurrentPosition( (position) => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        haveUsersLocation: true,
        zoom: 18,
      });
    }, () => {
      console.log('Sorry but user does not give their location...'+
      'Showing the IP location...');

      fetch('https://ipapi.co/json')
        .then(res => res.json())
        .then(location => {
          this.setState({
            location: {
              lat: location.latitude,
              lng: location.longitude
            },
            haveUsersLocation: true,
            zoom: 18,
          });
        })
    });
  }

  render(){
    const position = [this.state.location.lat, this.state.location.lng];
    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        { 
          this.state.haveUsersLocation ?
          <Marker 
            position={position} 
            icon={myIcon} >
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker> : ''
        } 
      </Map>
    );
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
