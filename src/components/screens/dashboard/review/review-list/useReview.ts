import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { MovieService } from '@/services/movie.service';

import { ReviewService } from '../../../../../services/reviews.service';

export const useReview = () => {
	const { data: response, isLoading } = useQuery(['get all reviews'], () =>
		ReviewService.getAll()
	);
	const queryClient = useQueryClient();
	const { mutate } = useMutation(
		['remove review'],
		(id: number) => ReviewService.deleteReview(id),
		{
			onSuccess() {
				queryClient.invalidateQueries(['get all reviews']);
			}
		}
	);

	return { response, isLoading, mutate };
};
