import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { AiOutlineEye } from 'react-icons/ai';

import Heading from '@/components/ui/heading/Heading';
import Loader from '@/components/ui/loader/Loader';
import StatisticItem from '@/components/ui/statistic/statistic-item/StatisticItem';

import { StatisticsService } from '@/services/statistics/statistics.service';

import styles from './MainStatistic.module.scss';

const MainStatistic: FC = () => {
	const { data, isLoading } = useQuery(['get main statistics'], () =>
		StatisticsService.getMain()
	);
	return (
		<div className={styles.block}>
			<Heading>Главная статистика</Heading>
			{isLoading && <Loader />}
			<ul className={styles.list}>
				{data?.length ? (
					data.map((item) => <StatisticItem item={item} key={item.id} />)
				) : (
					<div>Нет статистики</div>
				)}
			</ul>
		</div>
	);
};

export default MainStatistic;
