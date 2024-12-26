import BackTitle from '@/components/atoms/BackTitle/BackTitle';
import { Box, Button, Card, Grid, Typography, Divider } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import GroupStaticCard from '../../components/GroupStaticCard/GroupStaticCard';
import RevenueSvg from '@/assets/icons/revenue.svg?react';
import RevenueTypeChart from '../../components/Charts/RevenueTypeChart/RevenueTypeChart';

const RevenueByDayScreen = () => {
	return (
		<Box>
			<Box
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					alignContent: 'center',
					mb: '2.8rem'
				}}
			>
				<BackTitle customStyles={{ margin: 0 }} title='BÁO CÁO TỔNG DOANH THU' />
				<Box sx={{ display: 'flex', gap: '1.6rem' }}>
					<DatePicker
						sx={{
							'& .MuiInputBase-root': {
								width: '27.2rem',
								height: '4rem',
								fontSize: '1.4rem'
							}
						}}
					/>
					<Button
						size='small'
						sx={{
							color: '#1C6CEA',
							borderColor: '#1C6CEA',
							'&:hover': {
								color: '#1C6CEA',
								border: '1px solid  #1C6CEA'
							},
							'&:focus': {
								border: '1px solid  #1C6CEA',
								color: '#1C6CEA'
							}
						}}
						variant='outlined'
					>
						Xuất file
					</Button>
				</Box>
			</Box>
			<Box sx={{ marginBottom: '2.4rem' }}>
				<GroupStaticCard />
			</Box>
			<Box>
				<Grid spacing='3.2rem' container>
					<Grid md={6} item>
						<Card
							sx={{
								padding: '2.4rem 1.6rem',
								height: '57.8rem'
							}}
						>
							<Typography sx={{ mb: '3.2rem' }} variant='body1'>
								Biểu đồ thống kê các loại doanh thu
							</Typography>
							<RevenueTypeChart />
						</Card>
					</Grid>
					<Grid md={6} item>
						<Card
							sx={{
								padding: '3.2rem 2.4rem',
								height: '57.8rem'
							}}
						>
							<Typography sx={{ mb: '3.2rem' }} variant='body1'>
								Doanh thu cổng
							</Typography>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', mb: '2.4rem' }}>
								<Box sx={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
									<RevenueSvg />
									<Typography variant='body1'>Tổng doanh thu</Typography>
								</Box>
								<Typography variant='title1'>560.848.000 đ</Typography>
							</Box>
							<Divider />
							<Box
								sx={{
									maxHeight: '40.7rem',
									overflowY: 'auto',
									pr: '1rem',
									'&::-webkit-scrollbar-thumb': {
										backgroundColor: '#ddeefc',
										paddingLeft: '10px'
									},
									'&::-webkit-scrollbar': {
										marginRight: '10px',
										width: '6px',
										backgroundColor: '#ee2424',
										color: '#ee2424'
									}
								}}
							>
								<Box>
									<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2.4rem' }}>
										<Box sx={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
											<Box
												sx={{
													borderLeft: '0.4rem solid rgba(73, 127, 255, 1)',
													borderTopLeftRadius: '1rem',
													borderBottomLeftRadius: '1rem',
													height: '4rem'
												}}
											>
												{' '}
											</Box>
											<Typography variant='body1'>Máy thanh toán tiền mặt 1</Typography>
										</Box>
										<Typography sx={{ fontSize: '1.6rem' }} variant='body1'>
											560.848.000 đ
										</Typography>
									</Box>
									<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2.4rem' }}>
										<Typography sx={{ ml: '1rem' }} variant='body2'>
											Doanh thu tiền mặt
										</Typography>
										<Typography variant='body2'>300.230.000 đ</Typography>
									</Box>
									<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2.4rem' }}>
										<Typography sx={{ ml: '1rem' }} variant='body2'>
											Doanh thu chuyển khoản
										</Typography>
										<Typography variant='body2'>100.109.000 đ</Typography>
									</Box>
								</Box>
								<Box>
									<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2.4rem' }}>
										<Box sx={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
											<Box
												sx={{
													borderLeft: '0.4rem solid rgba(27, 231, 255, 1)',
													borderTopLeftRadius: '1rem',
													borderBottomLeftRadius: '1rem',
													height: '4rem'
												}}
											>
												{' '}
											</Box>
											<Typography variant='body1'>Máy thanh toán tiền mặt 2</Typography>
										</Box>
										<Typography sx={{ fontSize: '1.6rem' }} variant='body1'>
											560.848.000 đ
										</Typography>
									</Box>
									<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2.4rem' }}>
										<Typography sx={{ ml: '1rem' }} variant='body2'>
											Doanh thu tiền mặt
										</Typography>
										<Typography variant='body2'>300.230.000 đ</Typography>
									</Box>
									<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2.4rem' }}>
										<Typography sx={{ ml: '1rem' }} variant='body2'>
											Doanh thu chuyển khoản
										</Typography>
										<Typography variant='body2'>100.109.000 đ</Typography>
									</Box>
								</Box>
								<Box>
									<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2.4rem' }}>
										<Box sx={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
											<Box
												sx={{
													borderLeft: '0.4rem solid rgba(216, 74, 5, 1)',
													borderTopLeftRadius: '1rem',
													borderBottomLeftRadius: '1rem',
													height: '4rem'
												}}
											>
												{' '}
											</Box>
											<Typography variant='body1'>Máy thanh toán tiền mặt 3</Typography>
										</Box>
										<Typography sx={{ fontSize: '1.6rem' }} variant='body1'>
											560.848.000 đ
										</Typography>
									</Box>
									<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2.4rem' }}>
										<Typography sx={{ ml: '1rem' }} variant='body2'>
											Doanh thu tiền mặt
										</Typography>
										<Typography variant='body2'>300.230.000 đ</Typography>
									</Box>
									<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: '2.4rem' }}>
										<Typography sx={{ ml: '1rem' }} variant='body2'>
											Doanh thu chuyển khoản
										</Typography>
										<Typography variant='body2'>100.109.000 đ</Typography>
									</Box>
								</Box>
							</Box>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
};

export default RevenueByDayScreen;
