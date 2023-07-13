'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/css';

import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jpeg';
import img4 from '../images/image4.jpeg';
import img5 from '../images/image5.jpeg';

export function Slider() {
  return (
    <Swiper>
      <SwiperSlide>
        <Image className="max-w-xs" src={img1} alt="" priority />
      </SwiperSlide>
      <SwiperSlide>
        <Image className="max-w-xs" src={img2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image className="max-w-xs" src={img3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image className="max-w-xs" src={img4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image className="max-w-xs" src={img5} alt="" />
      </SwiperSlide>
    </Swiper>
  );
};
