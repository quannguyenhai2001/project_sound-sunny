import ProtectedLayout from '@/components/layouts/ProtectedLayout/ProtectedLayout';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { RouteItemDef } from '@/types/routes.types';
import { FC, LazyExoticComponent, lazy } from 'react';

const HomeScreen = lazy(() => import('@/features/home/screens/HomeScreen/HomeScreen'));

const HOME_SCREEN: RouteItemDef = {
	label: 'Home',
	path: ROUTE_PATH.HOME.INDEX,
	layout: ProtectedLayout as FC,
	component: HomeScreen as LazyExoticComponent<FC>
};

const HOME_ROUTES = [HOME_SCREEN];

export default HOME_ROUTES;
