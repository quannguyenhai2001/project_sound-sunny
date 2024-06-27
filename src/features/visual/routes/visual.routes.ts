import ProtectedLayout from '@/components/layouts/ProtectedLayout/ProtectedLayout';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { RouteItemDef } from '@/types/routes.types';
import { FC, LazyExoticComponent, lazy } from 'react';

const VisualScreen = lazy(() => import('@/features/visual/screens/VisualScreen/VisualScreen'));

const VISUAL_SCREEN: RouteItemDef = {
	label: 'visual',
	path: ROUTE_PATH.VISUAL.INDEX,
	layout: ProtectedLayout as FC,
	component: VisualScreen as LazyExoticComponent<FC>
};

const VISUAL_ROUTES = [VISUAL_SCREEN];

export default VISUAL_ROUTES;
