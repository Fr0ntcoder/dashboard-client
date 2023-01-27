export const options = {
	responsive: true,
	scales: {
		x: {
			grid: {
				display: false,
				drawBorder: false
			}
		},
		y: {
			grid: {
				display: false,
				drawBorder: false
			},
			ticks: {
				display: false
			}
		}
	},
	borderRadius: 15,
	borderSkipped: false,
	plugins: {
		tooltip: {
			backgroundColor: '#000',
			bodyFontSize: 14,
			yAlign: 'bottom',
			callbacks: {
				label: function (context: any) {
					if (context.parsed.y !== null) {
						return context.parsed.y.toLocaleString('ru-RU');
					}
				}
			}
		}
	}
};
