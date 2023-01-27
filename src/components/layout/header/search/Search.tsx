import { motion } from 'framer-motion';
import { FC } from 'react';
import { FaSearch } from 'react-icons/fa';

import { useSearch } from '@/components/layout/header/search/useSearch';
import Field from '@/components/ui/field/Field';
import MovieItem from '@/components/ui/movie/movie-item/MovieItem';

import { dropAnimation } from '@/utils/animation/fade';

import styles from './Search.module.scss';

const Search: FC = () => {
	const { data, handleSearch, searchTerm, isSuccess } = useSearch();
	return (
		<div className={styles.search}>
			<label>
				<Field
					type='text'
					placeholder='Найти фильм...'
					value={searchTerm}
					onChange={handleSearch}
					Icon={FaSearch}
					className={styles.input}
				/>
			</label>
			{isSuccess && (
				<motion.div
					className={styles.result}
					initial={false}
					animate={isSuccess ? 'open' : 'closed'}
					variants={dropAnimation}
				>
					{data?.length ? (
						data.map((movie) => (
							<MovieItem movie={movie} variant='sm' key={movie.id} />
						))
					) : (
						<div className={styles.empty}>Фильмы не найдены</div>
					)}
				</motion.div>
			)}
		</div>
	);
};

export default Search;
