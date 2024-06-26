import ProtectedLayout from '@/components/layouts/ProtectedLayout/ProtectedLayout';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { RouteItemDef } from '@/types/routes.types';
import { FC, LazyExoticComponent, lazy } from 'react';

const BillsScreen = lazy(() => import('@/features/bill/screens/BillsScreen/BillsScreen'));

const BILLS_SCREEN: RouteItemDef = {
	label: 'Setting',
	path: ROUTE_PATH.BILL.INDEX,
	layout: ProtectedLayout as FC,
	component: BillsScreen as LazyExoticComponent<FC>
};

const BILL_ROUTES = [BILLS_SCREEN];

export default BILL_ROUTES;
