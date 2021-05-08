import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  opacity: 0.9;

  padding: 35px 77px 0 83px;

  div {
    /* display: flex;
    flex-direction: column; */
  }

  h1 {
    font-weight: bold;
    font-size: 5rem;
  }
`;

export const Subtitle = styled(Image)`
  opacity: 0.7;
  margin-top: -10px !important;
`;

export const CloseIcon = styled(Image)`
  opacity: 0.6;
  object-fit: contain;

  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;
