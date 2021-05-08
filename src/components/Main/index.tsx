import React from 'react';

import Header from './components/Header';
import Episodes from './components/Episodes';

import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Episodes />
    </Container>
  );
}
