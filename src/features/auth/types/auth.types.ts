export type SignInRequestBody = {
	account: string;
	password: string;
};

export type SignOutRequestBody = {
	userId: number;
};
