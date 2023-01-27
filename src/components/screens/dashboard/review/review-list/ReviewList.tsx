import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import { useReview } from '@/components/screens/dashboard/review/review-list/useReview';
import Heading from '@/components/ui/heading/Heading';
import Table from '@/components/ui/table/Table';

import styles from './ReviewList.module.scss';

const ReviewList: FC = () => {
	const { response, mutate, isLoading } = useReview();
	return (
		<Layout title='Список фильмов'>
			<div className={styles.top}>
				<Heading>Список рецензий</Heading>
			</div>
			<Table
				items={
					response?.data.length
						? response?.data.map((review) => ({
								id: review.id,
								name: review.description,
								image: review.movie.poster,
								viewLink: `/movie/${review.movie.id}`,
								removeHandler: () => mutate(Number(review.id))
						  }))
						: []
				}
				isLoading={isLoading}
			/>
		</Layout>
	);
};

export default ReviewList;
