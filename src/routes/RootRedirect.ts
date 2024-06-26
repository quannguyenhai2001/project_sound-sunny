import { ROUTE_PATH } from '@/constants/route-path.constant';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const RootRedirect = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate(ROUTE_PATH.PORT_STATISTICAL.TOTAL_REVENUE);
	}, [navigate]);

	return null;
};

export default RootRedirect;
