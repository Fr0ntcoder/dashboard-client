import { IReview } from '@/shared/interfaces/reviews.interface';

export interface IMovie {
	id: string;
	name: string;
	rating: number | null;
	poster: string;
	views: number;
	reviews?: IReview[];
	fees: number;
}

export interface IMovieDto extends Pick<IMovie, 'name' | 'fees' | 'poster'> {}
