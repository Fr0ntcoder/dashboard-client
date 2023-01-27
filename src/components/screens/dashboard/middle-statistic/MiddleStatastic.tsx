import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';

import TotalFees from '@/components/screens/dashboard/total-fees/TotalFees';
import ViewsChart from '@/components/screens/dashboard/views-chart/ViewsChart';
import Heading from '@/components/ui/heading/Heading';
import Loader from '@/components/ui/loader/Loader';

import { StatisticsService } from '@/services/statistics/statistics.service';

import styles from './MiddleStatastic.module.scss';

const MiddleStatastic: FC = () => {
	const { data, isLoading } = useQuery(['get middle statistics'], () =>
		StatisticsService.getMiddle()
	);
	return (
		<div className={styles.root}>
			<Heading>Графики</Heading>
			{isLoading ? (
				<Loader />
			) : data ? (
				<div className={styles.list}>
					<TotalFees total={data.totalFees} />
					<ViewsChart data={data.viewsByMonth} />
				</div>
			) : (
				<div>Не найдено</div>
			)}
		</div>
	);
};

export default MiddleStatastic;
