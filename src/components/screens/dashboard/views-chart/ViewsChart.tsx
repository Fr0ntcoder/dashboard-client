import {
	BarElement,
	CategoryScale,
	Chart as ChartJS,
	LinearScale,
	Tooltip
} from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

import { options } from '@/components/screens/dashboard/views-chart/chart.options';

import { IViewsByMonth } from '@/services/statistics/statistics.interface';

import styles from './ViewsChart.module.scss';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const ViewsChart: FC<{ data: IViewsByMonth[] }> = ({ data }) => {
	return (
		<div className={styles.root}>
			<div className={styles.chart}>
				<Bar
					options={options as any}
					data={{
						labels: data.map((item) => item.month),
						datasets: [
							{
								label: 'Dataset 1',
								data: data.map((item) => item.views),
								backgroundColor: '#fd3706'
							}
						]
					}}
				/>
			</div>
		</div>
	);
};

export default ViewsChart;
