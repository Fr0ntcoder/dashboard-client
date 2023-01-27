import { useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';

import Layout from '@/components/layout/Layout';
import Reviews from '@/components/screens/movie/reviews/Reviews';

import { MovieService } from '@/services/movie.service';
import { ViewsService } from '@/services/views.service';

import styles from './Movie.module.scss';

const Movie: FC = () => {
	const { query } = useRouter();
	const movieId = Number(query?.id);
	const {
		refetch,
		data: movie,
		isLoading
	} = useQuery(
		['get movie', query?.id],
		() => MovieService.getMovieById(movieId),
		{
			select: ({ data }) => data,
			enabled: !!movieId
		}
	);

	const { mutate } = useMutation(['update count opened'], () =>
		ViewsService.updateViews(movieId.toString())
	);

	useEffect(() => {
		if (movieId) {
			mutate();
		}
	}, [movieId]);

	return (
		<Layout title={`${movie?.name} - Cinema`}>
			<div className={styles.wrapper}>
				<div className={styles.content}>
					<div className={styles.poster}>
						{movie?.poster && (
							<Image
								src={movie?.poster}
								width='100'
								height='100'
								alt={movie?.poster}
							/>
						)}
					</div>
					<div className={styles.details}>
						<h3 className={styles.name}>{movie?.name}</h3>
						{movie?.rating && (
							<span className={styles.rating}>{movie.rating.toFixed(1)}</span>
						)}
						<ul className={styles.list}>
							<li className={styles.item}>
								<span>Сборы в мире</span>
								<span>$ {movie?.fees.toLocaleString()}</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<Reviews
				movieId={movieId}
				reviews={movie?.reviews || []}
				isLoading={isLoading}
			/>
		</Layout>
	);
};

export default Movie;
