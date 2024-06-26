import { ROUTE_PATH } from '@/constants/route-path.constant';

import { FC, LazyExoticComponent, lazy } from 'react';
import { RouteItem } from '@/types/routes.types';
import USER_ROUTES from '@/features/user/routes/user.routes';
import BILL_ROUTES from '@/features/bill/routes/bill.routes';
import PORT_STATISTICAL_ROUTES from '@/features/port-statistical/routes/port-statistical.routes';
import BlankLayout from '@/components/layouts/BlankLayout/BlankLayout';
import AUTH_ROUTES from '@/features/auth/routes/auth.routes';
import ProtectedLayout from '@/components/layouts/ProtectedLayout/ProtectedLayout';

// const RootRedirect = lazy(() => import('@/routes/RootRedirect'));
const HomeScreen = lazy(() => import('@/features/home/screens/HomeScreen/HomeScreen'));
const NotFoundPage = lazy(() => import('@/components/organisms/NotFoundPage/NotFoundPage'));

export const ROUTE_LIST: RouteItem[] = [
	...AUTH_ROUTES,
	...PORT_STATISTICAL_ROUTES,
	...BILL_ROUTES,
	...USER_ROUTES,
	{
		label: 'Root',
		path: ROUTE_PATH.ROOT.INDEX,
		layout: ProtectedLayout as FC,
		component: HomeScreen as LazyExoticComponent<FC>
	},
	{
		label: 'Not Found',
		path: ROUTE_PATH.NOTFOUND.INDEX,
		layout: BlankLayout as FC,
		component: NotFoundPage as LazyExoticComponent<FC>
	}
];
