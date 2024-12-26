import api from '@/api/api.config';
import { API_URLS } from '@/services/api.services';
import { useQuery } from '@tanstack/react-query';

const useGetBills = () => {
	const {
		data: bills,
		isFetching: isGetBillsFetching,
		refetch: refetchGetBills,
		error: errorGetBills
	} = useQuery<any, any>({
		queryKey: ['useGetBills'],
		queryFn: () => {
			return api(API_URLS.BILL.GET_ALL());
		}
	});
	return {
		bills,
		isGetBillsFetching,
		refetchGetBills,
		errorGetBills
	};
};

export default useGetBills;
