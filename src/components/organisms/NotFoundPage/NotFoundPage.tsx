import { Box, Stack } from '@mui/material';
import styles from './NotFoundPage.module.css';
import SideBar from '@/components/organisms/SideBar/SideBar';
import Header from '../Header/Header';

function NotFoundPage() {
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
					<Box
						sx={{
							textAlign: 'center',
							height: '90vh',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<Box>
							<h1>Không tìm thấy trang</h1>
							<p>Trang bạn đang tìm kiếm không tồn tại. Vui lòng kiểm tra URL và thử lại.</p>
						</Box>
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
}

export default NotFoundPage;
