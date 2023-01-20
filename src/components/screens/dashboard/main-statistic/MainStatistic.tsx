import { FC } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

import Heading from '@/components/ui/heading/Heading';
import StatisticItem from '@/components/ui/statistic/statistic-item/StatisticItem';

import styles from './MainStatistic.module.scss';

const MainStatistic: FC = () => {
	return (
		<div>
			<Heading>Главная статистика</Heading>
			<ul className={styles.list}>
				<StatisticItem
					item={{
						name: 'Просмотры',
						value: 200000,
						Icon: AiOutlineEye
					}}
				/>
			</ul>
		</div>
	);
};

export default MainStatistic;
