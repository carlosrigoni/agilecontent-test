import styled from 'styled-components';
import Image from 'next/image';

interface IOption {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  margin: auto;
  margin-top: 30px;
  border-bottom: 2px solid #2a2b2d;
`;

export const Options = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 45%;
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
`;

export const TelecineIcon = styled(Image)``;
