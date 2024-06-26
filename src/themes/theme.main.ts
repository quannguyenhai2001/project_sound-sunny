import { createTheme } from '@mui/material';

const fontFamily = ['Inter', 'Inter-Medium', 'Montserrat', 'sans-serif'].join(',');

// Update the Typography's variant prop options
declare module '@mui/material/styles' {
	interface TypographyVariants {
		heading1: React.CSSProperties;
		heading2: React.CSSProperties;
		heading3: React.CSSProperties;
		title1: React.CSSProperties;
		title2: React.CSSProperties;
		title3: React.CSSProperties;
		title4: React.CSSProperties;
		title5: React.CSSProperties;
		title6: React.CSSProperties;
		body1: React.CSSProperties;
		body2: React.CSSProperties;
		body3: React.CSSProperties;
		body4: React.CSSProperties;
		body5: React.CSSProperties;
		subbody1: React.CSSProperties;
		subbody2: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		heading1: React.CSSProperties;
		heading2: React.CSSProperties;
		heading3: React.CSSProperties;
		title1: React.CSSProperties;
		title2: React.CSSProperties;
		title3: React.CSSProperties;
		title4: React.CSSProperties;
		title5: React.CSSProperties;
		title6: React.CSSProperties;
		body1: React.CSSProperties;
		body2: React.CSSProperties;
		body3: React.CSSProperties;
		body4: React.CSSProperties;
		body5: React.CSSProperties;
		subbody1: React.CSSProperties;
		subbody2: React.CSSProperties;
	}
}
declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		heading1: true;
		heading2: true;
		heading3: true;
		title1: true;
		title2: true;
		title3: true;
		title4: true;
		title5: true;
		title6: true;
		body1: true;
		body2: true;
		body3: true;
		body4: true;
		body5: true;
		subbody1: true;
		subbody2: true;
	}
}

// Update the Palette's color prop options
declare module '@mui/material/styles' {
	interface PaletteColorOptions {
		main?: string;
		light?: string;
		dark?: string;
		contrastText?: string;
		lightBlue?: string;
		Honeydew?: string;
		babyBlue?: string;
		peach?: string;
		apricot?: string;
		darkGreen?: string;
		darkRed?: string;
		skyBlue?: string;
		coral?: string;
		turquoise?: string;
		powderBlue?: string;
		tangerine?: string;
		red?: string;
		amber?: string;
		dodgerBlue?: string;
		green?: string;
		white?: string;
		silver?: string;
		lightGray?: string;
		mediumGray?: string;
		darkGray?: string;
		dimGray?: string;
		gray?: string;
		charcoal?: string;
		coal?: string;
		black?: string;
	}
}
declare module '@mui/material/styles' {
	interface PaletteColor {
		lightBlue?: string;
		Honeydew?: string;
		babyBlue?: string;
		peach?: string;
		apricot?: string;
		darkGreen?: string;
		darkRed?: string;
		skyBlue?: string;
		coral?: string;
		turquoise?: string;
		powderBlue?: string;
		tangerine?: string;
		red?: string;
		amber?: string;
		dodgerBlue?: string;
		green?: string;
		white?: string;
		silver?: string;
		lightGray?: string;
		mediumGray?: string;
		darkGray?: string;
		dimGray?: string;
		gray?: string;
		charcoal?: string;
		coal?: string;
		black?: string;
	}
}
declare module '@mui/material/styles' {
	interface Palette {
		semantic: Palette['primary'];
		neutral: Palette['primary'];
	}

	interface PaletteOptions {
		semantic?: PaletteOptions['primary'];
		neutral?: PaletteOptions['primary'];
	}
}

// Update the Button's color prop options
// declare module '@mui/material/Button' {
// 	interface ButtonPropsColorOverrides {
// 		error?: boolean;
// 	}
// }

//custom new typo and palette
let theme = createTheme({
	spacing: 8,
	typography: {
		fontFamily,
		htmlFontSize: 10,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
		allVariants: {
			fontFamily
		},

		heading1: {
			fontFamily: 'Inter-SemiBold',
			fontSize: 32,
			lineHeight: '4rem'
		},
		heading2: {
			fontFamily: 'Inter-Regular',
			fontSize: 32,
			lineHeight: '4rem'
		},
		heading3: {
			fontFamily: 'Inter-SemiBold',
			fontSize: 28,
			lineHeight: '3.6rem'
		},

		title1: {
			fontFamily: 'Inter-SemiBold',
			fontSize: 24,
			lineHeight: '2.8rem'
		},
		title2: {
			fontFamily: 'Inter-Regular',
			fontSize: 24,
			lineHeight: '2.8rem'
		},
		title3: {
			fontFamily: 'Inter-SemiBold',
			fontSize: 20,
			lineHeight: '2.4rem'
		},
		title4: {
			fontFamily: 'Inter-Regular',
			fontSize: 20,
			lineHeight: '2.4rem'
		},
		title5: {
			fontFamily: 'Inter-SemiBold',
			fontSize: 18,
			lineHeight: '2.4rem'
		},
		title6: {
			fontFamily: 'Inter-Regular',
			fontSize: 18,
			lineHeight: '2.4rem'
		},
		body1: {
			fontFamily: 'Inter-SemiBold',
			fontSize: 16,
			lineHeight: '2rem'
		},
		body2: {
			fontFamily: 'Inter-Regular',
			fontSize: 16,
			lineHeight: '2rem'
		},
		body3: {
			fontFamily: 'Inter-SemiBold',
			fontSize: 14,
			lineHeight: '1.8rem'
		},
		body4: {
			fontFamily: 'Inter-Medium',
			fontSize: 14,
			lineHeight: '1.8rem'
		},
		body5: {
			fontFamily: 'Inter-Light',
			fontSize: 14,
			lineHeight: '1.8rem'
		},
		subbody1: {
			fontFamily: 'Inter-SemiBold',
			fontSize: 12,
			lineHeight: '1.4rem'
		},
		subbody2: {
			fontFamily: 'Inter-Regular',
			fontSize: 12,
			lineHeight: '1.4rem'
		}
	},
	palette: {
		primary: {
			main: '#292D32',
			light: '#F26522'
		},
		secondary: {
			main: '#223671',
			lightBlue: ' #C1D3F0',
			Honeydew: ' #EEFFF5',
			babyBlue: ' #F4FAFF',
			peach: ' #FDF0F0',
			apricot: ' #FDE7DD',
			darkGreen: ' #016D2B',
			darkRed: ' #D00000',
			skyBlue: ' #15D5FF',
			coral: ' #FF6060',
			turquoise: ' #4DFFB4',
			powderBlue: ' #C1D3F0',
			tangerine: ' #FF8946'
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
		semantic: theme.palette.augmentColor({
			color: {
				main: '#DB2828',
				amber: '#FDBC00',
				dodgerBlue: '#0A7CFF',
				green: '#00A03E'
			},
			name: 'semantic'
		}),
		neutral: theme.palette.augmentColor({
			color: {
				main: '#FFFFFF',
				silver: '#E5E5E6',
				lightGray: '#CBCCCD',
				mediumGray: '#B2B2B3',
				darkGray: '#98989A',
				dimGray: '#7E7F81',
				gray: '#656667',
				charcoal: '#4C4C4D',
				coal: '#323334',
				black: '#19191A'
			},
			name: 'neutral'
		})
	}
});

//custom button
const primaryButtonStyle = {
	backgroundColor: theme.palette.primary.light,
	color: theme.palette.neutral.main,
	padding: '0.8rem 1.6rem',
	fontFamily: 'Inter-bold',
	borderRadius: '8px',
	'&:hover': {
		backgroundColor: theme.palette.primary.light
	},
	'&:focus': {
		outline: 'none'
	}
};
const secondaryButtonStyle = {
	border: '1px solid rgba(242, 101, 34, 1)',
	color: 'rgba(242, 101, 34, 1)',
	backgroundColor: theme.palette.neutral.main,
	padding: '0.8rem 1.6rem',
	fontFamily: 'Inter',
	borderRadius: '8px',
	'&:hover': {
		color: 'rgba(242, 101, 34, 1)',
		border: '1px solid  rgba(242, 101, 34, 1)'
	},
	'&:focus': {
		border: '1px solid  rgba(242, 101, 34, 1)',
		color: 'rgba(242, 101, 34, 1)'
	}
};
const TextButtonStyle = {
	color: '#C6C6C6',
	padding: '0.8rem 1.6rem',
	fontFamily: 'Inter-bold',
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
	backgroundColor: theme.palette.semantic.main,
	color: theme.palette.neutral.main,
	padding: '0.8rem 1.6rem',
	fontFamily: 'Inter-bold',
	borderRadius: '8px',
	'&:focus': {
		outline: 'none'
	}
};
const secondaryDangerousButtonStyle = {
	border: '1px solid #C6C6C6',
	color: theme.palette.semantic.main,
	backgroundColor: theme.palette.neutral.main,
	padding: '0.8rem 1.6rem',
	fontFamily: 'Inter-bold',
	borderRadius: '8px',
	'&:hover': {
		backgroundColor: theme.palette.neutral.main,
		border: 'none',
		outline: '1px solid  #C6C6C6'
	}
};
const textDangerousButtonStyle = {
	color: theme.palette.semantic.main,
	padding: '0.8rem 1.6rem',
	fontFamily: 'Inter-bold',
	borderRadius: '8px',
	'&:hover': {
		backgroundColor: 'transparent'
	},
	'&:focus': {
		backgroundColor: 'transparent',
		outline: 'none'
	}
};
theme = createTheme(theme, {
	components: {
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
		MuiCard: {
			styleOverrides: {
				root: {
					boxShadow: '0px 4px 5px 0px rgba(0, 0, 0, 0.05)',
					borderRadius: '1.6rem'
				}
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: {
					'& .MuiInputBase-input': {
						fontFamily: 'Inter'
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
