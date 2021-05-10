import React from 'react';
import { IGenres } from '../../pages';

import { Container, Subtitle, CloseIcon } from './styles';

interface HeaderProps {
  title: string;
  genres: IGenres[];
  year: number;
}

export default function Header({ title, genres, year }: HeaderProps) {
  return (
    <Container>
      <CloseIcon src="/assets/close-search-w.svg" width={28} height={27} />

      <div>
        <h1>{title}</h1>
        <Subtitle src="/assets/cienc.svg" width={592} height={24} />
      </div>
    </Container>
  );
}
