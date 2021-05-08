import React, { useRef, useState } from 'react';
import { SwiperSlide } from 'swiper/react';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import SwiperCore, { Pagination, Navigation } from 'swiper/core';

SwiperCore.use([Pagination, Navigation]);

import { ICast } from '../../../../pages';

import { Container, Slider, Card, SwiperContainer } from './styles';

interface CastProps {
  cast: ICast[];
}

export default function Cast({ cast }: CastProps) {
  return (
    <Container>
      <SwiperContainer
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
      </SwiperContainer>
    </Container>
  );
}
