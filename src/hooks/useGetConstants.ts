import api from '@/api/api.config';
import { USER_ID } from '@/constants/api.constant';
import { API_URLS } from '@/services/api.services';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

const useGetConstants = () => {
	const userId = Cookies.get(USER_ID);
	const {
		data: masterData,
		isFetching: isGetConstantsFetching,
		refetch: refetchGetConstants,
		error: errorGetConstants
	} = useQuery<any, any>({
		queryKey: ['useGetConstants'],
		queryFn: () => {
			return api(API_URLS.CONSTANT.GET_ALL());
		},
		staleTime: Infinity,
		enabled: !!userId
	});
	return {
		masterData,
		isGetConstantsFetching,
		refetchGetConstants,
		errorGetConstants
	};
};

export default useGetConstants;
