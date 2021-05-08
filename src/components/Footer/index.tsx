import React, { useState } from 'react';

import Header from './components/Header';
import General from './components/General';
import Cast from './components/Cast';

import { ICast } from '../../pages';

import { Container } from './styles';

interface FooterProps {
  cast: ICast[];
  synopsis: string;
}

export default function Footer({ cast, synopsis }: FooterProps) {
  const [selected, setSelected] = useState<'general' | 'cast'>('general');

  return (
    <Container>
      <Header selected={selected} setSelected={setSelected} />
      {selected === 'general' && <General synopsis={synopsis} />}
      {selected === 'cast' && <Cast cast={cast} />}
    </Container>
  );
}
