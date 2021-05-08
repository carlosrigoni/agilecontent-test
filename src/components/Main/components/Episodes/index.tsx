import React, { useCallback, useState } from 'react';

import Details from './components/Details';

import { Container, Episode } from './styles';

export default function Episodes() {
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

  const array = [{ ID: '1' }, { ID: '2' }, { ID: '3' }, { ID: '4' }];

  return (
    <Container>
      {array.map((item, index) => (
        <Episode onClick={() => handleSelect(item.ID)}>
          <div key={index}>
            <div>
              <span>{index + 1}</span>
              <p>Nice work</p>
            </div>

            <img src="/assets/play-small-player-w.svg" />
          </div>
          {item.ID === selected && <Details />}
        </Episode>
      ))}
    </Container>
  );
}
