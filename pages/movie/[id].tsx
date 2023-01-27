import { NextPage } from 'next';
import { FC } from 'react';

import Movie from '@/components/screens/movie/Movie';

import styles from './[id].module.scss';

const MoviePage: NextPage = () => {
	return <Movie />;
};

export default MoviePage;
