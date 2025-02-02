import React, { useState } from 'react';
import {
    Carousel,
    CarouselControl,
    CarouselIndicators,
    CarouselItem,
    CarouselCaption
} from 'reactstrap';
import Resource from './Resource';
import ResourceBroken from './Resource-Broken';
import {Content} from './Content';


const Example = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    const slidesExternal = items.map(item => {
        return (<Resource item={item} setAnimating={setAnimating} />)
    })
    // This is the only one that works
    const slidesInternal = items.map(item => {
        const content = <Content item={item}/>
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={content} captionHeader={item.caption} />
            </CarouselItem>
        );
    })
    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={false}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {/* {slidesExternal} */}
            {slidesInternal}
            {/* <ResourceBroken items={items} setAnimating={setAnimating} /> */}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}

export default Example;