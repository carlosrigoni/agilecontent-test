import styled from 'styled-components';

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;

  background-image: url('/assets/penny-dreadful-background.png');
  background-repeat: no-repeat;
  background-size: cover;

  height: 770px;

  box-shadow: inset -1000px 0px 90px rgba(0, 0, 0, 0.25),
    inset 0px 50px 100px #000000, inset -500px 4px 200px rgba(0, 0, 0, 0.7),
    inset -200px -200px 100px rgba(0, 0, 0, 0.96);
  filter: blur(1px);
  opacity: 0.5;
`;
