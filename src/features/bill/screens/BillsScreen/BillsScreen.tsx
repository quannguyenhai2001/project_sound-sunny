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
					<Button size='small' variant='outlined'>
						In hoá đơn
					</Button>
				</Box>
			)
		}
	];

	return (
		<Box>
			<Box className={classes.topBox}>
				<HeaderTitle customStyles={{ margin: 0 }} title='IN HOÁ ĐƠN' />
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
					InputProps={{
						endAdornment: <SearchIcon />
					}}
					placeholder='Tìm kiếm'
					size='small'
					sx={{ width: '40rem' }}
					variant='outlined'
					autoFocus
				/>
			</Box>
			<Box sx={{ mt: '2.4rem' }}>
				<DataTable
					columns={columns}
					customTableStyles={{
						'&.MuiTableContainer-root': {
							borderRadius: '1.2rem'
						}
					}}
					data={fakeData}
					options={{
						checkBox: {
							isShow: true
						}
					}}
				/>
				<Pagination handleChangePage={() => {}} page={1} total={100} />
			</Box>
		</Box>
	);
};

export default BillsScreen;
