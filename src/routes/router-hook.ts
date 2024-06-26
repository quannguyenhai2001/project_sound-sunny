import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_LIST as dRoutes } from './router-path';
import { sidebarRoutes } from './sidebar-routes';

const useRouter = () => {
	const navigate = useNavigate();
	const [routes, setRoutes] = useState<any[]>([]);
	const [sidebar, setSideBar] = useState<any[]>();
	const [activeRoute, setActiveRoute] = useState<any>();
	useEffect(() => {
		setSideBar(sidebarRoutes);
		setRoutes(dRoutes);
	}, []);

	const isAllowRoute = (path: string) => {
		if (path === '') {
			return false;
		}
		return true;
	};

	return {
		routes,
		sidebar,
		isAllowRoute,
		navigate,
		activeRoute,
		setActiveRoute
	};
};

export default useRouter;
