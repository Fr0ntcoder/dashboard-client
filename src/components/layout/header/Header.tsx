import { FC } from 'react';

import Logo from '@/components/layout/header/Logo';
import LoginForm from '@/components/layout/header/login-form/LoginForm';

import styles from './Header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Logo />
			<LoginForm />
		</header>
	);
};

export default Header;
