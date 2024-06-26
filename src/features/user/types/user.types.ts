export type UserInformation = {
	userName: string;
	phone: string;
	workLocation: string;
	email: string;
	role: string;
};

export type UserInformationRequestBody = {
	userName?: string;
	phone?: string;
	workLocation?: string;
	email?: string;
	role?: string;
};
