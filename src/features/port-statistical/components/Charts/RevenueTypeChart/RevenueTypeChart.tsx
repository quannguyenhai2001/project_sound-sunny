import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Box, Typography, Grid, Container } from '@mui/material';

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
	aspectRatio: 1,
	responsive: true,
	cutout: '73%',
	plugins: {
		legend: {
			display: false
		},
		tooltip: {
			callbacks: {
				label: (tooltipItem: any) => `${((tooltipItem.parsed / 5) * 100).toFixed(2)}%`
			}
		}
	}
};

const data = {
	labels: [
		'Tổng doanh thu',
		'Tổng doanh thu tiền mặt',
		'Tổng doanh thu chuyển khoản',
		'Tổng doanh thu các máy tính tiền',
		'Máy thanh toán tiền mặt 1',
		'Máy thanh toán tiền mặt 2',
		'Máy thanh toán tiền mặt 3'
	],

	datasets: [
		{
			data: [25, 25, 25, 25],
			backgroundColor: [
				'#15D5FF',
				'#FF8946',
				'#4DFFB4',
				'#FF6060',
				'rgba(153, 102, 255, 0.2)',
				'rgba(255, 159, 64, 0.2)',
				'#FF6060'
			],
			borderColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
			borderWidth: 1
		}
	]
};

export default function RevenueTypeChart() {
	return (
		<Box>
			<Box sx={{ display: 'grid', placeItems: 'center', position: 'relative', mb: '2.4rem' }}>
				<Box style={{ width: '30.8rem', height: '30.8rem' }}>
					<Box
						sx={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							textAlign: 'center'
						}}
					>
						<Typography variant='body2' sx={{ mb: '1.4rem' }}>
							{' '}
							Tổng doanh thu
						</Typography>
						<Box>
							<Typography variant='title2'>3.215.545.000 đ</Typography>
						</Box>
					</Box>
					<Doughnut data={data} options={options} width={308} height={308} title='revenue type chart' />
				</Box>
			</Box>
			<Box
				sx={{
					maxHeight: '16rem',
					overflowY: 'auto',
					'&::-webkit-scrollbar-thumb': {
						backgroundColor: '#ddeefc',
						paddingLeft: '10px'
					},
					'&::-webkit-scrollbar': {
						marginRight: '10px',
						width: '6px',
						backgroundColor: '#ee2424',
						color: '#ee2424'
					}
				}}
			>
				<Container maxWidth='lg' sx={{ mt: '0.4rem' }}>
					<Grid container alignItems='center' rowSpacing='2rem' columnSpacing='1.6rem'>
						{data.labels.map((label, index) => (
							<Grid item md={6} key={label}>
								<Box sx={{ display: 'flex', alignItems: 'center' }}>
									<span
										style={{
											width: '4rem',
											height: '1.6rem',
											borderRadius: '0.4rem',
											marginRight: '5px',
											backgroundColor: data.datasets[0].backgroundColor[index]
										}}
									/>
									<Typography variant='body4'>{label}</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</Box>
	);
}
