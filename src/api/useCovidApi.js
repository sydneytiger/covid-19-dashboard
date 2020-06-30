import {useState, useEffect, useCallback} from 'react';
import api from './index';

// A generic API custom hook for fetching covid 19 data
// dataRefiner: a middleware like function transforming data between data source and UI
function useCovidApi(path, 
  { 
    initialData = null, 
    dataRefiner = data => data
  }) {
  // improve performance
  const refineData = useCallback(dataRefiner, []);
  const [data, setData] = useState(initialData);
 
  useEffect(() => {
    api(path)
    .then(resp => {
      setData(refineData(resp.data))
    })
  }, [path, refineData]);
  
  return data;
}

export default useCovidApi
