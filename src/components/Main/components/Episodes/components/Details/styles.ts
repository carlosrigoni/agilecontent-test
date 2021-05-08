import styled from 'styled-components';
import Image from 'next/image';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column !important;
  align-items: flex-start !important;

  p {
    width: 367px;
    margin: 10px 0;
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const ImagePreview = styled.img`
  width: 90% !important;
  height: 100% !important;
  object-fit: cover;
`;
