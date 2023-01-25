import { FC } from 'react';

import { IViewsByMonth } from '@/services/statistics/statistics.interface';

import styles from './ViewsChart.module.scss';

const ViewsChart: FC<{ data: IViewsByMonth[] }> = ({ data }) => {
	return <div>ViewsChart</div>;
};

export default ViewsChart;
