import { FC, PropsWithChildren } from 'react';

import Header from '@/components/layout/header/Header';

import Meta from '@/utils/meta/Meta';
import { IMeta } from '@/utils/meta/meta.interface';

import styles from './Layout.module.scss';

const Layout: FC<PropsWithChildren<IMeta>> = ({ children, ...meta }) => {
	return (
		<>
			<Meta {...meta} />
			<div className={styles.wrapper}>
				<Header />
				<main className={styles.main}>{children}</main>
			</div>
		</>
	);
};

export default Layout;
