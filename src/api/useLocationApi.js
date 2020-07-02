import {useState, useEffect} from 'react';
import {ip_location_url} from '../constaints';
import axios from 'axios';

function useLocationApi() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios.get(ip_location_url)
    .then(resp => {
      setLocation(resp.data.country);
    })
  }, []);

  return location;
}

export default useLocationApi
