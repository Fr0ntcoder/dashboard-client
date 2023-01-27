import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import Heading from '@/components/ui/heading/Heading';
import Table from '@/components/ui/table/Table';

import { MovieService } from '@/services/movie.service';

import styles from './MovieList.module.scss';
import { useMovie } from './useMovie';

const MovieList: FC = () => {
	const { create, response, mutate, isLoading } = useMovie();
	return (
		<Layout title='Список фильмов'>
			<div className={styles.top}>
				<Heading>Список фильмов</Heading>
				<button onClick={() => create()} className={styles.create}>
					Добавить фильм
				</button>
			</div>
			<Table
				items={
					response?.data.length
						? response.data.map((movie) => ({
								id: movie.id,
								name: movie.name,
								image: movie.poster,
								editLink: `/manage/movies/edit/${movie.id}`,
								viewLink: `/movie/${movie.id}`,
								removeHandler: () => mutate(Number(movie.id))
						  }))
						: []
				}
				isLoading={isLoading}
			/>
		</Layout>
	);
};

export default MovieList;
