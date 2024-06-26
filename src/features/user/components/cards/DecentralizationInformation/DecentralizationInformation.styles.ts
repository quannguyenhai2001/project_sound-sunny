import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	selectedTab: {
		'&.MuiTab-root': {
			borderRadius: '0.4rem',
			border: 'none',
			textTransform: 'none',
			fontFamily: 'Inter-SemiBold'
		},
		'& .MuiTabs-indicator': {
			display: 'none'
		},
		'&.MuiButtonBase-root.MuiTab-root.Mui-selected': {
			color: 'rgba(242, 101, 34, 1)'
		},
		'&:focus': {
			outline: 'none'
		}
	},
	unselectedTab: {
		'&.MuiTab-root': {
			color: 'rgba(41, 45, 50, 1)',
			borderRadius: '12px 12px 0 0',
			textTransform: 'none',
			fontFamily: 'Inter-SemiBold'
		},
		'&:focus': {
			outline: 'none'
		}
	}
}));
