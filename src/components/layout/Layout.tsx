import { FC, PropsWithChildren } from 'react';

import Header from '@/components/layout/header/Header';
import Sidebar from '@/components/layout/sidebar/Sidebar';

import Meta from '@/utils/meta/Meta';
import { IMeta } from '@/utils/meta/meta.interface';

import { useAuth } from '../../hooks/useAuth';

import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	const { user } = useAuth();
	return (
		<>
			<Meta {...meta} />
			<div className={styles.wrapper}>
				{user && <Sidebar />}
				<div className={styles.content}>
					<Header />
					<main className={styles.main}>{children}</main>
				</div>
			</div>
		</>
	);
};

export default Layout;
