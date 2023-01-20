import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaFilm } from 'react-icons/fa';

import Img from '@/assets/img/logo.svg';

import styles from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<Link href='/' className={styles.root}>
			<FaFilm />
		</Link>
	);
};

export default Logo;
