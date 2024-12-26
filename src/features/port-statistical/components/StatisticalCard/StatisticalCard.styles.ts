import theme from '@/themes/common.d';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	cardContentRoot: {
		'&.MuiCardContent-root:last-child': {
			paddingBottom: '1.6rem'
		}
	},
	boxContent: {
		display: 'flex',
		alignItems: 'flex-start',
		gap: '1.6rem'
	},
	icon: {
		display: 'flex',
		alignItems: 'center',
		'& > .MuiBox-root': {
			width: '6.4rem',
			height: '6.4rem',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: '50%'
		},
		'& .MuiSvgIcon-root': {
			fontSize: '3.6rem'
		}
	},
	percent: {
		display: 'flex',
		alignItems: 'center',
		alignSelf: 'flex-end',
		justifyContent: 'flex-end',
		color: theme.palette.semantic.green
	}
}));
