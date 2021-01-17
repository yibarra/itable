import { useEffect } from 'react';

// click out side
const UseClickOutSide = (ref: any, callback: any) => {
  // on click
  const onClick = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  // use effect
  useEffect(() => {
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
    };
  });
};

export default UseClickOutSide;