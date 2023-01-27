import { IReview } from '@/shared/interfaces/reviews.interface';

export interface IReviews {
	movieId: number;
	reviews: IReview[];
	isLoading: boolean;
}
