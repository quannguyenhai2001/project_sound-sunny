import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { commonStyles } from '@/styles/common.styles';
const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];
const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(0.5),
	textAlign: 'center',
	color: theme.palette.text.secondary
}));
const CSSFeaturesSection = () => {
	return (
		<Box>
			<Typography sx={{ fontWeight: 'bold', ...commonStyles.linearGradientText() }} variant='h3'>
				Lorem ipsum
			</Typography>
			<Box sx={{ width: '100%', minHeight: 393 }}>
				<Masonry columns={4} spacing={2}>
					{heights.map((height, index) => (
						<Item key={index} sx={{ height, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
							text
						</Item>
					))}
				</Masonry>
			</Box>
		</Box>
	);
};

export default CSSFeaturesSection;
