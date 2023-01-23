import cn from 'classnames';
import { FC } from 'react';
import * as AntDesignIcon from 'react-icons/ai';

import { getIcon } from '@/components/ui/statistic/statistic-item/statisctics.util';

import { formatNumber } from '@/utils/number/number.format';

import styles from './StatisticItem.module.scss';
import { IStatisticItem } from './statistic-item.interface';

const StatisticItem: FC<{ item: IStatisticItem }> = ({ item }) => {
	const Icon = getIcon(item.id);
	return (
		<li className={styles.item}>
			<Icon className={styles.icon} />
			<div className={styles.title}>{item.name}</div>
			<div className={styles.value}>{formatNumber(Number(item.value))}</div>
			<span className={cn(styles.block, styles[`block_${item.id}`])}></span>
		</li>
	);
};

export default StatisticItem;
