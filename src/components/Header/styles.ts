import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 30px 40px 60px 70px;

  div {
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-weight: bold;
    font-size: 6rem;
  }
`;

export const Subtitle = styled(Image)`
  opacity: 0.6;
`;

export const CloseIcon = styled(Image)`
  opacity: 0.6;
`;
