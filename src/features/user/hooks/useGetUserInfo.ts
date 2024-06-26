import api from '@/api/api.config';
import { USER_ID } from '@/constants/api.constant';
import { API_URLS } from '@/services/api.services';
import { useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';
const useGetUserInfo = () => {
	const userId = Cookies.get(USER_ID);
	const {
		data: userInfo,
		isFetching: isGetUserInfoFetching,
		refetch: refetchGetUserInfo,
		error: errorUserInfo
	} = useQuery<any, any>({
		queryKey: ['useGetUserInfo', userId],
		queryFn: () => {
			return api(API_URLS.USER.GET_DETAIL({ userId }));
		},
		enabled: !!userId,
		staleTime: Infinity
	});
	if (!userId) {
		return {
			userInfo: null,
			isGetUserInfoFetching: false,
			refetchGetUserInfo: () => {},
			errorUserInfo: null,
			isSignIn: false
		};
	}
	return {
		userInfo,
		isGetUserInfoFetching,
		refetchGetUserInfo,
		errorUserInfo,
		isSignIn: !!userId
	};
};

export default useGetUserInfo;
