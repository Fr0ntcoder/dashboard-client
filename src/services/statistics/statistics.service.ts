import instance from 'api/interceptor';

import { IStatisticItem } from '@/components/ui/statistic/statistic-item/statistic-item.interface';

import {
	IMainStatisticsResponse,
	IMiddleStatisticsResponse
} from '@/services/statistics/statistics.interface';

export const StatisticsService = {
	async getMain() {
		const response = await instance.get<IStatisticItem[]>('/statistics/main');

		return response.data;
	},

	async getMiddle() {
		const response = await instance.get<IMiddleStatisticsResponse>(
			'/statistics/middle'
		);

		return response.data;
	}
};
