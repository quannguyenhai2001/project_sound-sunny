import { FormControl, FormHelperText, MenuItem, Select, Typography } from '@mui/material';
import { Field, useFormikContext } from 'formik';
import { get } from 'lodash';

const FormikSelect = ({
	fullWidth,
	label,
	id,
	name,
	displayEmpty = true,
	variant = 'filled',
	options,
	placeholder,
	disableValuePlaceholder = true,
	haveFunctionGoWithOnChange = false,
	functionsGoWithOnChange,
	sxPropsLabel,
	disableField = false,
	...props
}) => {
	const { errors, touched, values, handleChange, handleBlur } = useFormikContext();

	const error = get(errors, name) && get(touched, name);
	const errorText = get(errors, name);

	return (
		<FormControl fullWidth={fullWidth} sx={{ minWidth: 120 }}>
			{label && (
				<Typography mb={1} sx={sxPropsLabel}>
					<label htmlFor={`label-${id || name}`}>{label}</label>
				</Typography>
			)}

			<Field
				component={Select}
				disabled={disableField}
				displayEmpty={displayEmpty}
				error={!!error}
				id={id || name}
				inputProps={{
					name
				}}
				label=''
				label_id={`label-${id || name}`}
				name={name}
				onBlur={handleBlur}
				onChange={(e) => {
					handleChange(e);
					if (haveFunctionGoWithOnChange) {
						functionsGoWithOnChange();
					}
				}}
				value={get(values, name)}
				variant={variant}
				{...props}
			>
				<MenuItem disabled={disableValuePlaceholder} value='' selected>
					<Typography>{placeholder}</Typography>
				</MenuItem>
				{options.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</Field>
			{error && (
				<FormHelperText
					sx={{
						position: 'absolute',
						bottom: 0,
						transform: 'translateY(100%)',
						margin: 0
					}}
					error
				>
					{errorText}
				</FormHelperText>
			)}
		</FormControl>
	);
};

export default FormikSelect;
