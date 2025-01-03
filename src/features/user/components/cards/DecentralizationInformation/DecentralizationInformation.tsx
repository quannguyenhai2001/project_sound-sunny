import { Box, Button, Tab, Tabs, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useStyles } from './DecentralizationInformation.styles';
import Pagination from '@/components/atoms/Pagination/Pagination';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RolesTab from '../../Tabs/RolesTab/RolesTab';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
const DecentralizationInformation = () => {
	const classes = useStyles();
	const [selectedTab, setSelectedTab] = useState(0);

	const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
		setSelectedTab(newValue);
	};
	const fakeData = [
		{
			roleName: 'Admin_Trung tâm dịch vụ',
			roleCode: 'ADMIN_TTDV',
			createAt: '23/08/2024'
		},
		{
			roleName: 'Admin_Trung tâm dịch vụ',
			roleCode: 'ADMIN_TTDV',
			createAt: '23/08/2024'
		},
		{
			roleName: 'Admin_Trung tâm dịch vụ',
			roleCode: 'ADMIN_TTDV',
			createAt: '23/08/2024'
		},
		{
			roleName: 'Admin_Trung tâm dịch vụ',
			roleCode: 'ADMIN_TTDV',
			createAt: '23/08/2024'
		}
	];
	const columns = [
		{ name: 'roleName', title: 'Tên vai trò', align: 'left', width: '80px' },
		{ name: 'roleCode', title: 'Mã vai trò', align: 'left', width: '250px' },
		{
			name: 'createAt',
			title: 'Ngày tạo',
			align: 'left',
			width: '120px'
		},
		{
			name: 'action',
			title: 'Thao tác',
			align: 'center',
			width: '120px',
			render: () => {
				return (
					<Box sx={{ display: 'flex', gap: '1.6rem', alignItems: 'center', justifyContent: 'center' }}>
						<RemoveRedEyeOutlinedIcon sx={{ color: 'rgba(43, 179, 253, 1)', cursor: 'pointer' }} />
						<BorderColorOutlinedIcon sx={{ color: 'rgba(242, 101, 38, 1)', cursor: 'pointer' }} />
						<DeleteOutlineOutlinedIcon sx={{ color: 'rgba(250, 82, 82, 1)', cursor: 'pointer' }} />
					</Box>
				);
			}
		}
	];
	return (
		<Box
			sx={{
				padding: '2.4rem',
				borderRadius: '1.6rem',
				border: '1px solid rgba(228, 228, 228, 1)',
				marginBottom: '2.4rem'
			}}
		>
			<Typography sx={{ display: 'block', marginBottom: '2.4rem' }} variant='title5'>
				Thông tin phân quyền
			</Typography>
			<Box>
				<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.4rem' }}>
					<Tabs
						onChange={handleTabChange}
						sx={{
							'&.MuiTabs-root': {
								'& .MuiButtonBase-root.MuiTab-root': {
									padding: '0.8rem',
									minWidth: 'unset',
									minHeight: 'unset'
								},
								'& .MuiTabs-indicator': {
									border: '1px solid rgba(242, 101, 34, 1)'
								}
							}
						}}
						value={selectedTab}
					>
						<Tab
							className={selectedTab === 0 ? classes.selectedTab : classes.unselectedTab}
							label='Danh sách vai trò'
						/>
						<Tab
							className={selectedTab === 1 ? classes.selectedTab : classes.unselectedTab}
							label='Danh sách thao tác'
						/>
						<Tab
							className={selectedTab === 2 ? classes.selectedTab : classes.unselectedTab}
							label='Danh sách người dùng'
						/>
					</Tabs>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '1.6rem' }}>
						<TextField
							InputProps={{
								startAdornment: <SearchIcon sx={{ marginRight: '0.8rem' }} />
							}}
							placeholder='Tìm kiếm'
							variant='standard'
						/>
						<Button
							startIcon={<AddIcon />}
							sx={{
								borderRadius: '2.4rem',
								display: 'flex',
								alignItems: 'normal'
							}}
							variant='outlined'
						>
							Thêm mới
						</Button>
					</Box>
				</Box>
				<RolesTab columns={columns} data={fakeData} />
				<Pagination
					customStyles={{ position: 'unset', mt: '2.4rem', display: 'flex', justifyContent: 'flex-end' }}
					handleChangePage={() => {}}
					page={2}
					total={100}
				/>
			</Box>
		</Box>
	);
};

export default DecentralizationInformation;
