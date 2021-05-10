import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
  width: 90%;
  margin: auto;
  margin-top: 30px;

  display: flex;
  flex-direction: row;

  @media (max-width: 900px) {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const Interactions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Interaction = styled.div`
  opacity: 0.6;
  padding: 0px 50px 10px 0px;
  text-align: center;

  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export const InteractionIcon = styled(Image)``;

export const Synopsis = styled.div`
  opacity: 0.8;
  color: ${(props) => props.theme.colors.textSecondary};
  width: 70%;

  @media (max-width: 900px) {
    width: 100%;
  }
`;
