import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Img from '@/assets/img/logo.png';

import styles from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<Link href='/'>
			<Image src={Img} alt='Логотип' />
		</Link>
	);
};

export default Logo;
