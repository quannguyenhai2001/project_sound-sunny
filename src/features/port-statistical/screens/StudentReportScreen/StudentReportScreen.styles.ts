import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	tabsRoot: {
		'&.MuiTabs-root': {
			'& .MuiButtonBase-root.MuiTab-root': {
				padding: '0.8rem',
				minWidth: 'unset',
				minHeight: 'unset'
			},
			'& .MuiTabs-indicator': {
				display: 'none'
			}
		}
	},
	selectedTab: {
		'&.MuiTab-root': {
			backgroundColor: '#E5E7EB',
			color: '#292D32',
			borderRadius: '0.4rem',
			border: 'none',
			textTransform: 'none',
			fontFamily: 'Inter-SemiBold'
		},

		'&.css-1iuf6ao-MuiButtonBase-root-MuiTab-root.Mui-selected': {
			color: '#292D32'
		},
		'&:focus': {
			outline: 'none'
		}
	},
	unselectedTab: {
		'&.MuiTab-root': {
			color: '#868686',
			borderRadius: '12px 12px 0 0',
			textTransform: 'none',
			fontFamily: 'Inter-SemiBold'
		},
		'&:focus': {
			outline: 'none'
		}
	}
}));
