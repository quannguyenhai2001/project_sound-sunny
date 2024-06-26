import { useRef } from 'react';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
interface Props {
	title: string;
	customStyles?: Record<any, any>;
}

const BackTitle = ({ title, customStyles: backTitleStyles }: Props) => {
	const iconRef = useRef(null);
	const navigate = useNavigate();
	const handleMouseEnter = () => {
		gsap.to(iconRef.current, { x: -7, duration: 0.3 });
	};

	const handleMouseLeave = () => {
		gsap.to(iconRef.current, { x: 0, duration: 0.3 });
	};
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: '3.2rem', fontSize: '1.2rem', ...backTitleStyles }}>
			<ArrowBackIosNewIcon
				sx={{ cursor: 'pointer', marginBottom: '2.8rem' }}
				ref={iconRef}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
				onClick={() => navigate(-1)}
			/>
			<HeaderTitle title={title} customStyles={{ color: 'primary.main' }} />
		</Box>
	);
};

export default BackTitle;
