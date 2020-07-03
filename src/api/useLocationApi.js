import {useState, useEffect} from 'react';
import {ip_location_url, google_GeoCode_url} from '../constaints';
import axios from 'axios';

function useLocationApi() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios.get(ip_location_url)
    .then(resp => {
      setLocation(resp.data.country);
    })
    .catch(e => {
      // get geolocation lookup
      geoLocationLookup();
    })
  }, []);

  const geoLocationLookup = () => {
    if (!navigator.geolocation){
      console.log("Geolocation is not supported by your browser");
       return;
     }
     function success(position) {
       var latitude  = position.coords.latitude;
       var longitude = position.coords.longitude;
       reverseGeocodingWithGoogle(longitude, latitude)
     }
     function error() {
       console.log("Unable to retrieve your location");
     }
     navigator.geolocation.getCurrentPosition(success, error);
  }

  const reverseGeocodingWithGoogle = (longitude, latitude) => {
    const api_key = process.env.REACT_APP_GEO_API_KEY;
    axios.get(`${google_GeoCode_url}?latlng=${latitude},${longitude}&key=${api_key}`)
    .then(resp => {
        const { status, results, error_message } = resp.data;
        if(status !== 'OK') throw Error(error_message);
        if(results && results[0]) {
          for(let address of results[0].address_components){
            if(address.types.indexOf('country') !== -1){
              setLocation(address.long_name);
            }
          }
        }
    })
    .catch(status => {
        console.log('Fail to get geolocation country', status)
    })
  }

  return location;
}

export default useLocationApi
