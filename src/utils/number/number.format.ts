export const formatNumber = (n: number) => {
	return Intl.NumberFormat('en-EN').format(n);
};
