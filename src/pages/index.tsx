import React from 'react';
import Head from 'next/head';
import { GetStaticProps } from 'next';

import Header from '../components/Header';
import Main, { IEpisode } from '../components/Main';
import Footer from '../components/Footer';

import { Background } from '../styles/pages/Home';

interface HomeProps {
  episodes: IEpisode[];
  tvShow: ITvShow;
}

export interface ICast {
  ID: string;
  Name: string;
}

export interface IGenres {
  ID: string;
  Title: string;
}

export interface ITvShow {
  ID: string;
  Title: string;
  Synopsis: string;
  Year: number;
  Images: {
    Background: string;
  };
  Genres: IGenres[];
  Cast: ICast[];
}

export default function Home({ episodes, tvShow }: HomeProps) {
  return (
    <>
      <Head>
        <title>Telecine | {tvShow.Title}</title>
        <meta name="description" content={tvShow.Synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Background url={tvShow.Images.Background} />
      <Header title={tvShow.Title} genres={tvShow.Genres} year={tvShow.Year} />
      <Main episodes={episodes} />
      <Footer cast={tvShow.Cast} synopsis={tvShow.Synopsis} />
    </>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  const episodesResponse = await fetch(
    'https://sample-api-78c77.firebaseio.com/episodes/SHOW123.json'
  );
  const tvShowResponse = await fetch(
    'https://sample-api-78c77.firebaseio.com/tv-shows/SHOW123.json'
  );

  const episodes = await episodesResponse.json();
  const tvShow = await tvShowResponse.json();

  return {
    props: {
      episodes,
      tvShow,
    },
    revalidate: 60,
  };
};
