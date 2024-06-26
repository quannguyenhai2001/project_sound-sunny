import { TextField } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import { get } from 'lodash';

interface FormikTextFieldProps {
	label?: string;
	id?: string;
	name: string;
	variant?: 'filled' | 'outlined' | 'standard';
	disabled?: boolean;
	[x: string]: any;
}
const FormikTextField = ({ label, id, name, variant = 'filled', disabled, ...props }: FormikTextFieldProps) => {
	const { errors, touched, values, handleBlur, handleChange } = useFormikContext();

	const error = get(errors, name) && get(touched, name);
	const errorText = get(errors, name);

	return (
		<Field
			disabled={disabled}
			component={TextField}
			onChange={handleChange}
			onBlur={handleBlur}
			id={id || name}
			name={name}
			variant={variant}
			error={!!error}
			helperText={error && errorText}
			value={get(values, name) || ''}
			autoComplete='off'
			label={label}
			{...props}
		/>
	);
};

export default FormikTextField;
