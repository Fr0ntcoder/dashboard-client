import cn from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { FaReact } from 'react-icons/fa';

import { menu } from '@/components/layout/sidebar/menu/menu.data';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	const { asPath } = useRouter();
	return (
		<aside className={styles.aside}>
			<Link href='/' className={styles.logo}>
				<FaReact />
			</Link>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					{menu.map((item) => (
						<li className={styles.item}>
							<Link
								href={item.link}
								key={item.link}
								className={cn(styles.link, {
									[styles.link__active]: item.link === asPath
								})}
							>
								<item.Icon />
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
};

export default Sidebar;
