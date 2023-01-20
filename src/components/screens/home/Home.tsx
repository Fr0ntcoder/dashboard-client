import { GetStaticProps } from 'next';
import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import MovieItem from '@/components/ui/movie/movie-item/MovieItem';

import { MovieService } from '@/services/movie.service';

import styles from './Home.module.scss';
import { IHome } from './home.interface';

const Home: FC<IHome> = ({ newMovies }) => {
	return (
		<Layout title='Cinema'>
			<span className={styles.span}></span>
			<h1 className={styles.title}>Новые фильмы</h1>
			{newMovies.length ? (
				<div className={styles.catalog}>
					{newMovies.map((movie) => (
						<MovieItem movie={movie} key={movie.id} />
					))}
				</div>
			) : (
				<div>Фильмы не найдены!</div>
			)}
		</Layout>
	);
};

export default Home;
