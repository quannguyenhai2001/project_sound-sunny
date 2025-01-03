import theme from '@/themes/common.d';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	typo: {
		'&.MuiTypography-root': {
			color: theme.palette.primary.black
		}
	},

	MuiButtonBase: {
		'&.MuiButtonBase-root': {
			padding: 0
		}
	}
}));
