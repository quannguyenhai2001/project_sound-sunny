import { Box, Typography } from '@mui/material';

interface Props {
	title: string;
	customStyles?: Record<any, any>;
	variant?:
		| 'heading1'
		| 'heading2'
		| 'heading3'
		| 'title1'
		| 'title2'
		| 'title3'
		| 'title4'
		| 'body1'
		| 'body2'
		| 'body3'
		| 'body4'
		| 'body5'
		| 'subbody1'
		| 'subbody2';
}

const HeaderTitle = ({ title, customStyles, variant = 'heading3' }: Props) => {
	return (
		<Box
			sx={{
				marginBottom: '2.8rem',
				'& .MuiTypography-root': {
					color: '#223671'
				},
				...customStyles
			}}
		>
			<Typography variant={variant}>{title}</Typography>
		</Box>
	);
};

export default HeaderTitle;
