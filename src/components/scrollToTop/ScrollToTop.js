import React from 'react';
const Scroll = require('react-scroll');
const scroll = Scroll.animateScroll;

const ScrollToTop = () => {
  return <button onClick={scroll.scrollToTop()}>Go Up</button>;
};

export default ScrollToTop;
