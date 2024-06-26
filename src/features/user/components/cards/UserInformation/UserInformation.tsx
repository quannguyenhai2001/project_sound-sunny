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
						startIcon={<BorderColorIcon />}
						variant='outlined'
						sx={{
							borderRadius: '2.4rem',
							display: 'flex',
							alignItems: 'normal'
						}}
						onClick={() => setIsEditing(!isEditing)}
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
							validationSchema={PersonalInformationEditFormSchema}
							onSubmit={() => {}}
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
												component='img'
												sx={{ width: '100%', height: '100%', borderRadius: '50%' }}
												image={avatar}
												alt='avatars'
											/>
										</Box>
										<CardContent sx={{ padding: '0 10rem', width: '60%' }}>
											<Box sx={{ mb: '1.6rem' }}>
												<Typography variant='body2' sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }}>
													Họ và tên
												</Typography>
												<FormikTextField
													required
													fullWidth
													size='small'
													variant='standard'
													id='userName'
													name='userName'
													onBlur={(e) => {
														handleBlur(e);
														setFieldValue('userName', values.userName.trim(), true);
													}}
												/>
											</Box>
											<Stack
												spacing={{ xs: 1, sm: 13 }}
												direction='row'
												justifyContent='space-between'
												gap={4}
												useFlexGap
												flexWrap='wrap'
												sx={{ width: '100%' }}
											>
												<Box sx={{ width: '40%' }}>
													<Box sx={{ mb: '1.6rem' }}>
														<Typography variant='body2' sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }}>
															Số điện thoại
														</Typography>
														<FormikTextField
															required
															fullWidth
															size='small'
															variant='standard'
															id='phone'
															name='phone'
															onBlur={(e) => {
																handleBlur(e);
																setFieldValue('phone', values.phone.trim(), true);
															}}
														/>
													</Box>
													<Box sx={{ mb: '1.6rem' }}>
														<Typography variant='body2' sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }}>
															Địa điểm làm việc
														</Typography>
														<FormikTextField
															required
															fullWidth
															size='small'
															variant='standard'
															id='workLocation'
															name='workLocation'
															onBlur={(e) => {
																handleBlur(e);
																setFieldValue('workLocation', values.workLocation.trim(), true);
															}}
														/>
													</Box>
												</Box>
												<Box sx={{ width: '40%' }}>
													<Box sx={{ mb: '1.6rem' }}>
														<Typography variant='body2' sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }}>
															Email
														</Typography>
														<FormikTextField
															required
															fullWidth
															size='small'
															variant='standard'
															id='email'
															name='email'
															onBlur={(e) => {
																handleBlur(e);
																setFieldValue('email', values.email.trim(), true);
															}}
														/>
													</Box>
													<Box sx={{ mb: '1.6rem' }}>
														<Typography variant='body2' sx={{ mb: '0.8rem', color: 'rgba(173, 179, 189, 1)' }}>
															Vai trò
														</Typography>
														<FormikTextField
															required
															fullWidth
															size='small'
															variant='standard'
															id='role'
															name='role'
															onBlur={(e) => {
																handleBlur(e);
																setFieldValue('role', values.role.trim(), true);
															}}
														/>
													</Box>
												</Box>
											</Stack>
										</CardContent>
									</Box>
									<Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '1.6rem' }}>
										<Button
											variant='outlined'
											sx={{
												borderRadius: '2.4rem',
												display: 'flex',
												alignItems: 'normal'
											}}
											onClick={() => setIsEditing(!isEditing)}
										>
											Huỷ
										</Button>

										<Button
											variant='contained'
											sx={{
												borderRadius: '2.4rem',
												display: 'flex',
												alignItems: 'normal'
											}}
											onClick={() => setIsEditing(!isEditing)}
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
									component='img'
									sx={{ width: '100%', height: '100%', borderRadius: '50%' }}
									image={avatar}
									alt='avatars'
								/>
							</Box>
							<CardContent sx={{ padding: '0 10rem' }}>
								<Stack spacing={{ xs: 1, sm: 13 }} direction='row' gap={4} useFlexGap flexWrap='wrap'>
									<Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography variant='body2' sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }}>
												Họ và tên
											</Typography>
											<Typography variant='body1' sx={{ fontFamily: 'Inter-Medium' }}>
												PHX Smart School
											</Typography>
										</Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography variant='body2' sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }}>
												Số điện thoại
											</Typography>
											<Typography variant='body1' sx={{ fontFamily: 'Inter-Medium' }}>
												012 345 678
											</Typography>
										</Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography variant='body2' sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }}>
												Địa điểm làm việc
											</Typography>
											<Typography variant='body1' sx={{ fontFamily: 'Inter-Medium' }}>
												PHX Group
											</Typography>
										</Box>
									</Box>
									<Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography variant='body2' sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }}>
												Email
											</Typography>
											<Typography variant='body1' sx={{ fontFamily: 'Inter-Medium' }}>
												phxsmart-school@gmail.com
											</Typography>
										</Box>
										<Box sx={{ mb: '1.6rem' }}>
											<Typography variant='body2' sx={{ mb: '1.2rem', color: 'rgba(173, 179, 189, 1)' }}>
												Vai trò
											</Typography>
											<Typography variant='body1' sx={{ fontFamily: 'Inter-Medium' }}>
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
