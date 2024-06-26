import Pagination from '@/components/atoms/Pagination/Pagination';
import DataTable from '@/components/organisms/DataTable/DataTable';
import HeaderTitle from '@/components/atoms/HeaderTitle/HeaderTitle';
import { DatePicker } from '@mui/x-date-pickers';
import { Box, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from './BillsScreen.styles';
import useGetBills from '../../hooks/useGetBills';
import useCommonStore from '@/stores/common.stores';

// const CustomTextField = styled(TextField)({
// 	'& .MuiInputBase-root': {
// 		width: '27.2rem',
// 		height: '4rem',
// 		fontSize: '1.4rem'
// 	}
// });
const BillsScreen = () => {
	// const [selectedDate, setSelectedDate] = useState(null);
	// const handleChange = (date) => {
	// 	setSelectedDate(date);
	// };

	const { bills } = useGetBills();
	const { testState } = useCommonStore();
	console.log(testState);
	console.log(bills);
	const classes = useStyles();
	const fakeData = [
		{
			timeIn: '12/05/2024 09:00:00',
			timeOut: '12/05/2024 09:00:00',
			money: '5.000 đ'
		},
		{
			timeIn: '12/05/2024 09:00:00',
			timeOut: '12/05/2024 09:00:00',
			money: '5.000 đ'
		},
		{
			timeIn: '12/05/2024 09:00:00',
			timeOut: '12/05/2024 09:00:00',
			money: '5.000 đ'
		},
		{
			timeIn: '12/05/2024 09:00:00',
			timeOut: '12/05/2024 09:00:00',
			money: '5.000 đ'
		},
		{
			timeIn: '12/05/2024 09:00:00',
			timeOut: '12/05/2024 09:00:00',
			money: '5.000 đ'
		},
		{
			timeIn: '12/05/2024 09:00:00',
			timeOut: '12/05/2024 09:00:00',
			money: '5.000 đ'
		},
		{
			timeIn: '12/05/2024 09:00:00',
			timeOut: '12/05/2024 09:00:00',
			money: '5.000 đ'
		}
	];
	const columns = [
		{ name: 'timeIn', title: 'Thời gian vào', align: 'left', width: '80px' },
		{ name: 'timeOut', title: 'Thời gian ra', align: 'left', width: '250px' },
		{
			name: 'money',
			title: 'Số tiền',
			align: 'left',
			width: '120px'
		},
		{
			name: 'action',
			title: 'Chức năng',
			align: 'left',
			width: '120px',
			render: () => (
				<Box>
					<Button variant='outlined' size='small'>
						In hoá đơn
					</Button>
				</Box>
			)
		}
	];

	return (
		<Box>
			<Box className={classes.topBox}>
				<HeaderTitle title='IN HOÁ ĐƠN' customStyles={{ margin: 0 }} />
				<DatePicker
					className={classes.datePickerRoot}
					// onChange={handleChange}
					// slots={{
					// 	textField: (params) => (
					// 		<CustomTextField
					// 			{...params}
					// 			value={selectedDate ? format(new Date(selectedDate), 'EEEE, MMMM d, yyyy') : ''}
					// 		/>
					// 	)
					// }}
				/>
			</Box>
			<Box>
				<TextField
					placeholder='Tìm kiếm'
					variant='outlined'
					sx={{ width: '40rem' }}
					size='small'
					autoFocus
					InputProps={{
						endAdornment: <SearchIcon />
					}}
				/>
			</Box>
			<Box sx={{ mt: '2.4rem' }}>
				<DataTable
					data={fakeData}
					columns={columns}
					options={{
						checkBox: {
							isShow: true
						}
					}}
					customTableStyles={{
						'&.MuiTableContainer-root': {
							borderRadius: '1.2rem'
						}
					}}
				/>
				<Pagination total={100} page={1} handleChangePage={() => {}} />
			</Box>
		</Box>
	);
};

export default BillsScreen;
