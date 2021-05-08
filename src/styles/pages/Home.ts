import styled from 'styled-components';

interface IBackground {
  url: string;
}

export const Background = styled.div<IBackground>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;

  height: 770px;

  box-shadow: inset -1000px 0px 90px rgba(0, 0, 0, 0.25),
    inset 0px 50px 100px #000000, inset -500px 4px 200px rgba(0, 0, 0, 0.8),
    inset -20px -200px 100px rgba(0, 0, 0, 0.96),
    inset 1000px 1000px 100px rgba(0, 0, 0, 0.2);
  filter: blur(1px);
  opacity: 0.5;
`;
