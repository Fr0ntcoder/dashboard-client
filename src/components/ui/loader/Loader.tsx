import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import styles from './Loader.module.scss';

const Loader: FC<SkeletonProps> = (props) => {
	return (
		<Skeleton
			duration={0.3}
			baseColor='#F1F5FE'
			highlightColor='orange'
			height={20}
			className={styles.line}
		/>
	);
};

export default Loader;
