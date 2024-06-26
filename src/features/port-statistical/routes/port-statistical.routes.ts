import ProtectedLayout from '@/components/layouts/ProtectedLayout/ProtectedLayout';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { RouteChildItemDef, RouteParentItemDef } from '@/types/routes.types';
import { FC, LazyExoticComponent, lazy } from 'react';

const TotalRevenueScreen = lazy(
	() => import('@/features/port-statistical/screens/TotalRevenueScreen/TotalRevenueScreen')
);
const RevenueByDayScreen = lazy(
	() => import('@/features/port-statistical/screens/RevenueByDayScreen/RevenueByDayScreen')
);

const StudentReportScreen = lazy(
	() => import('@/features/port-statistical/screens/StudentReportScreen/StudentReportScreen')
);
const TOTAL_REVENUE_SCREEN: RouteChildItemDef = {
	label: 'Total Revenue',
	path: ROUTE_PATH.PORT_STATISTICAL.TOTAL_REVENUE,
	component: TotalRevenueScreen as LazyExoticComponent<FC>
};
const REVENUE_BY_DAY_SCREEN: RouteChildItemDef = {
	label: 'Revenue By Day',
	path: ROUTE_PATH.PORT_STATISTICAL.REVENUE_BY_DAY,
	component: RevenueByDayScreen as LazyExoticComponent<FC>
};
const STUDENT_REPORT_SCREEN: RouteChildItemDef = {
	label: 'Student Report',
	path: ROUTE_PATH.PORT_STATISTICAL.STUDENT_REPORT,
	component: StudentReportScreen as LazyExoticComponent<FC>
};

const PORT_STATISTICAL_SCREEN: RouteParentItemDef = {
	label: 'Setting',
	path: ROUTE_PATH.PORT_STATISTICAL.INDEX,
	layout: ProtectedLayout as FC,
	children: [TOTAL_REVENUE_SCREEN, REVENUE_BY_DAY_SCREEN, STUDENT_REPORT_SCREEN]
};

const PORT_STATISTICAL_ROUTES = [PORT_STATISTICAL_SCREEN];

export default PORT_STATISTICAL_ROUTES;
