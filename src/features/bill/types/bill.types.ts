export type Bill = {
	timeIn: string;
	timeOut: string;
	money: string;
};

export type Bills = Bill[];

export type BillRequestBody = {
	timeIn: string;
	timeOut: string;
	money: string;
};
