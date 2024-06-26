import { REQUEST_HEADERS } from '@/constants/api.constant';
import { SignInRequestBody, SignOutRequestBody } from '@/features/auth/types/auth.types';
import { UserInformationRequestBody } from '@/features/user/types/user.types';
import { AxiosConfigRequest } from '@/types/axios.types';

export const API_URLS = {
	CONSTANT: {
		GET_ALL: (): AxiosConfigRequest => ({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: 'GET',
			headers: REQUEST_HEADERS.HEADER()
		})
	},
	AUTH: {
		SIGN_IN: (data: SignInRequestBody): AxiosConfigRequest<SignInRequestBody> => ({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: 'POST',
			headers: REQUEST_HEADERS.HEADER(),
			data: data
		}),
		SIGN_OUT: ({ userId }: SignOutRequestBody): AxiosConfigRequest<SignOutRequestBody> => ({
			// url: `https://jsonplaceholder.typicode.com/posts/${id}`,
			url: `https://jsonplaceholder.typicode.com/posts/${userId}`,
			method: 'POST',
			headers: REQUEST_HEADERS.HEADER()
		})
	},
	USER: {
		GET_DETAIL: ({ userId }): AxiosConfigRequest => ({
			url: `https://jsonplaceholder.typicode.com/posts/${userId}`,
			method: 'GET',
			headers: REQUEST_HEADERS.HEADER()
		}),
		UPDATE_USER: ({ data, userId }): AxiosConfigRequest<UserInformationRequestBody> => ({
			url: `https://jsonplaceholder.typicode.com/podssts/${userId}`,
			method: 'PATCH',
			headers: REQUEST_HEADERS.FILE_HEADER(),
			data: data
		})
	},
	BILL: {
		GET_ALL: (): AxiosConfigRequest => ({
			url: 'https://jsonplaceholder.typicode.com/posts',
			method: 'GET',
			headers: REQUEST_HEADERS.HEADER()
		})
	}
};
