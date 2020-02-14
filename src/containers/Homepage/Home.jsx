import React, { useState } from 'react';
import Header from './Header';

const items = [
  {
    src: '/discover_new_flavors.jpg',
    altText: 'Slide 1',
    caption: 'Discover new flavors'
  },
  {
    src: 'share_kitchen_secrets.jpg',
    altText: 'Slide 2',
    caption: 'Share you kitchen secrets'
  },
  {
    src: 'Learn_new_tricks.jpg',
    altText: 'Slide 3',
    caption: 'Learn new tricks in the kitchen'
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length -1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length -1 : activeIndex -1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map

  return (
    <div className="Home">
      <Header />
    </div>
  );
}
 
export default Home;
