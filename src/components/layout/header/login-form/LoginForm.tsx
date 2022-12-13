import { useMutation } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FC, SetStateAction, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaRegUser, FaRegUserCircle, FaUserCircle } from 'react-icons/fa';

import { IAuthFields } from '@/components/layout/header/login-form/login-form.interface';
import Button from '@/components/ui/button/Button';
import Field from '@/components/ui/field/Field';
import UserAvatar from '@/components/ui/user-avatar/UserAvatar';

import { useAuth } from '@/hooks/useAuth';
import { useOutside } from '@/hooks/useOutside';

import { FADE_IN, dropAnimation } from '@/utils/animation/fade';

import { AuthService } from '../../../../services/auth/auth.service';

import styles from './LoginForm.module.scss';
import { TypeUserState } from '@/providers/auth-provider/auth.interface';

const LoginForm: FC = () => {
	const { ref, setIsShow, isShow } = useOutside(false);

	const [type, setType] = useState<'login' | 'register'>('login');

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset
	} = useForm<IAuthFields>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const { user, setUser } = useAuth();

	const { mutate: loginSync } = useMutation(
		['login'],
		(data: IAuthFields) => AuthService.login(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user);
				reset();
				setIsShow(false);
			}
		}
	);

	const { mutate: registerSync } = useMutation(
		['register'],
		(data: IAuthFields) => AuthService.register(data.email, data.password),
		{
			onSuccess(data) {
				if (setUser) setUser(data.user);
				reset();
				setIsShow(false);
			}
		}
	);

	const onSubmit: SubmitHandler<IAuthFields> = (data) => {
		if (type === 'login') loginSync(data);
		else if (type === 'register') registerSync(data);

		reset();
		setIsShow(false);
	};

	return (
		<div className={styles.wrapper} ref={ref}>
			{user ? (
				<UserAvatar link='/dashboard' avatarPath='/avatar.png' />
			) : (
				<button className={styles.btn} onClick={() => setIsShow(!isShow)}>
					<FaRegUserCircle />
				</button>
			)}
			<motion.form
				animate={isShow ? 'open' : 'closed'}
				variants={dropAnimation}
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
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
			</motion.form>
		</div>
	);
};

export default LoginForm;
