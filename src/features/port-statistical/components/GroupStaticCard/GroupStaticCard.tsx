import { Grid } from '@mui/material';
import TotalRevenue from '@/assets/images/total-revenue.png';
import CashRevenue from '@/assets/images/cash-revenue.png';
import TransferRevenue from '@/assets/images/transfer-revenue.png';

import StatisticalCard from '../StatisticalCard/StatisticalCard';
const GroupStaticCard = () => {
	const data = [
		{
			title: 'Tổng doanh thu',
			value: '3.215.545.000 đ',
			icon: TotalRevenue
		},
		{
			title: 'Doanh thu chuyển khoản',
			value: '3.215.545.000 đ',
			icon: CashRevenue
		},
		{
			title: 'Doanh thu tiền mặt',
			icon: TransferRevenue,
			value: '3.215.545.000 đ'
		}
	];
	return (
		<Grid container spacing={3}>
			{data.map((item, index) => (
				<Grid item md={4} key={index}>
					<StatisticalCard data={item} />
				</Grid>
			))}
		</Grid>
	);
};

export default GroupStaticCard;
