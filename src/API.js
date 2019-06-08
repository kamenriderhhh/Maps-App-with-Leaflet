const API_URL = window.location.hostname === 'localhost' ? 'http://10.234.35.203:80/api/v1/locations' : 'http://202.170.57.175:80/api/v1/locations';

// Get database location
export function getLocation() {
    //Fetching the sailboat latest location
    return fetch(API_URL)
        .then(res => res.json())
        .then(locations => {
            return locations
        });
}

/* Get current location
export function getCurLocation() {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition((position) => {
      resolve({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      });
    }, () => {      
      resolve(fetch('https://ipapi.co/json')
        .then(res => res.json())
        .then(location => {
          return {
            lat: location.latitude,
            lng: location.longitude
          };
        }));
    });
  });
}
*/

export function sendLocation(location) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(location)
  }).then(res => res.json());
}