import React from 'react';

import { Container, Subtitle, CloseIcon, Title } from './styles';

export default function Header() {
  return (
    <Container>
      <div>
        <Title src="/assets/penny-dreadful.svg" width={462} height={69} />
        <Subtitle src="/assets/cienc.svg" width={592} height={24} />
      </div>

      <CloseIcon src="/assets/close-search-w.svg" width={28} height={27} />
    </Container>
  );
}
