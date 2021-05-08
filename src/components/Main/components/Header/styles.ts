import styled from 'styled-components';

interface IOption {
  selected: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 24%;

  border-bottom: 2px solid #2a2b2d;
`;

export const Option = styled.p<IOption>`
  font-size: 1.6rem;
  color: #808485;
  padding-bottom: 10px;
  margin-right: 10%;
  border-bottom: 2px solid ${(props) => (props.selected ? 'green' : 'none')};

  cursor: pointer;

  :hover {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;
