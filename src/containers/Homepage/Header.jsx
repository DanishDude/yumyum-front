import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption 
  } from 'reactstrap';
import './Header.scss';

const items = [
  {
    src: 'discover_new_flavors.jpg',
    altText: 'Slide 1',
    caption: 'Discover new flavors'
  },
  {
    src: 'share_kitchen_secrets.jpg',
    altText: 'Slide 2',
    caption: 'Share you kitchen secrets'
  },
  {
    src: 'cooking_together.jpg',
    altText: 'Slide 3',
    caption: 'Learn new tricks in the kitchen'
  }
];

const Header = () => {
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

  const slides = items.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        
      >
        <img src={item.src} alt={item.altText} className="carousel-slides"/>
        <CarouselCaption className="caption-text" captionHeader={item.caption} captionText={''} />
      </CarouselItem>
    );
  });

  return (
    <div className="Header">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
};
 
export default Header;
