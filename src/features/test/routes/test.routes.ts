import BlankLayout from '@/components/layouts/BlankLayout/BlankLayout';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { RouteItemDef } from '@/types/routes.types';
import { FC, LazyExoticComponent, lazy } from 'react';

const TestScreen = lazy(() => import('@/features/test/screens/TestScreen/TestScreen'));

const TEST_SCREEN: RouteItemDef = {
	label: 'Test',
	path: ROUTE_PATH.TEST.INDEX,
	layout: BlankLayout as FC,
	component: TestScreen as LazyExoticComponent<FC>
};

const TEST_ROUTES = [TEST_SCREEN];

export default TEST_ROUTES;
