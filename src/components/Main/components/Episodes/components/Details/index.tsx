import React from 'react';

import { DetailsContainer, ImagePreview } from './styles';

export default function Details() {
  return (
    <DetailsContainer>
      <ImagePreview
        src="https://occ-0-894-1123.1.nflxso.net/art/e0e90/292975320f88a9f3fc741c132d0ec2ac20ce0e90.webp"
        width={367}
        height={250}
      />
      <p>
        londres, 1891. A polícia investiga uma série de assassinatos, mas Sir
        Malcolm Murray e a bela Vanessa Ives sabem que há algo mais sombrio por
        trás de tudo.
      </p>
    </DetailsContainer>
  );
}
