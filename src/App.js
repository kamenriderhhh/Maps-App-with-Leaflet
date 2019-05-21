import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import pin from './pinpoint.png'; 
import './App.css';
import classnames from 'classnames';

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
    // for tab //
    activeTab: '1',
    //~~~~~~~~~~~~~~~~~~~~~~~~~~//
  }

  // For tab //
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
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
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Open Street Map
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Pi Camera
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Sensors Data
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row >
              <Col>
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
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Pi Camera</CardTitle>
                  <CardText>Pi Camera showing here</CardText>
                  <Button>Display view</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row >
              <Col>
                  sensors data~~
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default App;
