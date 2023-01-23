export interface IMainStatisticsResponse {
	countReviews: number;
	countMovies: number;
	views: number;
	averageRating: number;
}
export type IViewsByMonth = {
	views: string;
	month: Date;
};

export interface IMiddleStatisticsResponse {
	totalFees: number;
	viewsByMonth: IViewsByMonth[];
}
