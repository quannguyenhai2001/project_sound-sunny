/// <reference types="vite-plugin-svgr/client" />
import { ROUTE_PATH } from '@/constants/route-path.constant';

import bill from '@/assets/icons/bill.svg?react';
import gate from '@/assets/icons/gate.svg?react';

export const sidebarRoutes = [
	{
		path: ROUTE_PATH.PORT_STATISTICAL.INDEX,
		name: 'Thống kê cổng',
		label: 'port statistical',
		icon: gate,
		children: [
			{
				path: ROUTE_PATH.PORT_STATISTICAL.TOTAL_REVENUE,
				name: 'Tổng doanh thu',
				label: 'total revenue',
				icon: null
			},
			{
				path: ROUTE_PATH.PORT_STATISTICAL.REVENUE_BY_DAY,
				name: 'Doanh thu theo ngày',
				label: 'revenue by day',
				icon: null
			},
			{
				path: ROUTE_PATH.PORT_STATISTICAL.STUDENT_REPORT,
				name: 'Báo cáo học sinh',
				label: 'student report',
				icon: null
			}
		]
	},
	{
		path: ROUTE_PATH.BILL.INDEX,
		name: 'Hoá đơn',
		label: 'Bills',
		icon: bill,
		children: null
	}
];
