import { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingIndicator from '@/components/atoms/Loading';
import { ROUTE_LIST } from './router-path';
import { isRouteItemDef } from '@/helpers/types.helpers';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				{ROUTE_LIST.map((route) => {
					if (route.children) {
						return (
							<Route key={route.label} path={route.path} element={<route.layout />}>
								{route.children.map((item) => {
									return (
										<Route
											key={item.label}
											path={item.path}
											element={
												<Suspense fallback={<LoadingIndicator />}>
													<item.component />
												</Suspense>
											}
										/>
									);
								})}
							</Route>
						);
					}
					return (
						<Route key={route.label} element={<route.layout />}>
							<Route
								path={route.path}
								element={
									isRouteItemDef(route) ? (
										<Suspense fallback={<LoadingIndicator />}>
											<route.component />
										</Suspense>
									) : null
								}
							/>
						</Route>
					);
				})}
			</Routes>
		</Router>
	);
};

export default AppRoutes;
