'use client';

// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Image from 'next/image';
// import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';

// import "./ImageSlider.css";

export default function ClientRoutePage() {
  // const theme = useTheme();
  const result = clientSideFunction();
  return (
    <>
      {/* <h1
        style={{
          color: theme.colors.primary,
        }}
      >
        Server Route
      </h1> */}
      <h1>Client route {result}</h1>

      {/* <div className='image-slider-container'>
        <Slider>
          <div>
            <Image
              width={400}
              height={200}
              src='https://picsum.photos/400/200'
              alt='placeholder'
            />
          </div>
          <div>
            <Image
              width={400}
              height={200}
              src='https://picsum.photos/400/300'
              alt='placeholder'
            />
          </div>
          <div>
            <Image
              width={400}
              height={200}
              src='https://picsum.photos/400/250'
              alt='placeholder'
            />
          </div>
          <div>
            <Image
              width={400}
              height={200}
              src='https://picsum.photos/400/350'
              alt='placeholder'
            />
          </div>
        </Slider>
      </div> */}
    </>
  );
}
