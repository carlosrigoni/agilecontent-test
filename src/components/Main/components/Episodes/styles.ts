import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: auto;
  height: 80%;

  display: flex;
  flex-direction: column;
  width: 25%;
  justify-content: flex-start;

  div {
    display: flex;
    flex-direction: row;
    margin: 10px;

    align-items: center;
    justify-content: space-between;

    color: #9a9a9c;
    font-weight: bold;

    p {
      margin-left: 10px;
    }

    img {
      width: 25px;
      height: 25px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Episode = styled.li`
  list-style: none;
  border-bottom: 1px solid #5555;
  cursor: pointer;
`;
