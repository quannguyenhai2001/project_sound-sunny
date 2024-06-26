import { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, useMediaQuery } from '@mui/material';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useStyles } from './Sidebar.styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useRouter from '@/routes/router-hook';
import { sidebarRoutes } from '@/routes/sidebar-routes';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

const drawerWidth = 256;
const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen
	}),
	overflowX: 'hidden'
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`
	}
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme)
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme)
	})
}));
const SideBar = () => {
	const location = useLocation();

	const is425px = useMediaQuery('(max-width:425px)');
	const classes = useStyles();
	const { navigate, setActiveRoute, routes, activeRoute } = useRouter();
	const [open] = useState(() => (!is425px ? true : false));
	const [expanded, setExpanded] = useState(false);

	const handleExpansion = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};
	useEffect(() => {
		let pathName = '';
		let index: any = null;
		for (let i = 0; i < routes.length; i++) {
			const item = routes[i];
			if (item.path === location.pathname) {
				pathName = item.path;
				index = i;
				break;
			}

			if (item.children && item.children.length > 0) {
				for (let j = 0; j < item.children.length; j++) {
					if (item.children[j].path === location.pathname) {
						pathName = item.children[j].path;
						index = j;
						break;
					}
				}

				break;
			}

			pathName = '';
		}
		setActiveRoute({ path: pathName, index });
	}, [location, routes, setActiveRoute]);

	const handleNavigate = (path: string) => {
		navigate(path);
	};
	return (
		<Box>
			<Drawer
				variant='permanent'
				open={open}
				sx={{
					'&.MuiDrawer-root': {
						position: 'relative',
						'& >.MuiPaper-root': {
							overflow: 'visible',
							background: '#EBEBEB',
							boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
							border: 'none',
							padding: open ? '2.4rem 1.6rem 0 1.6rem' : 0,
							paddingTop: '8.4rem',
							'& > div:first-of-type': {
								display: 'flex',
								justifyContent: 'center !important',
								alignItems: 'center',
								width: '100%',
								marginBottom: open ? '2.2rem' : 0
							}
						}
					}
				}}
			>
				<List
					sx={{
						'&.MuiList-root': {
							padding: 0
						}
					}}
				>
					{sidebarRoutes.map((primaryLevelItem) => {
						return (
							<Box key={primaryLevelItem.label}>
								{primaryLevelItem.children && primaryLevelItem.children.length > 0 ? (
									<Accordion
										expanded={expanded}
										onChange={handleExpansion}
										sx={{
											'&.MuiAccordion-root': {
												boxShadow: 'none',
												background: 'none',
												'& .MuiAccordionSummary-root': {
													minHeight: '0',
													padding: '1.2rem 0.8rem',
													'&:hover': {
														backgroundColor: 'white',
														borderRadius: '0.8rem'
													},
													'& .MuiAccordionSummary-content': {
														margin: 0
													}
												},
												'& .MuiButtonBase-root.MuiAccordionSummary-root.Mui-expanded': {
													minHeight: '4.8rem'
												},
												'& .MuiAccordionSummary-content.Mui-expanded': {
													margin: 0
												}
											}
										}}
									>
										<AccordionSummary
											expandIcon={<ExpandMoreIcon />}
											aria-controls='panel1-content'
											id='panel1-header'
											sx={{
												'&.MuiAccordionSummary-root': {
													padding: 0
												}
											}}
										>
											<Box sx={{ display: 'flex', alignItems: 'center', gap: '1.4rem' }}>
												<Box
													sx={{
														'& path': {
															fill: activeRoute?.path.includes(primaryLevelItem.path)
																? 'rgba(41, 45, 50, 1)'
																: 'rgba(114, 114, 114, 1)'
														},
														...(primaryLevelItem.children &&
															primaryLevelItem.children.length > 0 && {
																position: 'relative',
																transition: '0.4s ',
																'&:before': {
																	opacity: activeRoute?.path.includes(primaryLevelItem.path) && expanded ? 1 : 0,
																	content: '""',
																	zIndex: '1000',
																	position: 'absolute',
																	top: '3.0rem',
																	left: '1.2rem',
																	height:
																		activeRoute?.path.includes(primaryLevelItem.path) &&
																		`${3.7 + activeRoute.index * 5.3}rem`,
																	width: '1.5rem',
																	borderLeft: '1px solid #B0B0B0',
																	borderBottom: '1px solid #B0B0B0',
																	borderBottomLeftRadius: '0.8rem',
																	transition: '0.2s '
																},
																'&:after': {
																	content: '""',
																	opacity: activeRoute?.path.includes(primaryLevelItem.path) && expanded ? 1 : 0,
																	zIndex: '1000',
																	position: 'absolute',
																	top:
																		activeRoute?.path.includes(primaryLevelItem.path) &&
																		`${6.25 + activeRoute.index * 5.3}rem`,
																	left: '1.9rem',
																	height: '0.8rem',
																	width: '0.8rem',
																	borderRight: '1px solid #B0B0B0',
																	borderBottom: '1px solid #B0B0B0',
																	transform: 'rotate(-45deg)',
																	transition: '0.2s '
																}
															})
													}}
												>
													<primaryLevelItem.icon />
												</Box>

												<ListItemText
													className={classes.itemTextRoot}
													sx={{
														'& .MuiTypography-root': {
															color: activeRoute?.path.includes(primaryLevelItem.path)
																? 'rgba(41, 45, 50, 1)'
																: 'rgba(114, 114, 114, 1)'
														}
													}}
													primary={primaryLevelItem.name}
												/>
											</Box>
										</AccordionSummary>
										<AccordionDetails sx={{ '&.MuiAccordionDetails-root': { padding: 0 } }}>
											{primaryLevelItem.children.map((secondaryLevelItem: any) => {
												return (
													<Box key={secondaryLevelItem.label} onClick={() => handleNavigate(secondaryLevelItem.path)}>
														<ListItem
															disablePadding
															sx={{
																display: 'block',
																padding: '1.2rem 0.8rem 1.2rem 4.5rem',
																borderRadius: '0.8rem',
																backgroundColor:
																	activeRoute?.path === secondaryLevelItem.path ||
																	location.pathname === secondaryLevelItem.path
																		? 'rgba(255, 255, 255, 1)'
																		: '',
																'&:hover': {
																	backgroundColor: 'white'
																}
															}}
														>
															<ListItemButton
																className={classes.listItemRoot}
																sx={{
																	padding: 0
																}}
															>
																<Box sx={{ display: 'flex' }}>
																	<ListItemText
																		sx={{
																			'& .MuiTypography-root': {
																				color:
																					activeRoute?.path === secondaryLevelItem.path ||
																					location.pathname === secondaryLevelItem.path
																						? 'rgba(41, 45, 50, 1)'
																						: 'rgba(114, 114, 114, 1)'
																			}
																		}}
																		className={classes.itemTextRoot}
																		primary={secondaryLevelItem.name}
																	/>
																</Box>
															</ListItemButton>
														</ListItem>
													</Box>
												);
											})}
										</AccordionDetails>
									</Accordion>
								) : (
									<ListItem
										disablePadding
										sx={{
											display: 'block',
											padding: '1.2rem 0.8rem',
											borderRadius: '0.8rem',
											backgroundColor:
												activeRoute?.path === primaryLevelItem.path || location.pathname === primaryLevelItem.path
													? 'rgba(255, 255, 255, 1)'
													: '',
											'&:hover': {
												backgroundColor: 'white'
											}
										}}
										onClick={() => handleNavigate(primaryLevelItem.path)}
									>
										<ListItemButton
											className={classes.listItemRoot}
											sx={{
												display: 'flex',
												justifyContent: 'space-between',
												padding: 0
											}}
										>
											<Box sx={{ display: 'flex', alignItems: 'center' }}>
												<ListItemIcon
													sx={{
														'& path': {
															fill:
																activeRoute?.path === primaryLevelItem.path ||
																location.pathname === primaryLevelItem.path
																	? 'rgba(41, 45, 50, 1)'
																	: 'rgba(114, 114, 114, 1)'
														}
													}}
												>
													<primaryLevelItem.icon />
												</ListItemIcon>
												<ListItemText
													sx={{
														'& .MuiTypography-root': {
															color:
																activeRoute?.path === primaryLevelItem.path ||
																location.pathname === primaryLevelItem.path
																	? 'rgba(41, 45, 50, 1)'
																	: 'rgba(114, 114, 114, 1)'
														}
													}}
													className={classes.itemTextRoot}
													primary={primaryLevelItem.name}
												/>
											</Box>
										</ListItemButton>
									</ListItem>
								)}
							</Box>
						);
					})}
				</List>
			</Drawer>
		</Box>
	);
};

export default SideBar;
