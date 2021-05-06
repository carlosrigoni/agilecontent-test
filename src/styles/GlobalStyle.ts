import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @media (max-width: 1800px) {
    html {
      font-size: 93.75%;
    }
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
  background: ${(props) => props.theme.colors.backgroundPrimary};
  color: ${(props) => props.theme.colors.text};
  max-width: 768px;
  margin: auto;
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem 'Nunito', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    object-fit: cover;
  }
`;
