import React from 'react';

import { Container, Option } from './styles';

interface HeaderProps {
  selected: 'general' | 'cast';
  setSelected: React.Dispatch<React.SetStateAction<'general' | 'cast'>>;
}

export default function Header() {
  return (
    <Container>
      <Option selected={true}>T1</Option>
      <Option selected={false}>T2</Option>
      <Option selected={false}>T3</Option>
    </Container>
  );
}
