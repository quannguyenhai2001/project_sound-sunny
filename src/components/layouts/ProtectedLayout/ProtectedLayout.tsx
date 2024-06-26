import { Navigate, useOutlet } from 'react-router-dom';
import { Box, Stack } from '@mui/material';
import styles from './ProtectedLayout.module.css';
import SideBar from '@/components/organisms/SideBar/SideBar';
import Header from '@/components/organisms/Header/Header';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { memo } from 'react';
import useGetUserInfo from '@/features/user/hooks/useGetUserInfo';

function ProtectedLayout() {
	const outlet = useOutlet();
	const { isSignIn } = useGetUserInfo();

	if (!isSignIn) {
		return <Navigate to={ROUTE_PATH.AUTH.SIGN_IN} />;
	}

	return (
		<Box className={styles.container}>
			<SideBar />
			<Stack
				sx={{
					width: '100%'
				}}
			>
				<Header />
				<Stack
					sx={{
						padding: '8.4rem 2.4rem 0  2.4rem'
					}}
				>
					{outlet}
				</Stack>
			</Stack>
		</Box>
	);
}

export default memo(ProtectedLayout);
