import styled from 'styled-components';
import Image from 'next/image';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: flex-start !important;

  animation: MoveUpDown 0.2s linear;

  @keyframes MoveUpDown {
    0% {
      transform: scaleY(0);
    }
    100% {
      transform: scaleY(1);
    }
  }

  p {
    width: 367px;
    margin: 10px 0;
    font-size: 0.8rem;
    font-weight: 400;
  }

  @media (max-width: 550px) {
    p {
      width: 100%;
    }
  }
`;

export const ImagePreview = styled.img`
  width: 90% !important;
  height: 100% !important;
  object-fit: cover;

  @media (max-width: 550px) {
    width: 100% !important;
  }
`;
