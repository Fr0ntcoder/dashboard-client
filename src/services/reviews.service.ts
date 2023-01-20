import interceptor from 'api/interceptor';
import axios from 'axios';

import { IReview, IReviewDto } from '@/shared/interfaces/reviews.interface';

export const ReviewService = {
	async createReview(body: IReviewDto) {
		return interceptor.post<IReview>(`/review`, body);
	}
};
