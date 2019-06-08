import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { Button } from 'reactstrap';
import Joi from 'joi';
import L from 'leaflet';
import pin from './pinpoint.png'; 
import './App.css';

// Component for side drawer and toolbar
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
//import classnames from 'classnames';

import CardForm from './components/CardForm/CardForm';
import { getLocation, sendLocation } from './API';

var myIcon = L.icon({
  iconUrl: pin,
  iconSize: [30, 41],
  iconAnchor: [12.5, 40],
  popupAnchor: [0, -45],
})

const schema = Joi.object().keys({
  latitude: Joi.number().min(-90).max(90).required(),
  longitude: Joi.number().min(-180).max(180).required()
});

class App extends Component {
  state = {
    location: {
      lat: 5.354482, 
      lng: 100.301226,
    },
    haveUsersLocation: false,
    zoom: 1,
    userSetLocation: {
      slat: '',
      slng: '',
    },
    locations: [],
    showLocationForm: false,
    sendingLocation: false,
    sentLocation: false,
    //sideDrawer 
    sideDrawerOpen: false
  };
  
  // Get user geolocation and reconfigurate some attributes
  componentDidMount(){
    // Location from the database
    getLocation()
      .then(locations => {
        this.setState({
          locations,
          haveUsersLocation: true,
          zoom: 18
        });
      });
  };

  showLocationForm = () => {
    this.setState({
      showLocationForm: true
    });
  }

  cancelLocation = () => {
    this.setState({
      showLocationForm: false
    });
  }

  formIsValid = () => {
    const userSetLocation = {
      latitude: this.state.userSetLocation.slat,
      longitude: this.state.userSetLocation.slng
    };
    const result = Joi.validate(userSetLocation, schema);
    //console.log(userSetLocation);
    return !result.error && userSetLocation ? true : false;
  };

  formSubmitted = (event) => {
    event.preventDefault();
    //console.log(this.state.userSetLocation);
    
    if (this.formIsValid()){
      //if no error
      this.setState({
        sendingLocation: true
      });

      const location = {
        latitude: this.state.userSetLocation.slat,
        longitude: this.state.userSetLocation.slng
      };

      sendLocation(location)
        .then((result) => {
          setTimeout(() => {
            this.setState({
              sendingLocation: false,
              sentLocation: true
            });
          }, 4000);
        });
    }
  };

  valueChanged = (event) => {
    const { name, value } = event.target; 
    this.setState((prevState) => ({
      userSetLocation: {
        ...prevState.userSetLocation,
        [name]: value,
      }
    }))
  };

  // Sidedrawer function
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  };

  render(){
    const position = [this.state.location.lat, this.state.location.lng];
    // sidedrawer backdrop variable
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }
    
    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/> 
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <div className="map">
          <Map className="map" center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            { 
              this.state.haveUsersLocation ?
              <Marker 
                position={position} 
                icon={myIcon}>
                <Popup>
                  lat:{this.state.location.lat}, lng:{this.state.location.lng}
                </Popup>
              </Marker> : ""
            }
            {this.state.locations.map(location => (
              <Marker 
                position={[location.latitude, location.longitude]} 
                icon={myIcon}>
                <Popup>
                  lat:{location.latitude}, lng:{location.longitude}
                </Popup>
              </Marker>
            ))} 
          </Map>
          {
            !this.state.showLocationForm ?
            <Button className="location-form" onClick={this.showLocationForm} color="info">Add a location</Button> :
            !this.state.sentLocation ?
            <CardForm
              cancelLocation={this.cancelLocation}
              showLocationForm={this.state.showLocationForm}
              sendingLocation={this.state.sendingLocation}
              sentLocation={this.state.sentLocation}
              haveUsersLocation={this.state.haveUsersLocation}
              formSubmitted={this.formSubmitted}
              valueChanged={this.valueChanged}
              formIsValid={this.formIsValid}
            /> :
            this.setState({
              sentLocation: false,
              showLocationForm: false
            })
          }   
        </div>
      </div>
    );
  }
}

export default App;
