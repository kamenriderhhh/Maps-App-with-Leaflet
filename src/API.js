const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:5000/api/v1/messages' : 'http://52.221.214.117:5000/api/v1/messages';

// Get boat destination from database
export function getDestination() {
    //Fetching the sailboat latest destination
    return fetch(API_URL+"/destination")
        .then(res => res.json())
        .then(destination => {
            console.log("! "+destination[destination.length-1].latitude)
            return destination[destination.length-1];
        });
}

// Get boat current location from database
export function getCurLocation() {
    return fetch(API_URL)
        .then(res => res.json())
        .then(curLocation => {
            return curLocation[curLocation.length-1];
        });
}


export function sendLocation(location) {
  return fetch(API_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(location)
  }).then(res => res.json());
}