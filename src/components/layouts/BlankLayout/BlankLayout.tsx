import { Box } from '@mui/material';
import { memo } from 'react';
import { useOutlet } from 'react-router-dom';

const BlankLayout = () => {
	const outlet = useOutlet();
	return <Box>{outlet}</Box>;
};

export default memo(BlankLayout);
