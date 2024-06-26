import i18n from '@/locales/i18n';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
	const { t } = useTranslation();
	const changeLanguageToEnglish = () => {
		i18n.changeLanguage('en');
	};
	return (
		<Box>
			<button onClick={changeLanguageToEnglish}>Change to English</button>
			<Typography>{t('musics')}</Typography>
			<Typography>{t('component:button.add')}</Typography>
		</Box>
	);
};

export default HomeScreen;
