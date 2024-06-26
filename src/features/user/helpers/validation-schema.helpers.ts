import * as Yup from 'yup';

export const initPersonalInformationEditFormValue = {
	userName: '',
	phone: '',
	workLocation: '',
	email: '',
	role: ''
};

export const PersonalInformationEditFormSchema = Yup.object().shape({
	userName: Yup.string().required('Tên người dùng không được để trống'),
	phone: Yup.string().required('Số điện thoại không được để trống'),
	workLocation: Yup.string().required('Địa chỉ làm việc không được để trống'),
	email: Yup.string().required('Địa chỉ email không được để trống'),
	role: Yup.string().required('Vai trò không được để trống')
});
