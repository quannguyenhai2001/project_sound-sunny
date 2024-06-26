import { RouteItem, RouteItemDef } from '@/types/routes.types';
export function isRouteItemDef(route: RouteItem): route is RouteItemDef {
	return 'component' in route;
}
