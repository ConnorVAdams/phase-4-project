import { useState, useEffect } from 'react'

const ScrollIndicator = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
  
    useEffect(() => {
      const updateScrollProgress = () => {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const windowScroll = scrollTop / (scrollHeight - clientHeight) * 100;
        setScrollProgress(windowScroll);
      };
  
      window.addEventListener('scroll', updateScrollProgress);
      return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);
  
    return (
      <div style={{ width: `${scrollProgress}%`, height: '5px', backgroundColor: 'skyblue', position: 'fixed', top: 0, left: 0, zIndex: 1000 }}></div>
    );
  };
  
  export default ScrollIndicator;