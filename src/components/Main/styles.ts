import styled from 'styled-components';

export const Container = styled.div`
  min-height: 585px;
  padding-right: 6%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  overflow: hidden;

  @media (max-width: 550px) {
    min-height: 100px;
  }
`;
