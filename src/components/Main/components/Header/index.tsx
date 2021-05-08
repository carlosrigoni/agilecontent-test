import React from 'react';

import { Container, Option } from './styles';

interface HeaderProps {
  season: number;
  setSeason: React.Dispatch<React.SetStateAction<number>>;
  seasonsQuantity: number;
}

export default function Header({
  season,
  seasonsQuantity,
  setSeason,
}: HeaderProps) {
  const arraySeasons = new Array(seasonsQuantity, 1);

  return (
    <Container>
      {arraySeasons.map((x, index) => (
        <Option
          key={index}
          selected={season === index + 1 ? true : false}
          onClick={() => setSeason(index + 1)}
        >
          T{index + 1}
        </Option>
      ))}
    </Container>
  );
}
