import React from 'react';

import {
  Container,
  Interactions,
  Synopsis,
  Interaction,
  InteractionIcon,
} from './styles';

interface GeneralProps {
  synopsis: string;
}

export default function General({ synopsis }: GeneralProps) {
  return (
    <Container>
      <Interactions>
        <Interaction>
          <InteractionIcon
            src="/assets/add-gray-s.svg"
            width={34}
            height={34}
          />
          <p>Mi Lista</p>
        </Interaction>

        <Interaction>
          <InteractionIcon
            src="/assets/sad-gray-w.svg"
            width={34}
            height={34}
          />
          <p>Evaluar</p>
        </Interaction>

        <Interaction>
          <InteractionIcon
            src="/assets/rec-gray-s.svg"
            width={34}
            height={34}
          />
          <p>Grabar</p>
        </Interaction>

        <Interaction>
          <InteractionIcon
            src="/assets/share-gray-s.svg"
            width={34}
            height={34}
          />
          <p>Compartir</p>
        </Interaction>
      </Interactions>

      <Synopsis>
        <strong>SINOPSE</strong>
        <p>{synopsis}</p>
      </Synopsis>
    </Container>
  );
}
