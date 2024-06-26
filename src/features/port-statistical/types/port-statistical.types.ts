export type StudentReport = {
	name: string;
	email: string;
	phone: string;
	gender: string;
	cardCode: string;
	uidCode: string;
	createAt: string;
};

export type Bills = StudentReport[];

export type BillRequestBody = {
	name: string;
	email: string;
	phone: string;
	gender: string;
	cardCode: string;
	uidCode: string;
	createAt: string;
};
