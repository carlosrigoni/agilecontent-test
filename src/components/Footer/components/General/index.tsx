import React from 'react';

import {
  Container,
  Interactions,
  Synopsis,
  Interaction,
  InteractionIcon,
} from './styles';

export default function General() {
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
        <p>
          Durante una mission a Marte de la nave tripulada Ares III, una fuerte
          tormenta se desata. por lo que. tras haber dado por desaparecido y
          muerto al astranauta Mark Watney (Matt Damon). sus companeiros toman
          la decision de irse. sin embargo. ha sobrevivido. pero esta solo y sin
          apenas recursos en
        </p>
      </Synopsis>
    </Container>
  );
}
