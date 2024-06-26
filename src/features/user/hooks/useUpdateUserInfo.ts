import api from '@/api/api.config';
import { API_URLS } from '@/services/api.services';
import { DataError } from '@/types/api.types';
import { useMutation } from '@tanstack/react-query';
import { UserInformationRequestBody } from '../types/user.types';

const useUpdateUserInfo = (userId: number) => {
	const {
		mutateAsync: updateUser,
		isPending: isPendingUpdateUser,
		status
	} = useMutation<unknown, DataError, UserInformationRequestBody>({
		mutationFn: (data) => {
			return api(API_URLS.USER.UPDATE_USER({ data, userId }));
		}
	});
	return {
		updateUser,
		isPendingUpdateUser,
		status
	};
};

export default useUpdateUserInfo;
