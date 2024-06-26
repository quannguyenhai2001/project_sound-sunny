import { Box, Grid } from '@mui/material';
import bg from '@/assets/images/bg-login.avif';
import HeaderTitle from '@/components/atoms/HeaderTitle/HeaderTitle';
import { Form, Formik } from 'formik';
import FormikTextField from '@/components/organisms/FormElements/FormikTextField/FormikTextField';
import useRouter from '@/routes/router-hook';
import { ROUTE_PATH } from '@/constants/route-path.constant';
import { LoginFormSchema, initLoginFormValue } from '../../helpers/validation-schema.helpers';
import { SignInRequestBody } from '../../types/auth.types';
import { toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useGetUserInfo from '@/features/user/hooks/useGetUserInfo';
import { LoadingButton } from '@mui/lab';

const SignInScreen = () => {
	const { navigate } = useRouter();
	const { signIn, isPendingSignIn } = useAuth();
	const { isSignIn } = useGetUserInfo();

	if (isSignIn) {
		navigate(ROUTE_PATH.PORT_STATISTICAL.TOTAL_REVENUE);
	}

	const handleSubmit = async (data: { account: string; password: string }) => {
		try {
			await signIn(data);
			toast('Đăng nhập thành công !', { type: 'success' });
			navigate(ROUTE_PATH.PORT_STATISTICAL.TOTAL_REVENUE);
		} catch (error) {
			toast('Đăng nhập thất bại !', { type: 'error' });
		}
	};
	return (
		<Box>
			<Grid container>
				<Grid
					item
					md={3.5}
					sx={{
						placeItems: 'center',
						display: 'grid',
						padding: '0 6rem',
						height: '100vh'
					}}
				>
					<Box>
						<HeaderTitle
							title='Đăng nhập hệ thống'
							customStyles={{
								marginBottom: '2.8rem',
								'& .MuiTypography-root': {
									color: 'black'
								}
							}}
						/>
						<Formik
							initialValues={initLoginFormValue}
							validationSchema={LoginFormSchema}
							onSubmit={(values: SignInRequestBody) => {
								handleSubmit(values);
							}}
						>
							{({ values, setFieldValue, handleBlur, isValid }) => (
								<Form>
									<FormikTextField
										required
										fullWidth
										size='small'
										variant='outlined'
										id='account'
										label='Tài khoản'
										name='account'
										placeholder='Nhập tài khoản'
										onBlur={(e) => {
											handleBlur(e);
											setFieldValue('account', values.account.trim(), true);
										}}
										sx={{ marginBottom: '3.6rem' }}
									/>
									<FormikTextField
										required
										fullWidth
										size='small'
										variant='outlined'
										name='password'
										label='Mật khẩu'
										placeholder='Nhập mật khẩu'
										id='password'
										type={'password'}
										sx={{ marginBottom: '3.6rem' }}
									/>

									<LoadingButton
										fullWidth
										variant='contained'
										disabled={!isValid}
										type='submit'
										sx={{
											background: 'black',
											'&:hover': {
												background: 'black'
											}
										}}
										loading={isPendingSignIn}
									>
										Đăng nhập
									</LoadingButton>
								</Form>
							)}
						</Formik>
					</Box>
				</Grid>
				<Grid item md={8.5}>
					<Box
						sx={{
							height: '100vh',
							width: '100%',
							'& img': {
								height: '100%',
								width: '100%'
							}
						}}
					>
						<img src={bg} alt='logo' />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default SignInScreen;
