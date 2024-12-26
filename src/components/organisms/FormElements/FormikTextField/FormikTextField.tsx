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
			autoComplete='off'
			component={TextField}
			disabled={disabled}
			error={!!error}
			helperText={error && errorText}
			id={id || name}
			label={label}
			name={name}
			onBlur={handleBlur}
			onChange={handleChange}
			value={get(values, name) || ''}
			variant={variant}
			{...props}
		/>
	);
};

export default FormikTextField;
