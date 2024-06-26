import { SxProps } from '@mui/system';
import { Box, useTheme } from '@mui/material';

const styles: SxProps = {
	position: 'absolute',
	top: '27px',
	borderRadius: '50%',
	height: '11px',
	width: '11px',
	animationDuration: '0.6s',
	animationTimingFunction: 'ease',
	animationDelay: '0s',
	animationIterationCount: 'infinite',
	animationDirection: 'normal',
	animationFillMode: 'none',
	animationPlayState: 'running'
};

const loaderEllipsis1 = {
	'0%': {
		transform: 'scale(0)'
	},
	'100%': {
		transform: 'scale(1)'
	}
};

const loaderEllipsis2 = {
	'0%': {
		transform: 'translate(0,0)'
	},
	'100%': {
		transform: 'translate(19px,0)'
	}
};

const loaderEllipsis3 = {
	'0%': {
		transform: 'scale(1)'
	},
	'100%': {
		transform: 'scale(0)'
	}
};

const LoadingIndicator = () => {
	const { palette } = useTheme();

	const primaryStyles: SxProps = { ...styles, background: palette.primary.main };

	return (
		<Box
			sx={{
				display: 'inline-block',
				position: 'relative',
				height: '64px',
				width: '64px'
			}}
		>
			<Box
				sx={{
					...primaryStyles,
					left: '6px',
					animation: 'loader--ellipsis1 .6s infinite',
					animationName: 'loader--ellipsis1',
					'@keyframes loader--ellipsis1': loaderEllipsis1
				}}
			/>
			<Box
				sx={{
					...primaryStyles,
					left: '6px',
					animation: 'loader--ellipsis2 .6s infinite',
					animationName: 'loader--ellipsis2',
					'@keyframes loader--ellipsis2': loaderEllipsis2
				}}
			/>
			<Box
				sx={{
					...primaryStyles,
					left: '26px',
					animation: 'loader--ellipsis2 .6s infinite',
					animationName: 'loader--ellipsis2',
					'@keyframes loader--ellipsis2': loaderEllipsis2
				}}
			/>
			<Box
				sx={{
					...styles,
					left: '45px',
					animation: 'loader--ellipsis3 .6s infinite',
					animationName: 'loader--ellipsis3',
					'@keyframes loader--ellipsis3': loaderEllipsis3
				}}
			/>
		</Box>
	);
};

export default LoadingIndicator;
