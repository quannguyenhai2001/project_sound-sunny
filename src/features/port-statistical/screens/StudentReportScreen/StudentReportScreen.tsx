import BackTitle from '@/components/atoms/BackTitle/BackTitle';
import { Box, Tab, Tabs } from '@mui/material';
import { useStyles } from './StudentReportScreen.styles';
import { useState } from 'react';
import StudentReportTab from '../../components/Tabs/StudentReportTab/StudentReportTab';
import Pagination from '@/components/atoms/Pagination/Pagination';

const StudentReportScreen = () => {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};
	const fakeData = [
		{
			name: 'Bùi Minh Huấn',
			email: 'W11230013@st.phenikaa-uni.edu.vn',
			phone: 'Đang hoạt động',
			gender: 'Nam',
			cardCode: 'f1b55555',
			uidCode: 'f1b55555',
			createAt: '02/05/2024'
		},
		{
			name: 'Bùi Minh Huấn',
			email: 'W11230013@st.phenikaa-uni.edu.vn',
			phone: 'Đang hoạt động',
			gender: 'Nam',
			cardCode: 'f1b55555',
			uidCode: 'f1b55555',
			createAt: '02/05/2024'
		},
		{
			name: 'Bùi Minh Huấn',
			email: 'W11230013@st.phenikaa-uni.edu.vn',
			phone: 'Đang hoạt động',
			gender: 'Nam',
			cardCode: 'f1b55555',
			uidCode: 'f1b55555',
			createAt: '02/05/2024'
		},
		{
			name: 'Bùi Minh Huấn',
			email: 'W11230013@st.phenikaa-uni.edu.vn',
			phone: 'Đang hoạt động',
			gender: 'Nam',
			cardCode: 'f1b55555',
			uidCode: 'f1b55555',
			createAt: '02/05/2024'
		},
		{
			name: 'Bùi Minh Huấn',
			email: 'W11230013@st.phenikaa-uni.edu.vn',
			phone: 'Đang hoạt động',
			gender: 'Nam',
			cardCode: 'f1b55555',
			uidCode: 'f1b55555',
			createAt: '02/05/2024'
		},
		{
			name: 'Bùi Minh Huấn',
			email: 'W11230013@st.phenikaa-uni.edu.vn',
			phone: 'Đang hoạt động',
			gender: 'Nam',
			cardCode: 'f1b55555',
			uidCode: 'f1b55555',
			createAt: '02/05/2024'
		},
		{
			name: 'Bùi Minh Huấn',
			email: 'W11230013@st.phenikaa-uni.edu.vn',
			phone: 'Đang hoạt động',
			gender: 'Nam',
			cardCode: 'f1b55555',
			uidCode: 'f1b55555',
			createAt: '02/05/2024'
		},
		{
			name: 'Bùi Minh Huấn',
			email: 'W11230013@st.phenikaa-uni.edu.vn',
			phone: 'Đang hoạt động',
			gender: 'Nam',
			cardCode: 'f1b55555',
			uidCode: 'f1b55555',
			createAt: '02/05/2024'
		},
		{
			name: 'Bùi Minh Huấn',
			email: 'W11230013@st.phenikaa-uni.edu.vn',
			phone: 'Đang hoạt động',
			gender: 'Nam',
			cardCode: 'f1b55555',
			uidCode: 'f1b55555',
			createAt: '02/05/2024'
		}
	];
	const columns = [
		{ name: 'name', title: 'Tên học sinh', align: 'left', width: '80px' },
		{ name: 'email', title: 'Email', align: 'left', width: '250px' },
		{
			name: 'phone',
			title: 'Số điện thoại',
			align: 'left',
			width: '120px'
		},
		{
			name: 'gender',
			title: 'GIới tính',
			align: 'left',
			width: '120px'
		},
		{
			name: 'cardCode',
			title: 'Mã thẻ',
			align: 'left',
			width: '120px'
		},
		{
			name: 'uidCode',
			title: 'Mã UID',
			align: 'left',
			width: '120px'
		},
		{
			name: 'createAt',
			title: 'Ngày tạo',
			align: 'left',
			width: '120px'
		}
	];
	return (
		<Box>
			<BackTitle title='BÁO CÁO HỌC SINH' />
			<Box>
				<Tabs className={classes.tabsRoot} onChange={handleTabChange} value={selectedTab}>
					<Tab className={selectedTab === 0 ? classes.selectedTab : classes.unselectedTab} label='Tất cả' />
					<Tab className={selectedTab === 1 ? classes.selectedTab : classes.unselectedTab} label='Vé ngày' />
					<Tab className={selectedTab === 2 ? classes.selectedTab : classes.unselectedTab} label='Vé tháng' />
					<Tab className={selectedTab === 3 ? classes.selectedTab : classes.unselectedTab} label='Nợ tiền' />
				</Tabs>
				<StudentReportTab columns={columns} data={fakeData} />
				<Pagination handleChangePage={() => {}} page={1} total={100} />
			</Box>
		</Box>
	);
};

export default StudentReportScreen;
