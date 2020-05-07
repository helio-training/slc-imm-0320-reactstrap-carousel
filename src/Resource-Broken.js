import React from 'react'
import {
    CarouselItem,
    CarouselCaption
} from 'reactstrap';

const Resource = ({ items, setAnimating }) => {
    const slides = items.map(item => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <img src={item.src} alt={item.altText} />
                <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
        );
    })
    return (
        <>
            {slides}
        </>
    );
}

export default Resource;