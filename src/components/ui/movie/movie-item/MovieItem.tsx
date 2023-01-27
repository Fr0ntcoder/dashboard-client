import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import { IMovie } from '@/shared/interfaces/movie.interface';

import styles from './MovieItem.module.scss';

const MovieItem: FC<{ movie: IMovie; variant?: 'sm' | 'md' }> = ({
	movie,
	variant = 'md'
}) => {
	return (
		<Link href={`/movie/${movie.id}`} className={styles.item}>
			<div
				className={cn(styles.poster, {
					[styles.poster_small]: variant === 'sm',
					[styles.poster_big]: variant === 'md'
				})}
			>
				{movie.rating && (
					<span className={styles.rating}>{movie.rating.toFixed(1)}</span>
				)}
				<Image src={movie.poster} width='100' height='100' alt={movie.poster} />
			</div>
			<h3 className={styles.title}>{movie.name}</h3>
		</Link>
	);
};

export default MovieItem;
