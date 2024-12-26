import LoadingIndicator from '@/components/atoms/Loading';
import { isRouteItemDef } from '@/helpers/types.helpers';
import { Suspense } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { ROUTE_LIST } from './router-path';

const AppRoutes = () => (
	<Router>
		<Routes>
			{ROUTE_LIST.map((route) => (
				<Route key={route.label} element={<route.layout />} path={route.path}>
					{route.children?.map((item) => (
						<Route
							key={item.label}
							element={
								<Suspense fallback={<LoadingIndicator />}>
									<item.component />
								</Suspense>
							}
							path={item.path}
						/>
					)) || (
						<Route
							element={
								isRouteItemDef(route) ? (
									<Suspense fallback={<LoadingIndicator />}>
										<route.component />
									</Suspense>
								) : null
							}
							path={route.path}
						/>
					)}
				</Route>
			))}
		</Routes>
	</Router>
);

export default AppRoutes;
