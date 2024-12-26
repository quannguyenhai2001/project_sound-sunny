import BlankLayout from '@/components/layouts/BlankLayout/BlankLayout';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { RouteChildItemDef, RouteParentItemDef } from '@/types/routes.types';
import { FC, LazyExoticComponent, lazy } from 'react';

const ZoomParallaxEffectScreen = lazy(
	() => import('@/features/gsap/screens/ZoomParallaxEffectScreen/ZoomParallaxEffectScreen')
);

const ZOOM_PARALLAX_EFFECT_SCREEN: RouteChildItemDef = {
	label: 'gsap',
	path: ROUTE_PATH.GSAP.ZOOM_PARALLAX_EFFECT,
	component: ZoomParallaxEffectScreen as LazyExoticComponent<FC>
};

const GSAP_SCREEN: RouteParentItemDef = {
	label: 'Setting',
	path: ROUTE_PATH.GSAP.INDEX,
	layout: BlankLayout as FC,
	children: [ZOOM_PARALLAX_EFFECT_SCREEN]
};
const GSAP_ROUTES = [GSAP_SCREEN];

export default GSAP_ROUTES;
