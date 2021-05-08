import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

import { ICast } from '../../../../pages';

import { Container, Slider, Card } from './styles';

interface CastProps {
  cast: ICast[];
}

export default function Cast({ cast }: CastProps) {
  return (
    <Container>
      <Swiper
        style={{
          marginLeft: 25,
          marginRight: 25,
          paddingLeft: 80,
          paddingRight: 80,
        }}
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        navigation={true}
        className="mySwiper"
      >
        <Slider>
          {cast.map((item) => (
            <SwiperSlide key={item.ID}>
              <Card>
                <strong>{item.Name}</strong>
                <p>{item.Name}</p>
              </Card>
            </SwiperSlide>
          ))}
        </Slider>
      </Swiper>
    </Container>
  );
}
