import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
	const { t } = useTranslation();

	return (
		<Box>
			<Typography>{t('musics')}</Typography>
			<Typography>{t('component:button.add')}</Typography>
		</Box>
	);
};

export default HomeScreen;
