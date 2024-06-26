import { systemTimezone } from '@/utils/date-time';

export const API_STATUS_CODES = {
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NON_AUTHORITATIVE_INFO: 203,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	PAYMENT_REQUIRED: 402,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	METHOD_NOT_ALLOWED: 405,
	NOT_ACCEPTABLE: 406,
	EXPIRED_TOKEN: 408,
	UPGRADE_REQUIRED: 426,
	INTERNAL_SERVER_ERROR: 500,
	SERVICE_TEMPORARILY_UNAVAILABLE: 503
};

export const ACCESS_TOKEN_KEY = 'access_token';
export const REFRESH_TOKEN_KEY = 'refresh_token';
export const USER_ID = 'user_id';

export const REQUEST_HEADERS = {
	DEFAULT_HEADER: {
		'Content-Type': 'application/json; charset=UTF-8',
		'X-Timezone': systemTimezone
	},
	HEADER: () => ({
		'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		'Cache-Control': 'no-store, no-cache',
		'X-Timezone': systemTimezone
	}),
	JSON_HEADER: () => ({
		'Content-Type': 'application/json; charset=UTF-8',
		'X-Timezone': systemTimezone
	}),
	FILE_HEADER: () => ({
		'Content-Type': 'multipart/form-data',
		'X-Timezone': systemTimezone
	}),
	SCM_HEADER: () => ({
		'Content-Type': 'application/json; charset=UTF-8',
		'X-Timezone': systemTimezone
	})
};
