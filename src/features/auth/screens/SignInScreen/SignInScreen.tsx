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
					md={3.5}
					sx={{
						placeItems: 'center',
						display: 'grid',
						padding: '0 6rem',
						height: '100vh'
					}}
					item
				>
					<Box>
						<HeaderTitle
							customStyles={{
								marginBottom: '2.8rem',
								'& .MuiTypography-root': {
									color: 'black'
								}
							}}
							title='Đăng nhập hệ thống'
						/>
						<Formik
							initialValues={initLoginFormValue}
							onSubmit={(values: SignInRequestBody) => {
								handleSubmit(values);
							}}
							validationSchema={LoginFormSchema}
						>
							{({ values, setFieldValue, handleBlur, isValid }) => (
								<Form>
									<FormikTextField
										id='account'
										label='Tài khoản'
										name='account'
										onBlur={(e) => {
											handleBlur(e);
											setFieldValue('account', values.account.trim(), true);
										}}
										placeholder='Nhập tài khoản'
										size='small'
										sx={{ marginBottom: '3.6rem' }}
										variant='outlined'
										fullWidth
										required
									/>
									<FormikTextField
										id='password'
										label='Mật khẩu'
										name='password'
										placeholder='Nhập mật khẩu'
										size='small'
										sx={{ marginBottom: '3.6rem' }}
										type={'password'}
										variant='outlined'
										fullWidth
										required
									/>

									<LoadingButton
										disabled={!isValid}
										loading={isPendingSignIn}
										sx={{
											background: 'black',
											'&:hover': {
												background: 'black'
											}
										}}
										type='submit'
										variant='contained'
										fullWidth
									>
										Đăng nhập
									</LoadingButton>
								</Form>
							)}
						</Formik>
					</Box>
				</Grid>
				<Grid md={8.5} item>
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
						<img alt='logo' src={bg} />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default SignInScreen;
