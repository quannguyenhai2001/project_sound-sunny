import { ACCESS_TOKEN_KEY, API_STATUS_CODES, REFRESH_TOKEN_KEY } from '@/constants/api.constant';

import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import Cookies from 'js-cookie';

/* Setup an API instance */
const api = axios.create({
	withCredentials: true,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': '*'
	}
});
/**
 * Add authorization headers to API calls
 * @param {InternalAxiosRequestConfig} requestConfig
 */
const authInterceptor = (requestConfig: InternalAxiosRequestConfig) => {
	const access_token = Cookies.get(ACCESS_TOKEN_KEY);
	const refresh_token = Cookies.get(REFRESH_TOKEN_KEY);

	if (access_token && refresh_token) {
		requestConfig.headers['Cookie'] = `access_token=` + access_token + `; refresh_token=` + refresh_token;
	}

	return requestConfig;
};

const errorRequestInterceptor = (error: AxiosError) => {
	Promise.reject(error);
};
/** Add responseInterceptor */
const responseInterceptor = (response: AxiosResponse) => {
	if (response.config) {
		return response.data;
	}
	return response;
};

/** Add errorInterceptor */
const errorInterceptor = async (axiosError: AxiosError) => {
	if (axiosError?.response?.status) {
		switch (axiosError.response?.status) {
			case API_STATUS_CODES.UNAUTHORIZED:
				break;
			case API_STATUS_CODES.FORBIDDEN:
				// window.location.assign('/');
				break;
			case API_STATUS_CODES.NOT_FOUND:
				// throw axiosError?.response;
				break;
			case 429:
				break;
			case 500:
				break;
			default:
				break;
		}
	}
	throw axiosError?.response;
};
const refreshAuthLogic = () => {
	const access_token = Cookies.get(ACCESS_TOKEN_KEY);
	return new Promise((resolve) => {
		if (access_token) {
			resolve(access_token);
		}
	});
};

/* Add refresh token interceptor */
createAuthRefreshInterceptor(api, refreshAuthLogic, {
	statusCodes: [API_STATUS_CODES.EXPIRED_TOKEN]
});

/* Add interceptor */
api.interceptors.request.use(authInterceptor, errorRequestInterceptor);
api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;
