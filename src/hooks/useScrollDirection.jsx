import { useState, useEffect } from 'react';

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.pageYOffset;
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    // Add event listener with a debounce function for performance
    const onScroll = () => {
        window.requestAnimationFrame(updateScrollDirection);
    };

    window.addEventListener('scroll', onScroll); //

    return () => {
      window.removeEventListener('scroll', onScroll); //
    };
  }, [lastScrollY]);

  return scrollDirection;
};

export default useScrollDirection;