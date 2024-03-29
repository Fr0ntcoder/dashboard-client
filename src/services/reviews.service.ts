import interceptor from 'api/interceptor';
import axios from 'axios';

import { IReview, IReviewDto } from '@/shared/interfaces/reviews.interface';

export const ReviewService = {
	async createReview(body: IReviewDto) {
		return interceptor.post<IReview>(`/review`, body);
	},

	async getReviewById(id: number) {
		return interceptor.get<IReview>(`/review/${id}`);
	},

	async getAll() {
		return interceptor.get<IReview[]>(`/review`);
	},

	async deleteReview(id: number) {
		return interceptor.delete(`/review/${id}`);
	}
};
