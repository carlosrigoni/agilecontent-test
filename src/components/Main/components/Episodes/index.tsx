import React, { useCallback, useState } from 'react';

import Details from './components/Details';

import { IEpisode } from '../..';

interface EpisodesProps {
  season: number;
  episodes: IEpisode[];
}

import { Container, Episode } from './styles';

export default function Episodes({ episodes, season }: EpisodesProps) {
  const [selected, setSelected] = useState('');

  const handleSelect = useCallback(
    (id: string) => {
      setSelected((oldSelected) => {
        if (id === oldSelected) {
          return '';
        }
        return id;
      });
    },
    [setSelected]
  );

  return (
    <Container>
      {episodes.map((episode) => {
        if (episode === null || episode.SeasonNumber !== season) {
          return;
        }
        return (
          <Episode key={episode.ID} onClick={() => handleSelect(episode.ID)}>
            <div>
              <div>
                <span>{episode.EpisodeNumber}</span>
                <p>{episode.Title}</p>
              </div>

              <img src="/assets/play-small-player-w.svg" />
            </div>
            {episode.ID === selected && (
              <Details
                Image={episode.Image}
                Synopsis={episode.Synopsis}
                Duration={episode.Duration}
              />
            )}
          </Episode>
        );
      })}
    </Container>
  );
}
