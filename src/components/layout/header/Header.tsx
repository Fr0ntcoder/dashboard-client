import { FC } from 'react';

import LoginForm from '@/components/layout/header/login-form/LoginForm';
import Logo from '@/components/layout/header/logo/Logo';
import Search from '@/components/layout/header/search/Search';

import styles from './Header.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.root}>
			<Logo />
			<Search />
			<LoginForm />
		</header>
	);
};

export default Header;
