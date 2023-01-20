import { FC } from 'react';

import styles from './StatisticItem.module.scss';
import { IStatisticItem } from './statistic-item.interface';

const StatisticItem: FC<{ item: IStatisticItem }> = ({ item }) => {
	return (
		<li className={styles.item}>
			<item.Icon />
			<div className={styles.title}>{item.name}</div>
			<div className={styles.value}>{item.value}</div>
		</li>
	);
};

export default StatisticItem;
