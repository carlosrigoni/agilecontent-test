import React, { useState } from 'react';

import Header from './components/Header';
import Episodes from './components/Episodes';

import { Container } from './styles';

export interface IEpisode {
  ID: string;
  Title: string;
  Image: string;
  Synopsis: string;
  EpisodeNumber: number;
  SeasonNumber: number;
  Duration: number;
}

export interface IEpisodes {
  episodes: IEpisode[];
}

export default function Main({ episodes }: IEpisodes) {
  const [season, setSeason] = useState(1);
  return (
    <Container>
      <Header season={season} setSeason={setSeason} seasonsQuantity={2} />
      <Episodes episodes={episodes} season={season} />
    </Container>
  );
}
