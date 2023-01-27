import { axiosClassic } from 'api/interceptor';

import { IMovie } from '@/shared/interfaces/movie.interface';

export const ViewsService = {
	async updateViews(movieId: string) {
		return axiosClassic.patch(`/views/update/${movieId}`);
	}
};
