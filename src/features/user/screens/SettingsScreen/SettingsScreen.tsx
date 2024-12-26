import HeaderTitle from '@/components/atoms/HeaderTitle/HeaderTitle';
import { Box, Card, Typography } from '@mui/material';
import UserInformation from '../../components/cards/UserInformation/UserInformation';
import DecentralizationInformation from '../../components/cards/DecentralizationInformation/DecentralizationInformation';

const SettingsScreen = () => {
	return (
		<Box>
			<HeaderTitle customStyles={{ margin: '0 0 2.8rem 0' }} title='CÀI ĐẶT TÀI KHOẢN' />
			<Card sx={{ padding: '2.4rem', mb: '3.6rem' }}>
				<Typography sx={{ marginBottom: '2.6rem' }} variant='title3'>
					Thông tin tài khoản
				</Typography>
				<UserInformation />
				<DecentralizationInformation />
			</Card>
		</Box>
	);
};

export default SettingsScreen;
