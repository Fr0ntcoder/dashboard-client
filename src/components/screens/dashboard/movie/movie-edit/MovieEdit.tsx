import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';
import Heading from '@/components/ui/heading/Heading';
import Loader from '@/components/ui/loader/Loader';
import UploadField from '@/components/ui/upload-field/UploadField';

import { IMovieDto } from '@/shared/interfaces/movie.interface';

import { MovieService } from '@/services/movie.service';

import { IMediaResponse } from '../../../../../services/media.service';

import styles from './MovieEdit.module.scss';

const MovieEdit: FC = () => {
	const { query, push } = useRouter();
	const movieId = Number(query.id);
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		watch,
		setValue
	} = useForm<IMovieDto>({ mode: 'onChange' });
	const { isLoading } = useQuery(
		['get movie by id', movieId],
		() => MovieService.getMovieById(movieId),
		{
			onSuccess: ({ data }) => {
				setValue('name', data.name);
				setValue('fees', data.fees);
				setValue('poster', data.poster);
			},
			enabled: !!movieId
		}
	);

	const { mutate } = useMutation(
		['update movie', movieId],
		(data: IMovieDto) => MovieService.updateMovie(movieId, data),
		{
			onSuccess() {
				push('/manage/movies');
			}
		}
	);
	const onSubmit: SubmitHandler<IMovieDto> = (data) => {
		mutate(data);
	};
	return (
		<Layout title='Редактирование фильма'>
			<Heading>Редактирование фильма</Heading>
			{isLoading ? (
				<Loader count={5} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<Field
						{...register('name', {
							required: 'Введите название'
						})}
						placeholder='Название'
						error={errors.name}
						className={styles.input}
					/>
					<Field
						type='number'
						{...register('fees', {
							required: 'Введите сборы',
							valueAsNumber: true
						})}
						placeholder='Введите сборы'
						error={errors.fees}
						className={styles.input}
					/>
					<Controller
						control={control}
						name='poster'
						render={({ field: { onChange, value } }) => (
							<UploadField
								folder='poster'
								onChange={(value: IMediaResponse) => onChange(value.url)}
								value={value}
							/>
						)}
					/>
					<Button className={styles.btn}>Сохранить</Button>
				</form>
			)}
		</Layout>
	);
};

export default MovieEdit;
