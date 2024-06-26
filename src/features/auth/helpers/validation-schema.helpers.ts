import * as Yup from 'yup';

export const initLoginFormValue = {
	account: '',
	password: ''
};

export const LoginFormSchema = Yup.object().shape({
	account: Yup.string().required('Tài khoản không được để trống'),
	password: Yup.string().required('Mật khẩu không được để trống')
});
