import { motion } from 'framer-motion';
import { FC } from 'react';

import { useProgressAnimate } from '@/components/ui/progress-bar/useProgressAnimate';

import styles from './ProgressBar.module.scss';

const ProgressBar: FC<{ percent: number }> = ({ percent }) => {
	const { variants } = useProgressAnimate(percent);
	return (
		<div className={styles.root}>
			<div className={styles.overflow}>
				<motion.div {...variants} className={styles.bar}></motion.div>
			</div>
			<div className={styles.value}>{percent}%</div>
		</div>
	);
};

export default ProgressBar;
