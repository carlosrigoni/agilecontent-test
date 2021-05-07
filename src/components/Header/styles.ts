import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 35px 77px 44px 83px;

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-weight: bold;
    font-size: 6rem;
  }
`;

export const Title = styled(Image)``;

export const Subtitle = styled(Image)`
  opacity: 0.6;
`;

export const CloseIcon = styled(Image)`
  opacity: 0.6;
  object-fit: contain;
`;
