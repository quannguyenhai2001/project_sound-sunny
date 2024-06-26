export type commonState = {
	testState: string;
};
export type commonActions = {
	setTestState: (testState: string) => void;
	clearTestState: () => void;
};
export type commonStore = commonState & commonActions;
