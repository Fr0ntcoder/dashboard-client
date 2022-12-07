import { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegUser, FaRegUserCircle, FaUserCircle } from 'react-icons/fa';

import { IAuthFields } from '@/components/layout/header/login-form/login-form.interface';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';
import UserAvatar from '@/components/ui/user-avatar/UserAvatar';

import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';

import styles from './LoginForm.module.scss';

const LoginForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<IAuthFields>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const { setUser, user } = useAuth();

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') {
			setUser({
				id: 1,
				email: 'test@mail.ru',
				avatarPath: '/src/assets/img/avatar.png',
				name: 'Илья'
			});
		}
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar avatarPath={user.avatarPath || ''} />
			) : (
				<button className={styles.btn} onClick={() => setIsShow(!isShow)}>
					<FaRegUserCircle />
				</button>
			)}
			{isShow && (
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<Field
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value:
									/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
								message: 'Введите email'
							}
						})}
						placeholder='Email'
						error={errors.email}
						className={styles.input}
					/>
					<Field
						{...register('password', {
							required: 'Password is required',
							minLength: {
								value: 6,
								message: 'Мин количество символов 6'
							}
						})}
						placeholder='Password'
						error={errors.password}
						type={'password'}
						className={styles.input}
					/>
					<div className={styles.bottom}>
						<Button className={styles.login} onClick={() => setType('login')}>
							Войти
						</Button>
						<button
							className={styles.register}
							onClick={() => setType('register')}
						>
							Регистрация
						</button>
					</div>
				</form>
			)}
		</div>
	);
};

export default LoginForm;
