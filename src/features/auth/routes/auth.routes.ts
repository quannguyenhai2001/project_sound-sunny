import BlankLayout from '@/components/layouts/BlankLayout/BlankLayout';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { RouteItemDef } from '@/types/routes.types';
import { FC, LazyExoticComponent, lazy } from 'react';

const SignInScreen = lazy(() => import('@/features/auth/screens/SignInScreen/SignInScreen'));

const AUTH_SCREEN: RouteItemDef = {
	label: 'Sign In',
	path: ROUTE_PATH.AUTH.SIGN_IN,
	layout: BlankLayout as FC,
	component: SignInScreen as LazyExoticComponent<FC>
};

const AUTH_ROUTES = [AUTH_SCREEN];

export default AUTH_ROUTES;
