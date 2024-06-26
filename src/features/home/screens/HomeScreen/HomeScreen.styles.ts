import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
	topBox: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		alignContent: 'center',
		marginBottom: '2.8rem'
	},
	datePickerRoot: {
		'& .MuiInputBase-root': {
			width: '27.2rem',
			height: '4rem',
			fontSize: '1.4rem'
		}
	}
}));
