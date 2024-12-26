import { Box, Button, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import avatar from '@/assets/images/avatar-1.png';
import { useState } from 'react';
import { Form, Formik } from 'formik';
import FormikTextField from '@/components/organisms/FormElements/FormikTextField/FormikTextField';
import {
	PersonalInformationEditFormSchema,
	initPersonalInformationEditFormValue
} from '@/features/user/helpers/validation-schema.helpers';
import useUpdateUserInfo from '@/features/user/hooks/useUpdateUserInfo';

const UserInformation = () => {
	const [isEditing, setIsEditing] = useState(false);
	const { updateUser } = useUpdateUserInfo(1);
	const handleAsync = async () => {
		try {
			await updateUser({ userName: 'q', phone: 'q', workLocation: 'q', email: 'q', role: 'q' });
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<Box
			onClick={handleAsync}
			sx={{
				padding: '2.4rem',
				borderRadius: '1.6rem',
				border: '1px solid rgba(228, 228, 228, 1)',
				marginBottom: '2.4rem'
			}}
		>
			<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.4rem' }}>
				<Typography variant='title5'>Thông tin cá nhân</Typography>
				{!isEditing ? (
					<Button
						onClick={() => setIsEditing(!isEditing)}
						startIcon={<BorderColorIcon />}
						sx={{
							borderRadius: '2.4rem',
							display: 'flex',
							alignItems: 'normal'
						}}
						variant='outlined'
					>
						Chỉnh sửa
					</Button>
				) : null}
			</Box>
			{isEditing ? (
				<Box>
					<Card
						sx={{
							'&.MuiCard-root': {
								boxShadow: 'none'
							},
							'& .MuiCardContent-root': {
								'&:last-child': {
									paddingBottom: '0'
								}
							}
						}}
					>
						<Formik
							initialValues={initPersonalInformationEditFormValue}
							onSubmit={() => {}}
							validationSchema={PersonalInformationEditFormSchema}
						>
							{({ values, setFieldValue, handleBlur }) => (
								<Form>
									<Box sx={{ display: 'flex', alignItems: 'center', gridTemplateColumns: '15% 1fr' }}>
										<Box
											sx={{
												width: '18.4rem',
												height: '18.4rem',
												borderRadius: '50%'
											}}
										>
											<CardMedia
												alt='avatars'
												component='img'
												image={avatar}
												sx={{ width: '100%', height: '100%', borderRadius: '50%' }}
											/>
										</Box>
										<CardContent sx={{ padding: '0 10rem', width: '60%' }}>
											<Box sx={{ mb: '1.6rem' }}>
												<Typography sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
													Họ và tên
												</Typography>
												<FormikTextField
													id='userName'
													name='userName'
													onBlur={(e) => {
														handleBlur(e);
														setFieldValue('userName', values.userName.trim(), true);
													}}
													size='small'
													variant='standard'
													fullWidth
													required
												/>
											</Box>
											<Stack
												direction='row'
												flexWrap='wrap'
												gap={4}
												justifyContent='space-between'
												spacing={{ xs: 1, sm: 13 }}
												sx={{ width: '100%' }}
												useFlexGap
											>
												<Box sx={{ width: '40%' }}>
													<Box sx={{ mb: '1.6rem' }}>
														<Typography sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
															Số điện thoại
														</Typography>
														<FormikTextField
															id='phone'
															name='phone'
															onBlur={(e) => {
																handleBlur(e);
																setFieldValue('phone', values.phone.trim(), true);
															}}
															size='small'
															variant='standard'
															fullWidth
															required
														/>
													</Box>
													<Box sx={{ mb: '1.6rem' }}>
														<Typography sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
															Địa điểm làm việc
														</Typography>
														<FormikTextField
															id='workLocation'
															name='workLocation'
															onBlur={(e) => {
																handleBlur(e);
																setFieldValue('workLocation', values.workLocation.trim(), true);
															}}
															size='small'
															variant='standard'
															fullWidth
															required
														/>
													</Box>
												</Box>
												<Box sx={{ width: '40%' }}>
													<Box sx={{ mb: '1.6rem' }}>
														<Typography sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
															Email
														</Typography>
														<FormikTextField
															id='email'
															name='email'
															onBlur={(e) => {
																handleBlur(e);
																setFieldValue('email', values.email.trim(), true);
															}}
															size='small'
															variant='standard'
															fullWidth
															required
														/>
													</Box>
													<Box sx={{ mb: '1.6rem' }}>
														<Typography sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
															Vai trò
														</Typography>
														<FormikTextField
															id='role'
															name='role'
															onBlur={(e) => {
																handleBlur(e);
																setFieldValue('role', values.role.trim(), true);
															}}
															size='small'
															variant='standard'
															fullWidth
															required
														/>
													</Box>
												</Box>
											</Stack>
										</CardContent>
									</Box>
									<Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.6rem' }}>
										<Button
											onClick={() => setIsEditing(!isEditing)}
											sx={{
												borderRadius: '2.4rem',
												display: 'flex',
												alignItems: 'normal'
											}}
											variant='outlined'
										>
											Huỷ
										</Button>

										<Button
											onClick={() => setIsEditing(!isEditing)}
											sx={{
												borderRadius: '2.4rem',
												display: 'flex',
												alignItems: 'normal'
											}}
											variant='contained'
										>
											Lưu
										</Button>
									</Box>
								</Form>
							)}
						</Formik>
					</Card>
				</Box>
			) : (
				<Box>
					<Card
						sx={{
							'&.MuiCard-root': {
								boxShadow: 'none'
							},
							'& .MuiCardContent-root': {
								'&:last-child': {
									paddingBottom: '0'
								}
							}
						}}
					>
						<Box sx={{ display: 'flex', alignItems: 'center', gridTemplateColumns: '15% 1fr' }}>
							<Box
								sx={{
									width: '18.4rem',
									height: '18.4rem',
									borderRadius: '50%'
								}}
							>
								<CardMedia
									alt='avatars'
									component='img'
									image={avatar}
									sx={{ width: '100%', height: '100%', borderRadius: '50%' }}
								/>
							</Box>
							<CardContent sx={{ padding: '0 10rem' }}>
								<Stack direction='row' flexWrap='wrap' gap={4} spacing={{ xs: 1, sm: 13 }} useFlexGap>
									<Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
												Họ và tên
											</Typography>
											<Typography sx={{ fontFamily: 'Inter-Medium' }} variant='body1'>
												PHX Smart School
											</Typography>
										</Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
												Số điện thoại
											</Typography>
											<Typography sx={{ fontFamily: 'Inter-Medium' }} variant='body1'>
												012 345 678
											</Typography>
										</Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
												Địa điểm làm việc
											</Typography>
											<Typography sx={{ fontFamily: 'Inter-Medium' }} variant='body1'>
												PHX Group
											</Typography>
										</Box>
									</Box>
									<Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
												Email
											</Typography>
											<Typography sx={{ fontFamily: 'Inter-Medium' }} variant='body1'>
												phxsmart-school@gmail.com
											</Typography>
										</Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }} variant='body2'>
												Vai trò
											</Typography>
											<Typography sx={{ fontFamily: 'Inter-Medium' }} variant='body1'>
												Admin
											</Typography>
										</Box>
									</Box>
								</Stack>
							</CardContent>
						</Box>
					</Card>
				</Box>
			)}
		</Box>
	);
};

export default UserInformation;
