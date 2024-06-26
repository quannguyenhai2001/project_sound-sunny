import theme from '@/themes/theme.main.ts';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	listItemRoot: {
		'&.MuiButtonBase-root': {
			'&.MuiListItemButton-root': {
				paddingRight: 0,
				'&:hover': {
					backgroundColor: 'transparent'
				}
			},
			'&.MuiListItemButton-root:hover': {
				borderRadius: '0.8rem'
			},
			'& .MuiListItemIcon-root': {
				minWidth: 0,
				margin: '0px 1.4rem 0px 0',
				color: '#727272'
			}
		}
	},
	itemTextRoot: {
		'& .MuiTypography-root': {
			fontSize: 14,
			color: theme.palette.primary.main,
			fontFamily: 'Inter'
		}
	}
}));
