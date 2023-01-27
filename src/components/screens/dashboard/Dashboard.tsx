import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import MainStatistic from '@/components/screens/dashboard/main-statistic/MainStatistic';
import MiddleStatastic from '@/components/screens/dashboard/middle-statistic/MiddleStatastic';

import styles from './Dashboard.module.scss';

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<MainStatistic />
			<MiddleStatastic />
		</Layout>
	);
};

export default Dashboard;
