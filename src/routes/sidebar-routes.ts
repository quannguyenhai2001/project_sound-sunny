/// <reference types="vite-plugin-svgr/client" />
// import bill from '@/assets/icons/bill.svg?react';
import gate from '@/assets/icons/gate.svg?react';
import { ROUTE_PATH } from '@/constants/route-path.constant';

export const sidebarRoutes = [
	{
		path: ROUTE_PATH.HOME.INDEX,
		name: 'Home',
		label: 'Home',
		icon: gate,
		children: null
	},
	{
		path: ROUTE_PATH.VISUAL.INDEX,
		name: 'Visual',
		label: 'Visual',
		icon: gate,
		children: null
	}
	// {
	// 	path: ROUTE_PATH.PORT_STATISTICAL.INDEX,
	// 	name: 'Music List',
	// 	label: 'port statistical',
	// 	icon: gate,
	// 	children: [
	// 		{
	// 			path: ROUTE_PATH.PORT_STATISTICAL.TOTAL_REVENUE,
	// 			name: 'Music Therapy',
	// 			label: 'total revenue',
	// 			icon: null
	// 		},
	// 		{
	// 			path: ROUTE_PATH.PORT_STATISTICAL.REVENUE_BY_DAY,
	// 			name: 'Feel Good',
	// 			label: 'revenue by day',
	// 			icon: null
	// 		},
	// 		{
	// 			path: ROUTE_PATH.PORT_STATISTICAL.STUDENT_REPORT,
	// 			name: 'At Home',
	// 			label: 'student report',
	// 			icon: null
	// 		}
	// 	]
	// },
	// {
	// 	path: ROUTE_PATH.BILL.INDEX,
	// 	name: 'Favorites',
	// 	label: 'Bills',
	// 	icon: bill,
	// 	children: null
	// }
];
