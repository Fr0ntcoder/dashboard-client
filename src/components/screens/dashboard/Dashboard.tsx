import { FC } from 'react';

import Layout from '@/components/layout/Layout';
import MainStatistic from '@/components/screens/dashboard/main-statistic/MainStatistic';

import styles from './Dashboard.module.scss';

const Dashboard: FC = () => {
	return (
		<Layout title='Dashboard'>
			<MainStatistic />
		</Layout>
	);
};

export default Dashboard;
