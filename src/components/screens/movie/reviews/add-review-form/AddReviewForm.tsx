import { useMutation, useQueryClient } from '@tanstack/react-query';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdSend } from 'react-icons/md';

import Field from '@/components/ui/field/Field';

import { IReviewDto } from '@/shared/interfaces/reviews.interface';

import { ReviewService } from '@/services/reviews.service';

import styles from './AddReviewForm.module.scss';

const AddReviewForm: FC<{ movieId: number }> = ({ movieId }) => {
	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IReviewDto>({
		mode: 'onChange'
	});

	const queryClient = useQueryClient();

	const { mutate: mutateAsync } = useMutation(
		['add review'],
		(data: IReviewDto) => ReviewService.createReview({ ...data, movieId }),
		{
			onSuccess() {
				reset();
				queryClient.invalidateQueries(['get movie', movieId.toString()]);
			}
		}
	);

	const onSubmit: SubmitHandler<IReviewDto> = async (data) => {
		await mutateAsync(data);
	};

	return (
		<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
			<Field
				{...register('description', {
					required: 'Description is required'
				})}
				placeholder='Написать рецензию'
				error={errors.description}
				className={styles.input}
			/>
			<button className={styles.btn}>
				<MdSend />
			</button>
		</form>
	);
};

export default AddReviewForm;
