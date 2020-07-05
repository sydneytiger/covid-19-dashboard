import {useState, useEffect} from 'react'

function useWindowDimensions() {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
    onWindowResize();
    window.addEventListener('resize', onWindowResize);
    return () => window.removeEventListener(onWindowResize);
  }, []);

  return {width, height}
}

export default useWindowDimensions
