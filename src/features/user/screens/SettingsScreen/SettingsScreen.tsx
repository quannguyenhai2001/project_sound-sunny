import HeaderTitle from '@/components/atoms/HeaderTitle/HeaderTitle';
import { Box, Card, Typography } from '@mui/material';
import UserInformation from '../../components/cards/UserInformation/UserInformation';
import DecentralizationInformation from '../../components/cards/DecentralizationInformation/DecentralizationInformation';

const SettingsScreen = () => {
	return (
		<Box>
			<HeaderTitle title='CÀI ĐẶT TÀI KHOẢN' customStyles={{ margin: '0 0 2.8rem 0' }} />
			<Card sx={{ padding: '2.4rem', mb: '3.6rem' }}>
				<Typography variant='title3' sx={{ marginBottom: '2.6rem' }}>
					Thông tin tài khoản
				</Typography>
				<UserInformation />
				<DecentralizationInformation />
			</Card>
		</Box>
	);
};

export default SettingsScreen;
