export const formatNumber = (n: number) => {
	return Intl.NumberFormat('ru-Ru').format(n);
};
