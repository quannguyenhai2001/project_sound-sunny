// import logo from '@/assets/logo/sound-cloud.png';
import avatar from '@/assets/images/user-avatar.webp';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import useAuth from '@/features/auth/hooks/useAuth';
import i18n from '@/locales/i18n';
import useRouter from '@/routes/router-hook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { AppBar, Box, Button, Fade, Paper, Popper, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Header = () => {
	const { navigate } = useRouter();
	const { signOut } = useAuth();
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [anchorElFunc, setAnchorElFunc] = useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};
	const handleClickFunc = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElFunc(anchorElFunc ? null : event.currentTarget);
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
						onClick={() => navigate(ROUTE_PATH.PORT_STATISTICAL.TOTAL_REVENUE)}
						sx={{
							width: '14.4rem',
							cursor: 'pointer',
							'& img': {
								width: '100%'
							}
						}}
					>
						{/* <img src={logo} alt='logo' /> */}
					</Box>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
						<Box
							onClick={handleClickFunc}
							sx={{
								cursor: 'pointer',
								'& img': {
									width: '100%'
								}
							}}
						>
							<Button endIcon={<KeyboardArrowDownIcon />} sx={{ color: 'white' }}>
								Function List
							</Button>
							<Popper
								anchorEl={anchorElFunc}
								id={idFunc}
								open={openFunc}
								placement='bottom-end'
								sx={{
									zIndex: 120111,
									'&.base-Popper-root': {
										top: '10rem'
									}
								}}
								transition
							>
								{({ TransitionProps }) => (
									<Fade {...TransitionProps} timeout={100}>
										<Paper>
											<Typography
												onClick={() => changeLanguageToEnglish()}
												sx={{
													padding: '0.8rem 1.6rem',
													'&:hover': {
														backgroundColor: 'rgba(229, 243, 255, 1)',
														cursor: 'pointer'
													}
												}}
												variant='body5'
											>
												Switch to English
											</Typography>
											<Typography
												onClick={() => changeLanguageToVietnamese()}
												sx={{
													padding: '0.8rem 1.6rem',
													'&:hover': {
														backgroundColor: 'rgba(229, 243, 255, 1)',
														cursor: 'pointer'
													}
												}}
												variant='body5'
											>
												Switch to Vietnamese
											</Typography>
										</Paper>
									</Fade>
								)}
							</Popper>
						</Box>
						<Typography color='white' variant='body5'>
							Hai Quan
						</Typography>
						<Box
							onClick={handleClick}
							sx={{
								cursor: 'pointer',
								'& img': {
									width: '100%'
								}
							}}
						>
							<img alt='avatar' style={{ borderRadius: '50%', width: '3.2rem' }} src={avatar} />
							<Popper
								anchorEl={anchorEl}
								id={id}
								open={open}
								placement='bottom-end'
								sx={{
									zIndex: 120111,
									'&.base-Popper-root': {
										top: '10rem'
									}
								}}
								transition
							>
								{({ TransitionProps }) => (
									<Fade {...TransitionProps} timeout={100}>
										<Paper>
											<Typography
												onClick={() => navigate(ROUTE_PATH.SETTING.INDEX)}
												sx={{
													padding: '0.8rem 1.6rem',
													'&:hover': {
														backgroundColor: 'rgba(229, 243, 255, 1)',
														cursor: 'pointer'
													}
												}}
												variant='body5'
											>
												Cài đặt
											</Typography>
											<Typography
												onClick={handleSignOut}
												sx={{
													padding: '0.8rem 1.6rem',
													'&:hover': {
														backgroundColor: 'rgba(229, 243, 255, 1)',
														cursor: 'pointer'
													}
												}}
												variant='body5'
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
