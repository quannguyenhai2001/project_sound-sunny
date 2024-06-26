import { AppBar, Box, Button, Fade, Paper, Popper, Toolbar, Typography } from '@mui/material';
import logo from '@/assets/logo/sound-cloud.png';
import avatar from '@/assets/images/user-avatar.webp';
import { useState } from 'react';
import useRouter from '@/routes/router-hook';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import useAuth from '@/features/auth/hooks/useAuth';
import { toast } from 'react-toastify';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import i18n from '@/locales/i18n';
const Header = () => {
	const { navigate } = useRouter();
	const { signOut } = useAuth();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [anchorElFunc, setAnchorElFunc] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};
	const handleClickFunc = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElFunc(anchorEl ? null : event.currentTarget);
	};
	const changeLanguageToEnglish = () => {
		i18n.changeLanguage('en');
	};
	const changeLanguageToVietnamese = () => {
		i18n.changeLanguage('vn');
	};
	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	const openFunc = Boolean(anchorElFunc);
	const idFunc = open ? 'simple-function-popper' : undefined;
	const handleSignOut = async () => {
		try {
			toast('Đợi hệ thống trong giây lát ...', { type: 'warning' });
			await signOut(1);
			toast('Đăng xuất thành công !', { type: 'success' });
			navigate(ROUTE_PATH.AUTH.SIGN_IN);
		} catch (error) {
			toast('Đăng xuất thất bại !', { type: 'error' });
		}
	};
	return (
		<AppBar
			position='fixed'
			sx={{
				zIndex: (theme) => theme.zIndex.drawer + 1,
				height: '5.6rem',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: '#1A1A1A'
			}}
		>
			<Toolbar>
				<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
					<Box
						sx={{
							width: '14.4rem',
							cursor: 'pointer',
							'& img': {
								width: '100%'
							}
						}}
						onClick={() => navigate(ROUTE_PATH.PORT_STATISTICAL.TOTAL_REVENUE)}
					>
						<img src={logo} alt='logo' />
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
						<Box
							sx={{
								cursor: 'pointer',
								'& img': {
									width: '100%'
								}
							}}
							onClick={handleClickFunc}
						>
							<Button sx={{ color: 'white' }} endIcon={<KeyboardArrowDownIcon />}>
								Danh sách chức năng
							</Button>
							<Popper
								id={idFunc}
								open={openFunc}
								anchorEl={anchorElFunc}
								transition
								placement='bottom-end'
								sx={{
									zIndex: 120111,
									'&.base-Popper-root': {
										top: '10rem'
									}
								}}
							>
								{({ TransitionProps }) => (
									<Fade {...TransitionProps} timeout={100}>
										<Paper>
											<Typography
												variant='body5'
												onClick={() => changeLanguageToEnglish()}
												sx={{
													padding: '0.8rem 1.6rem',
													'&:hover': {
														backgroundColor: 'rgba(229, 243, 255, 1)',
														cursor: 'pointer'
													}
												}}
											>
												Chuyển sang tiếng anh
											</Typography>
											<Typography
												variant='body5'
												sx={{
													padding: '0.8rem 1.6rem',
													'&:hover': {
														backgroundColor: 'rgba(229, 243, 255, 1)',
														cursor: 'pointer'
													}
												}}
												onClick={() => changeLanguageToVietnamese()}
											>
												Chuyển sang tiếng việt
											</Typography>
										</Paper>
									</Fade>
								)}
							</Popper>
						</Box>
						<Typography variant='body5' color='white'>
							Nguyễn Hải Quân
						</Typography>
						<Box
							sx={{
								cursor: 'pointer',
								'& img': {
									width: '100%'
								}
							}}
							onClick={handleClick}
						>
							<img src={avatar} alt='avatar' width={32} height={32} />
							<Popper
								id={id}
								open={open}
								anchorEl={anchorEl}
								transition
								placement='bottom-end'
								sx={{
									zIndex: 120111,
									'&.base-Popper-root': {
										top: '10rem'
									}
								}}
							>
								{({ TransitionProps }) => (
									<Fade {...TransitionProps} timeout={100}>
										<Paper>
											<Typography
												variant='body5'
												onClick={() => navigate(ROUTE_PATH.SETTING.INDEX)}
												sx={{
													padding: '0.8rem 1.6rem',
													'&:hover': {
														backgroundColor: 'rgba(229, 243, 255, 1)',
														cursor: 'pointer'
													}
												}}
											>
												Cài đặt
											</Typography>
											<Typography
												variant='body5'
												sx={{
													padding: '0.8rem 1.6rem',
													'&:hover': {
														backgroundColor: 'rgba(229, 243, 255, 1)',
														cursor: 'pointer'
													}
												}}
												onClick={handleSignOut}
											>
												Đăng xuất
											</Typography>
										</Paper>
									</Fade>
								)}
							</Popper>
						</Box>
					</Box>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
