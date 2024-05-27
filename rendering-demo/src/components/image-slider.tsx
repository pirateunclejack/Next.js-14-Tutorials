'use client';

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

export const ImageSlider = () => {
  const settings = {
    dots: true,
  };
  return (
    <div className='image-slider-container'>
      <Slider {...settings}>
        <div>
          <Image
            height={200}
            width={400}
            alt='1'
            src='https://picsum.photos/400/200'
          />
        </div>
        <div>
          <Image
            height={200}
            width={400}
            alt='1'
            src='https://picsum.photos/400/300'
          />
        </div>
        <div>
          <Image
            height={200}
            width={400}
            alt='1'
            src='https://picsum.photos/400/250'
          />
        </div>
        <div>
          <Image
            height={200}
            width={400}
            alt='1'
            src='https://picsum.photos/400/350'
          />
        </div>
      </Slider>
    </div>
  );
};
