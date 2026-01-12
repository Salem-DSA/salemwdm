import React from 'react';
import { useInView } from 'react-intersection-observer'
import useScreenWidth from './useScreenWidth';

const useNavSection = (sectionId, setActiveKey) => {
  const screenWidth = useScreenWidth();
  const breakpoint = 992;
  const inViewThreshold = screenWidth < breakpoint ? 0.5 : 1; // 10% on mobile, 80% on desktop

  const { ref, inView } = useInView({
    threshold: inViewThreshold,
    rootMargin: '-5% 0px -5% 0px',
  });

  React.useEffect(() => {
    if (inView) {
      setActiveKey(sectionId);
    }
  }, [inView, sectionId, setActiveKey]);

  return { ref };
}

export default useNavSection;