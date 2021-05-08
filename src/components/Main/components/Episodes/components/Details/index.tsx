import React from 'react';

import { DetailsContainer, ImagePreview } from './styles';

interface DetailsProps {
  Image: string;
  Synopsis: string;
  Duration: number;
}

export default function Details({ Image, Synopsis, Duration }: DetailsProps) {
  return (
    <DetailsContainer>
      <ImagePreview src={Image} width={367} height={250} />
      <p>{Synopsis}</p>
    </DetailsContainer>
  );
}
