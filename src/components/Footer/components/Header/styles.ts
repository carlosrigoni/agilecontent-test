import styled from 'styled-components';
import Image from 'next/image';

interface IOption {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: space-between;

  width: 90%;
  margin: auto;
  margin-top: 30px;
  border-bottom: 2px solid #2a2b2d;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-end;
    padding: 25px 0;
  }
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 45%;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const Option = styled.p<IOption>`
  font-size: 1.6rem;
  color: ${(props) => (props.selected ? props.theme.colors.text : '#909193')};
  padding-bottom: 10px;
  border-bottom: 2px solid ${(props) => (props.selected ? 'green' : 'none')};

  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.text};
  }

  @media (max-width: 1300px) {
    margin-right: 20px !important;
  }

  @media (max-width: 500px) {
    margin-top: 20px !important;
  }
`;

export const TelecineIcon = styled(Image)``;
