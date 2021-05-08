import React, { useState } from 'react';

import Header from './components/Header';
import General from './components/General';
import Cast from './components/Cast';

import { Container } from './styles';

export default function Footer() {
  const [selected, setSelected] = useState<'general' | 'cast'>('general');

  return (
    <Container>
      <Header selected={selected} setSelected={setSelected} />
      {selected === 'general' && <General />}
      {selected === 'cast' && <Cast />}
    </Container>
  );
}
