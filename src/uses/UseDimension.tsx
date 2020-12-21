import { useRef, useState, useEffect } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

// init state
const initialState = { width: 0, height: 0 };

// use dimension
const UseDimension = (ref: any) => {
  const [ dimensions, setDimensions ] = useState<any>(initialState);
  const resizeObserverRef = useRef<any>(null);

  // use effect
  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries = []) => {
      entries.forEach((entry) => {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      });
    });
    if (ref.current) resizeObserverRef.current.observe(ref.current);
    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, [ref]);

  return dimensions;
};

export default UseDimension;