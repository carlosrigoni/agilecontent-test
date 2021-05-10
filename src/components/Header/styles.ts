import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  opacity: 0.9;

  padding: 35px 77px 0 83px;

  h1 {
    font-weight: bold;
    font-size: 5rem;
  }

  @media (max-width: 800px) {
    padding: 0 25px;
    font-size: 4rem;
  }

  @media (max-width: 650px) {
    padding-top: 10px;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const Subtitle = styled(Image)`
  opacity: 0.7;
  margin-top: -10px !important;

  @media (max-width: 800px) {
    margin-top: -7px !important;
  }
`;

export const CloseIcon = styled(Image)`
  opacity: 0.6;
  object-fit: contain;

  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
