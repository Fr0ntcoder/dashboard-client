import { FC } from 'react';
import { MdOutlineQueryStats } from 'react-icons/md';

import AnimatedCounter from '@/components/ui/animated-counter/AnimatedCounter';
import ProgressBar from '@/components/ui/progress-bar/ProgressBar';

import { formatNumber } from '../../../../utils/number/number.format';

import styles from './TotalFees.module.scss';

const TotalFees: FC<{ total: number }> = ({ total }) => {
	const maxTotal = 1700000000;
	return (
		<div className={styles.root}>
			<ProgressBar percent={Math.round((total * 100) / maxTotal)} />
			<span className={styles.icon}>
				<MdOutlineQueryStats />
			</span>
			<h3 className={styles.title}>Общие сборы</h3>
			<div className={styles.total}>
				$<AnimatedCounter to={total} />
			</div>
		</div>
	);
};

export default TotalFees;
