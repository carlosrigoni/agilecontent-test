import React from 'react';

import { Container, Subtitle, CloseIcon } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <h1>Penny Dreadful</h1>
        <Subtitle src="/assets/cienc.svg" width={592} height={24} />
      </div>

      <CloseIcon src="/assets/close-search-w.svg" width={28} height={200} />
    </Container>
  );
}
