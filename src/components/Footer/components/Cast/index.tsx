import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

import { Container, Slider, Card } from './styles';

export default function App() {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13];

  return (
    <Container>
      <Swiper
        style={{
          '--swiper-navigation-color': '#5A5A5A',
          marginLeft: 25,
          marginRight: 25,
          paddingLeft: 50,
          paddingRight: 50,
        }}
        slidesPerView={6}
        spaceBetween={50}
        loop={true}
        navigation={true}
        className="mySwiper"
      >
        <Slider>
          {array.map((x) => (
            <SwiperSlide key={x}>
              <Card>
                <strong>Matt Demon</strong>
                <p>Mark Watney</p>
              </Card>
            </SwiperSlide>
          ))}
        </Slider>
      </Swiper>
    </Container>
  );
}
