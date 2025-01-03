import { Box, Stack, useTheme } from '@mui/material';
import { BeatLoader } from 'react-spinners';
import logo from '@/assets/images/logo.png';

export default function LoadingLayout() {
	const theme = useTheme();
	return (
		<Box
			sx={{
				top: 0,
				left: 0,
				zIndex: 1000000,
				width: '100%',
				height: '100%',
				display: 'flex',
				position: 'absolute',
				alignItems: 'center',
				justifyContent: 'center',
				cursor: 'wait'
			}}
		>
			<Stack alignItems='center' flexDirection='column' spacing={2}>
				<img
					loading='eager'
					src={logo}
					style={{
						width: '60px',
						animationName: 'rotateY',
						animationDuration: '1.3s',
						animationIterationCount: 'infinite',
						position: 'relative'
					}}
				/>
				<BeatLoader color={theme.palette.secondary.main} loading={true} size={12} />
			</Stack>
		</Box>
	);
}
