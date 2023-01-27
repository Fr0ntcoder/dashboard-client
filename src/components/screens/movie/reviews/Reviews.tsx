import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import AddReviewForm from '@/components/screens/movie/reviews/add-review-form/AddReviewForm';
import ReviewItem from '@/components/screens/movie/reviews/review-item/ReviewItem';
import { IReviews } from '@/components/screens/movie/reviews/reviews.interface';

import { useAuth } from '@/hooks/useAuth';

import styles from './Reviews.module.scss';

const Reviews: FC<IReviews> = ({ movieId, reviews, isLoading }) => {
	const { user } = useAuth();

	return (
		<>
			{user && <AddReviewForm movieId={movieId} />}
			{isLoading ? (
				<Skeleton count={4} />
			) : reviews?.length ? (
				<div className={styles.list}>
					{reviews.map((review) => (
						<ReviewItem review={review} key={review.id} />
					))}
				</div>
			) : (
				<p className={styles.empty}>Рецензии не найдены </p>
			)}
		</>
	);
};

export default Reviews;
