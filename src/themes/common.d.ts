import { createTheme } from '@mui/material';

const fontFamily = ['Inter', 'sans-serif'].join(',');

// Update the Typography's variant prop options
declare module '@mui/material/styles' {
	interface TypographyVariants {
		display1_regular: React.CSSProperties;
		display1_medium: React.CSSProperties;
		display1_semibold: React.CSSProperties;
		display1_bold: React.CSSProperties;
		display2_regular: React.CSSProperties;
		display2_medium: React.CSSProperties;
		display2_semibold: React.CSSProperties;
		display2_bold: React.CSSProperties;
		heading1_regular: React.CSSProperties;
		heading1_medium: React.CSSProperties;
		heading1_semibold: React.CSSProperties;
		heading1_bold: React.CSSProperties;
		heading2_regular: React.CSSProperties;
		heading2_medium: React.CSSProperties;
		heading2_semibold: React.CSSProperties;
		heading2_bold: React.CSSProperties;
		title1_regular: React.CSSProperties;
		title1_medium: React.CSSProperties;
		title1_semibold: React.CSSProperties;
		title1_bold: React.CSSProperties;
		title2_regular: React.CSSProperties;
		title2_medium: React.CSSProperties;
		title2_semibold: React.CSSProperties;
		title2_bold: React.CSSProperties;
		title3_regular: React.CSSProperties;
		title3_medium: React.CSSProperties;
		title3_semibold: React.CSSProperties;
		title3_bold: React.CSSProperties;
		body1_regular: React.CSSProperties;
		body1_medium: React.CSSProperties;
		body1_semibold: React.CSSProperties;
		body1_bold: React.CSSProperties;
		body2_regular: React.CSSProperties;
		body2_medium: React.CSSProperties;
		body2_semibold: React.CSSProperties;
		body2_bold: React.CSSProperties;
		subbody1_regular: React.CSSProperties;
		subbody1_medium: React.CSSProperties;
		subbody1_semibold: React.CSSProperties;
		subbody1_bold: React.CSSProperties;
		subbody2_regular: React.CSSProperties;
		subbody2_medium: React.CSSProperties;
		subbody2_semibold: React.CSSProperties;
		subbody2_bold: React.CSSProperties;
		subbody3_regular: React.CSSProperties;
		subbody3_medium: React.CSSProperties;
		subbody3_semibold: React.CSSProperties;
		subbody3_bold: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		display1_regular: React.CSSProperties;
		display1_medium: React.CSSProperties;
		display1_semibold: React.CSSProperties;
		display1_bold: React.CSSProperties;
		display2_regular: React.CSSProperties;
		display2_medium: React.CSSProperties;
		display2_semibold: React.CSSProperties;
		display2_bold: React.CSSProperties;
		heading1_regular: React.CSSProperties;
		heading1_medium: React.CSSProperties;
		heading1_semibold: React.CSSProperties;
		heading1_bold: React.CSSProperties;
		heading2_regular: React.CSSProperties;
		heading2_medium: React.CSSProperties;
		heading2_semibold: React.CSSProperties;
		heading2_bold: React.CSSProperties;
		title1_regular: React.CSSProperties;
		title1_medium: React.CSSProperties;
		title1_semibold: React.CSSProperties;
		title1_bold: React.CSSProperties;
		title2_regular: React.CSSProperties;
		title2_medium: React.CSSProperties;
		title2_semibold: React.CSSProperties;
		title2_bold: React.CSSProperties;
		title3_regular: React.CSSProperties;
		title3_medium: React.CSSProperties;
		title3_semibold: React.CSSProperties;
		title3_bold: React.CSSProperties;
		body1_regular: React.CSSProperties;
		body1_medium: React.CSSProperties;
		body1_semibold: React.CSSProperties;
		body1_bold: React.CSSProperties;
		body2_regular: React.CSSProperties;
		body2_medium: React.CSSProperties;
		body2_semibold: React.CSSProperties;
		body2_bold: React.CSSProperties;
		subbody1_regular: React.CSSProperties;
		subbody1_medium: React.CSSProperties;
		subbody1_semibold: React.CSSProperties;
		subbody1_bold: React.CSSProperties;
		subbody2_regular: React.CSSProperties;
		subbody2_medium: React.CSSProperties;
		subbody2_semibold: React.CSSProperties;
		subbody2_bold: React.CSSProperties;
		subbody3_regular: React.CSSProperties;
		subbody3_medium: React.CSSProperties;
		subbody3_semibold: React.CSSProperties;
		subbody3_bold: React.CSSProperties;
	}
}
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		display1_regular: true;
		display1_medium: true;
		display1_semibold: true;
		display1_bold: true;
		display2_regular: true;
		display2_medium: true;
		display2_semibold: true;
		display2_bold: true;
		heading1_regular: true;
		heading1_medium: true;
		heading1_semibold: true;
		heading1_bold: true;
		heading2_regular: true;
		heading2_medium: true;
		heading2_semibold: true;
		heading2_bold: true;
		title1_regular: true;
		title1_medium: true;
		title1_semibold: true;
		title1_bold: true;
		title2_regular: true;
		title2_medium: true;
		title2_semibold: true;
		title2_bold: true;
		title3_regular: true;
		title3_medium: true;
		title3_semibold: true;
		title3_bold: true;
		body1_regular: true;
		body1_medium: true;
		body1_semibold: true;
		body1_bold: true;
		body2_regular: true;
		body2_medium: true;
		body2_semibold: true;
		body2_bold: true;
		subbody1_regular: true;
		subbody1_medium: true;
		subbody1_semibold: true;
		subbody1_bold: true;
		subbody2_regular: true;
		subbody2_medium: true;
		subbody2_semibold: true;
		subbody2_bold: true;
		subbody3_regular: true;
		subbody3_medium: true;
		subbody3_semibold: true;
		subbody3_bold: true;
	}
}

// Update the Palette's color prop options
declare module '@mui/material/styles' {
	interface PaletteColorOptions {
		main?: string;
		black?: string;
		blue50?: string;
		blue100?: string;
		blue200?: string;
		blue300?: string;
		blue400?: string;
		blue500?: string;
		blue600?: string;
		blue700?: string;
		blue800?: string;
		blue900?: string;
		blue950?: string;
		orange50?: string;
		orange100?: string;
		orange200?: string;
		orange300?: string;
		orange400?: string;
		orange500?: string;
		orange600?: string;
		orange700?: string;
		orange800?: string;
		orange900?: string;
		orange950?: string;
		red50?: string;
		red100?: string;
		red200?: string;
		red300?: string;
		red400?: string;
		red500?: string;
		red600?: string;
		red700?: string;
		red800?: string;
		red900?: string;
		red950?: string;
		yellow50?: string;
		yellow100?: string;
		yellow200?: string;
		yellow300?: string;
		yellow400?: string;
		yellow500?: string;
		yellow600?: string;
		yellow700?: string;
		yellow800?: string;
		yellow900?: string;
		yellow950?: string;
		green50?: string;
		green100?: string;
		green200?: string;
		green300?: string;
		green400?: string;
		green500?: string;
		green600?: string;
		green700?: string;
		green800?: string;
		green900?: string;
		green950?: string;
		black50?: string;
		black100?: string;
		black200?: string;
		black300?: string;
		black400?: string;
		black500?: string;
		black600?: string;
		black700?: string;
		black800?: string;
		black900?: string;
		black950?: string;
	}
}
declare module '@mui/material/styles' {
	interface PaletteColor {
		main?: string;
		black?: string;
		blue50?: string;
		blue100?: string;
		blue200?: string;
		blue300?: string;
		blue400?: string;
		blue500?: string;
		blue600?: string;
		blue700?: string;
		blue800?: string;
		blue900?: string;
		blue950?: string;
		orange50?: string;
		orange100?: string;
		orange200?: string;
		orange300?: string;
		orange400?: string;
		orange500?: string;
		orange600?: string;
		orange700?: string;
		orange800?: string;
		orange900?: string;
		orange950?: string;
		red50?: string;
		red100?: string;
		red200?: string;
		red300?: string;
		red400?: string;
		red500?: string;
		red600?: string;
		red700?: string;
		red800?: string;
		red900?: string;
		red950?: string;
		yellow50?: string;
		yellow100?: string;
		yellow200?: string;
		yellow300?: string;
		yellow400?: string;
		yellow500?: string;
		yellow600?: string;
		yellow700?: string;
		yellow800?: string;
		yellow900?: string;
		yellow950?: string;
		green50?: string;
		green100?: string;
		green200?: string;
		green300?: string;
		green400?: string;
		green500?: string;
		green600?: string;
		green700?: string;
		green800?: string;
		green900?: string;
		green950?: string;
		black50?: string;
		black100?: string;
		black200?: string;
		black300?: string;
		black400?: string;
		black500?: string;
		black600?: string;
		black700?: string;
		black800?: string;
		black900?: string;
		black950?: string;
	}
}
declare module '@mui/material/styles' {
	interface Palette {
		base: Palette['primary'];
		neutral: Palette['primary'];
	}

	interface PaletteOptions {
		base?: Palette['primary'];
		neutral?: PaletteOptions['primary'];
	}
}

// Custom
let theme = createTheme({
	spacing: 8,
	typography: {
		fontFamily,
		allVariants: {
			fontFamily
		},
		// display1
		display1_regular: {
			fontWeight: 400,
			fontSize: 48,
			lineHeight: '5.6rem',
			display: 'block'
		},
		display1_medium: {
			fontWeight: 500,
			fontSize: 48,
			lineHeight: '5.6rem',
			display: 'block'
		},
		display1_semibold: {
			fontWeight: 600,
			fontSize: 48,
			lineHeight: '5.6rem',
			display: 'block'
		},
		display1_bold: {
			fontWeight: 700,
			fontSize: 48,
			lineHeight: '5.6rem',
			display: 'block'
		},
		// display2
		display2_regular: {
			fontWeight: 400,
			fontSize: 36,
			lineHeight: '4.8rem',
			display: 'block'
		},
		display2_medium: {
			fontWeight: 500,
			fontSize: 36,
			lineHeight: '4.8rem',
			display: 'block'
		},
		display2_semibold: {
			fontWeight: 600,
			fontSize: 36,
			lineHeight: '4.8rem',
			display: 'block'
		},
		display2_bold: {
			fontWeight: 700,
			fontSize: 36,
			lineHeight: '4.8rem',
			display: 'block'
		},
		// heading1
		heading1_regular: {
			fontWeight: 400,
			fontSize: 32,
			lineHeight: '4rem',
			display: 'block'
		},
		heading1_medium: {
			fontWeight: 500,
			fontSize: 32,
			lineHeight: '4rem',
			display: 'block'
		},
		heading1_semibold: {
			fontWeight: 600,
			fontSize: 32,
			lineHeight: '4rem',
			display: 'block'
		},
		heading1_bold: {
			fontWeight: 700,
			fontSize: 32,
			lineHeight: '4rem',
			display: 'block'
		},
		// heading2
		heading2_regular: {
			fontWeight: 400,
			fontSize: 28,
			lineHeight: '3.6rem',
			display: 'block'
		},
		heading2_medium: {
			fontWeight: 500,
			fontSize: 28,
			lineHeight: '3.6rem',
			display: 'block'
		},
		heading2_semibold: {
			fontWeight: 600,
			fontSize: 28,
			lineHeight: '3.6rem',
			display: 'block'
		},
		heading2_bold: {
			fontWeight: 700,
			fontSize: 28,
			lineHeight: '3.6rem',
			display: 'block'
		},
		// title1
		title1_regular: {
			fontWeight: 400,
			fontSize: 24,
			lineHeight: '2.8rem',
			display: 'block'
		},
		title1_medium: {
			fontWeight: 500,
			fontSize: 24,
			lineHeight: '2.8rem',
			display: 'block'
		},
		title1_semibold: {
			fontWeight: 600,
			fontSize: 24,
			lineHeight: '2.8rem',
			display: 'block'
		},
		title1_bold: {
			fontWeight: 700,
			fontSize: 24,
			lineHeight: '2.8rem',
			display: 'block'
		},
		// title2
		title2_regular: {
			fontWeight: 400,
			fontSize: 20,
			lineHeight: '2.6rem',
			display: 'block'
		},
		title2_medium: {
			fontWeight: 500,
			fontSize: 20,
			lineHeight: '2.6rem',
			display: 'block'
		},
		title2_semibold: {
			fontWeight: 600,
			fontSize: 20,
			lineHeight: '2.6rem',
			display: 'block'
		},
		title2_bold: {
			fontWeight: 700,
			fontSize: 20,
			lineHeight: '2.6rem',
			display: 'block'
		},
		// title3
		title3_regular: {
			fontWeight: 400,
			fontSize: 18,
			lineHeight: '2.4rem',
			display: 'block'
		},
		title3_medium: {
			fontWeight: 500,
			fontSize: 18,
			lineHeight: '2.4rem',
			display: 'block'
		},
		title3_semibold: {
			fontWeight: 600,
			fontSize: 18,
			lineHeight: '2.4rem',
			display: 'block'
		},
		title3_bold: {
			fontWeight: 700,
			fontSize: 18,
			lineHeight: '2.4rem',
			display: 'block'
		},
		// body1
		body1_regular: {
			fontWeight: 400,
			fontSize: 16,
			lineHeight: '2.2rem',
			display: 'block'
		},
		body1_medium: {
			fontWeight: 500,
			fontSize: 16,
			lineHeight: '2.2rem',
			display: 'block'
		},
		body1_semibold: {
			fontWeight: 600,
			fontSize: 16,
			lineHeight: '2.2rem',
			display: 'block'
		},
		body1_bold: {
			fontWeight: 700,
			fontSize: 16,
			lineHeight: '2.2rem',
			display: 'block'
		},
		// body2
		body2_regular: {
			fontWeight: 400,
			fontSize: 14,
			lineHeight: '1.8rem',
			display: 'block'
		},
		body2_medium: {
			fontWeight: 500,
			fontSize: 14,
			lineHeight: '1.8rem',
			display: 'block'
		},
		body2_semibold: {
			fontWeight: 600,
			fontSize: 14,
			lineHeight: '1.8rem',
			display: 'block'
		},
		body2_bold: {
			fontWeight: 700,
			fontSize: 14,
			lineHeight: '1.8rem',
			display: 'block'
		},
		// subbody1
		subbody1_regular: {
			fontWeight: 400,
			fontSize: 12,
			lineHeight: '1.6rem',
			display: 'block'
		},
		subbody1_medium: {
			fontWeight: 500,
			fontSize: 12,
			lineHeight: '1.6rem',
			display: 'block'
		},
		subbody1_semibold: {
			fontWeight: 600,
			fontSize: 12,
			lineHeight: '1.6rem',
			display: 'block'
		},
		subbody1_bold: {
			fontWeight: 700,
			fontSize: 12,
			lineHeight: '1.6rem',
			display: 'block'
		},
		// subbody2
		subbody2_regular: {
			fontWeight: 400,
			fontSize: 10,
			lineHeight: '1.4rem',
			display: 'block'
		},
		subbody2_medium: {
			fontWeight: 500,
			fontSize: 10,
			lineHeight: '1.4rem',
			display: 'block'
		},
		subbody2_semibold: {
			fontWeight: 600,
			fontSize: 10,
			lineHeight: '1.4rem',
			display: 'block'
		},
		subbody2_bold: {
			fontWeight: 700,
			fontSize: 10,
			lineHeight: '1.4rem',
			display: 'block'
		},
		// subbody3
		subbody3_regular: {
			fontWeight: 400,
			fontSize: 8,
			lineHeight: '1.2rem',
			display: 'block'
		},
		subbody3_medium: {
			fontWeight: 500,
			fontSize: 8,
			lineHeight: '1.2rem',
			display: 'block'
		},
		subbody3_semibold: {
			fontWeight: 600,
			fontSize: 8,
			lineHeight: '1.2rem',
			display: 'block'
		},
		subbody3_bold: {
			fontWeight: 700,
			fontSize: 8,
			lineHeight: '1.2rem',
			display: 'block'
		}
	},
	palette: {
		primary: {
			main: '#213970',
			blue50: '#F0F7FE',
			blue100: '#DEEBFB',
			blue200: '#C4DEF9',
			blue300: '#9BC9F5',
			blue400: '#6CACEE',
			blue500: '#498CE8',
			blue600: '#3470DC',
			blue700: '#498CE8',
			blue800: '#294BA4',
			blue900: '#213970',
			blue950: '#1C2A4F',
			orange50: '#FEF6EE',
			orange100: '#FEE9D6',
			orange200: '#FBD0AD',
			orange300: '#F9AF78',
			orange400: '#F58342',
			orange500: '#F26522',
			orange600: '#E34813',
			orange700: '#BC3412',
			orange800: '#962B16',
			orange900: '#792615',
			orange950: '#411009'
		},
		error: {
			main: '#F04438',
			red50: '#FEF3F2',
			red100: '#FEE4E2',
			red200: '#FFCDC9',
			red300: '#FDAAA4',
			red400: '#F97970',
			red500: '#F04438',
			red600: '#DE3024',
			red700: '#BB241A',
			red800: '#9A221A',
			red900: '#80231C',
			red950: '#460D09'
		},
		warning: {
			main: '#FFFBED',
			yellow50: '#FFFBED',
			yellow100: '#FFF7D4',
			yellow200: '#FFEBA8',
			yellow300: '#FFDA71',
			yellow400: '#FFBF38',
			yellow500: '#FDA712',
			yellow600: '#F79009',
			yellow700: '#C56A09',
			yellow800: '#9D530F',
			yellow900: '#7E4510',
			yellow950: '#442106'
		},
		success: {
			main: '#EDFCF3',
			green50: '#EDFCF3',
			green100: '#D3F8E0',
			green200: '#AAF0C7',
			green300: '#73E2A7',
			green400: '#3BCC84',
			green500: '#17B26A',
			green600: '#0B9055',
			green700: '#097347',
			green800: '#0A5B39',
			green900: '#094B31',
			green950: '#042A1C'
		},
		background: {
			default: '#FAFAFA',
			paper: '#FFFFFF'
		}
	},
	components: {
		MuiTypography: {
			defaultProps: {
				variantMapping: {
					heading1: 'h4',
					heading2: 'h4',
					heading3: 'h4',
					title1: 'h4',
					title2: 'h4',
					title3: 'h4',
					title4: 'h4',
					body1: 'h4',
					body2: 'h4',
					body3: 'h4',
					body4: 'h4',
					body5: 'h4',
					subbody1: 'h4',
					subbody2: 'h4'
				}
			}
		}
	}
});

theme = createTheme(theme, {
	palette: {
		base: theme.palette.augmentColor({
			color: {
				main: '#FFFFFF',
				black: '#000000'
			},
			name: 'base'
		}),
		neutral: theme.palette.augmentColor({
			color: {
				main: '#F7F7F8',
				black50: '#F7F7F8',
				black100: '#EEEEF0',
				black200: '#DADADD',
				black300: '#B9BAC0',
				black400: '#92939E',
				black500: '#757682',
				black600: '#5F5F6A',
				black700: '#4D4D57',
				black800: '#42424A',
				black900: '#3A3A40',
				black950: '#141416'
			},
			name: 'neutral'
		})
	}
});

//custom button
const primaryButtonStyle = {
	backgroundColor: 'rgba(242, 101, 34, 1)',
	color: theme.palette.neutral.main,
	boxShadow: 'none',
	padding: '1.2rem 2.4rem',
	height: '4.2rem',
	borderRadius: '8px',
	'&:hover': {
		backgroundColor: theme.palette.primary.orangeTangerine,
		boxShadow: 'none'
	},
	'&:focus': {
		outline: 'none',
		boxShadow: 'none'
	}
};
const secondaryButtonStyle = {
	backgroundColor: theme.palette.base.main,
	boxShadow: 'none',
	border: '1px solid rgba(242, 101, 34, 1)',
	color: 'rgba(242, 101, 34, 1)',
	padding: '1.2rem 2.4rem',
	height: '4.2rem',
	borderRadius: '8px',
	'&:hover': {
		color: 'rgba(242, 101, 34, 1)',
		border: '1px solid  rgba(242, 101, 34, 1)',
		backgroundColor: theme.palette.base.main,
		boxShadow: 'none'
	},
	'&:focus': {
		border: '1px solid  rgba(242, 101, 34, 1)',
		color: 'rgba(242, 101, 34, 1)',
		boxShadow: 'none'
	}
};
const TextButtonStyle = {
	color: '#C6C6C6',
	padding: '0.8rem 1.6rem',
	fontFamily: 'Inter-bold',
	height: '4.6rem',
	borderRadius: '8px',
	'&:hover': {
		color: '#C6C6C6',
		backgroundColor: 'transparent'
	},
	'&:focus': {
		color: '#C6C6C6',
		backgroundColor: 'transparent',
		outline: 'none'
	}
};
const primaryDangerousButtonStyle = {
	// backgroundColor: theme.palette.semantic.main,
	// color: theme.palette.neutral.main,
	// padding: '0.8rem 1.6rem',
	// fontFamily: 'Inter-bold',
	// borderRadius: '8px',
	// '&:focus': {
	// 	outline: 'none'
	// }
};
const secondaryDangerousButtonStyle = {
	// border: '1px solid #C6C6C6',
	// color: theme.palette.semantic.main,
	// backgroundColor: theme.palette.neutral.main,
	// padding: '0.8rem 1.6rem',
	// fontFamily: 'Inter-bold',
	// borderRadius: '8px',
	// '&:hover': {
	// 	backgroundColor: theme.palette.neutral.main,
	// 	border: 'none',
	// 	outline: '1px solid  #C6C6C6'
	// }
};
const textDangerousButtonStyle = {
	// color: theme.palette.semantic.main,
	// padding: '0.8rem 1.6rem',
	// fontFamily: 'Inter-bold',
	// borderRadius: '8px',
	// '&:hover': {
	// 	backgroundColor: 'transparent'
	// },
	// '&:focus': {
	// 	backgroundColor: 'transparent',
	// 	outline: 'none'
	// }
};
theme = createTheme(theme, {
	components: {
		// Button
		MuiButton: {
			defaultProps: {},
			styleOverrides: {
				root: {
					textTransform: 'none'
				}
			},
			variants: [
				//variants for primary button
				{
					props: { variant: 'contained', size: 'large' },
					style: {
						fontSize: '1.6rem',
						height: '4.4rem',
						...primaryButtonStyle
					}
				},
				{
					props: { variant: 'contained', size: 'medium' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...primaryButtonStyle
					}
				},
				{
					props: { variant: 'contained', size: 'small' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...primaryButtonStyle
					}
				},
				// variants for secondary button
				{
					props: { variant: 'outlined', size: 'large' },
					style: {
						fontSize: '1.6rem',
						height: '4.4rem',
						...secondaryButtonStyle
					}
				},
				{
					props: { variant: 'outlined', size: 'medium' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...secondaryButtonStyle
					}
				},
				{
					props: { variant: 'outlined', size: 'small' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...secondaryButtonStyle
					}
				},
				// variants for text button
				{
					props: { variant: 'text', size: 'large' },
					style: {
						fontSize: '1.6rem',
						height: '4.4rem',
						...TextButtonStyle
					}
				},
				{
					props: { variant: 'text', size: 'medium' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...TextButtonStyle
					}
				},
				{
					props: { variant: 'text', size: 'small' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...TextButtonStyle
					}
				},
				// variants for dangerous button
				{
					props: { variant: 'contained', size: 'large', color: 'error' },
					style: {
						fontSize: '1.6rem',
						height: '4.4rem',
						...primaryDangerousButtonStyle
					}
				},
				{
					props: { variant: 'contained', size: 'medium', color: 'error' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...primaryDangerousButtonStyle
					}
				},
				{
					props: { variant: 'contained', size: 'small', color: 'error' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...primaryDangerousButtonStyle
					}
				},
				{
					props: { variant: 'outlined', size: 'large', color: 'error' },
					style: {
						fontSize: '1.6rem',
						height: '4.4rem',
						...secondaryDangerousButtonStyle
					}
				},
				{
					props: { variant: 'outlined', size: 'medium', color: 'error' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...secondaryDangerousButtonStyle
					}
				},
				{
					props: { variant: 'outlined', size: 'small', color: 'error' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...secondaryDangerousButtonStyle
					}
				},
				{
					props: { variant: 'text', size: 'large', color: 'error' },
					style: {
						fontSize: '1.6rem',
						height: '4.4rem',
						...textDangerousButtonStyle
					}
				},
				{
					props: { variant: 'text', size: 'medium', color: 'error' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...textDangerousButtonStyle
					}
				},
				{
					props: { variant: 'text', size: 'small', color: 'error' },
					style: {
						fontSize: '1.4rem',
						height: '4rem',
						...textDangerousButtonStyle
					}
				}
			]
		},

		// Card
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.05)',
					borderRadius: '1.6rem'
				}
			}
		},

		// TextField
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiInputBase-input': {
						fontFamily: 'Inter',
						fontWeight: 600,
						fontSize: '1.4rem'
					},
					'& .MuiInputBase-root': {
						'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
							borderColor: 'rgba(0, 0, 0, 0.87)'
						}
					}
				}
			}
		}
	}
});

export default theme;
