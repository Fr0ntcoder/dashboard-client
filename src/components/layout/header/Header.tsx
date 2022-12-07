import { FC } from 'react';

import LoginForm from '@/components/layout/header/login-form/LoginForm';
import Logo from '@/components/layout/header/logo/Logo';

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
