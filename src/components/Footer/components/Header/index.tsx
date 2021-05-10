import React from 'react';

import { Container, TelecineIcon, Options, Option } from './styles';

interface HeaderProps {
  selected: 'general' | 'cast';
  setSelected: React.Dispatch<React.SetStateAction<'general' | 'cast'>>;
}

export default function Header({ selected, setSelected }: HeaderProps) {
  return (
    <Container>
      <TelecineIcon src="/assets/logo-telecine.svg" width={49} height={30} />

      <Options>
        <Option
          onClick={() => setSelected('general')}
          selected={selected === 'general' ? true : false}
        >
          GENERAL
        </Option>
        <Option
          onClick={() => setSelected('cast')}
          selected={selected === 'cast' ? true : false}
        >
          ELENCO
        </Option>
        <Option selected={false}>PRINCIPALES PREMIOS</Option>
      </Options>
    </Container>
  );
}
