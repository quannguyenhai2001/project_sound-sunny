import { FC, LazyExoticComponent } from 'react';

export type BreadCrumb = {
	title?: string;
	path?: string;
};

export type NavigateNonUsersRequests = {
	title?: string;
	path: string;
};

export type RouteItemDef = {
	label: string;
	path: string;
	component: LazyExoticComponent<FC>;
	layout: FC;
	children?: RouteChildItemDef[];
};

export type RouteParentItemDef = Omit<RouteItemDef, 'component'>;
export type RouteChildItemDef = Omit<RouteItemDef, 'layout'>;

export type RouteItem = RouteItemDef | RouteParentItemDef;
