import { IReview } from '@/shared/interfaces/reviews.interface';

export interface IMovie {
	name: string;
	rating: number;
	poster: string;
	views: number;
	reviews?: IReview[];
	fees: number;
}
