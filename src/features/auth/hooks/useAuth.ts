import api from '@/api/api.config';
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY, USER_ID } from '@/constants/api.constant';
import { SignInRequestBody } from '@/features/auth/types/auth.types';
import { API_URLS } from '@/services/api.services';
import { DataError } from '@/types/api.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
const useAuth = () => {
	const queryClient = useQueryClient();
	const { mutateAsync: signIn, isPending: isPendingSignIn } = useMutation<unknown, DataError, SignInRequestBody>({
		mutationFn: (data) => {
			return api(API_URLS.AUTH.SIGN_IN(data));
		},
		onSuccess: (loginResponse: any) => {
			if (loginResponse) {
				Cookies.set(ACCESS_TOKEN_KEY, 'demo_token_343493943493438943848348348');
				Cookies.set(REFRESH_TOKEN_KEY, 'demo_refresh_token_45454545454545554545');
				Cookies.set(USER_ID, '20');
				queryClient.invalidateQueries({
					queryKey: ['useGetUserInfo', '20']
				});
				queryClient.invalidateQueries({
					queryKey: ['useGetConstants']
				});
			}
		}
	});
	const { mutateAsync: signOut, isPending: isPendingSignOut } = useMutation({
		mutationFn: (userId: number) => {
			return api(API_URLS.AUTH.SIGN_OUT({ userId }));
		},
		onSuccess: () => {
			Cookies.remove(ACCESS_TOKEN_KEY);
			Cookies.remove(REFRESH_TOKEN_KEY);
			Cookies.remove(USER_ID);
		}
	});
	return {
		signIn,
		isPendingSignIn,
		signOut,
		isPendingSignOut
	};
};

export default useAuth;
