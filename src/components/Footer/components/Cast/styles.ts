import styled from 'styled-components';
import { Swiper } from 'swiper/react';

export const Container = styled.div`
  margin-top: 20px;

  display: flex;
  flex-direction: row;
`;

export const Slider = styled.div`
  width: 100%;
`;

export const Card = styled.div`
  background: #1a1a1a;
  padding: 30px 30px;
  text-align: center;

  strong {
    color: #999;
  }

  p {
    color: #777;
  }
`;

export const SwiperContainer = styled(Swiper)`
  --swiper-navigation-color: #5a5a5a;
  margin-left: 25;
  margin-right: 25;
  padding-left: 80;
  padding-right: 80;
`;
