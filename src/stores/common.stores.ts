import { commonStore } from '@/types/store.types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useCommonStore = create<commonStore>()(
	persist(
		(set): commonStore => ({
			testState: 'test',
			setTestState: (testState: string) =>
				set(() => ({
					testState
				})),
			clearTestState: () => set({ testState: '' })
		}),
		{
			name: 'user-storage',
			getStorage: () => localStorage
		}
	)
);

export default useCommonStore;
