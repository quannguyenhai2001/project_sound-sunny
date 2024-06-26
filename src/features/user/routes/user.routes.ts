import ProtectedLayout from '@/components/layouts/ProtectedLayout/ProtectedLayout';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { RouteItemDef } from '@/types/routes.types';
import { FC, LazyExoticComponent, lazy } from 'react';

const SettingsScreen = lazy(() => import('@/features/user/screens/SettingsScreen/SettingsScreen'));

const SETTING_SCREEN: RouteItemDef = {
	label: 'Setting',
	path: ROUTE_PATH.SETTING.INDEX,
	layout: ProtectedLayout as FC,
	component: SettingsScreen as LazyExoticComponent<FC>
};

const USER_ROUTES = [SETTING_SCREEN];

export default USER_ROUTES;
