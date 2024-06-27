import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Paper, IconButton } from '@mui/material';
import cat from '../../../../assets/images/cat.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackTitle from '@/components/atoms/BackTitle/BackTitle';
import { CopyAll } from '@mui/icons-material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { solarizedlight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { VISUAL_1 } from '@/samples/visuals/visual-1.samples';
import Joyride from 'react-joyride';
import { useState } from 'react';

const CSSFeaturesScreen = () => {
	const copyToClipboard = (code: string) => {
		navigator.clipboard.writeText(code);
	};
	const [steps] = useState([
		{
			target: '.topBox',
			content: (
				<div>
					<h3>Menu Button</h3>
					<p>This button opens the menu where you can access various options.</p>
					<p>Custom content can include any JSX elements you need.</p>
				</div>
			)
		},
		{
			target: '.profile-button',
			content: 'This is your profile button. Click here to view your profile.'
		}
	]);
	return (
		<Box>
			<Box className='topBox'>
				<BackTitle title='VISUAL 1' customStyles={{ margin: 0 }} />
			</Box>
			<Accordion sx={{ marginBottom: '1rem' }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
					- Visual 1.1
				</AccordionSummary>
				<AccordionDetails sx={{ overflow: 'auto', height: '80rem' }}>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							gap: '1rem',
							alignItems: 'center',
							justifyContent: 'center',
							transformStyle: 'preserve-3d',
							perspective: '1000px',
							mb: '5rem'
						}}
					>
						{Array.from({ length: 6 }).map((_, index) => (
							<Card
								key={index}
								sx={{
									maxWidth: 250,
									height: 320,
									perspective: '1000px',
									transformStyle: 'preserve-3d',
									transition: '0.5s',
									filter: 'brightness(0.2)',
									'&:hover': {
										filter: 'brightness(1)',
										transform: 'translateZ(230px)',
										'& + *': {
											filter: 'brightness(0.6)',
											transform: 'translateZ(150px) rotateY(40deg)'
										},
										'& + * + *': {
											filter: 'brightness(0.4)',
											transform: 'translateZ(70px) rotateY(20deg)'
										},
										'& + * + * + *': {
											filter: 'brightness(0.2)',
											transform: 'translateZ(30px) rotateY(10deg)'
										}
									},
									'&:has(+ * :hover)': {
										filter: 'brightness(0.6)',
										transform: 'translateZ(150px) rotateY(-40deg)'
									},
									'&:has(+ * + * :hover)': {
										filter: 'brightness(0.4)',
										transform: 'translateZ(70px) rotateY(-20deg)'
									},
									'&:has(+ * + * + *:hover)': {
										filter: 'brightness(0.2)',
										transform: 'translateZ(30px) rotateY(-10deg)'
									}
								}}
							>
								<CardActionArea>
									<CardMedia component='img' height='200' image={cat} alt='cat' sx={{ objectFit: 'cover' }} />
									<CardContent>
										<Typography gutterBottom variant='h5' component='div'>
											Lizard
										</Typography>
										<Typography variant='body2' color='text.secondary'>
											Lizards are a widespread group of squamate reptiles
										</Typography>
									</CardContent>
								</CardActionArea>
							</Card>
						))}
					</Box>
					<Box>
						<Paper elevation={3} sx={{ padding: '10px', backgroundColor: '#f9f9f9' }}>
							<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
								<Typography variant='h6'>Code Sample:</Typography>
								<IconButton onClick={() => copyToClipboard(VISUAL_1['visual1-1']['code'])}>
									<CopyAll />
								</IconButton>
							</Box>
							<SyntaxHighlighter language='javascript' style={solarizedlight}>
								{VISUAL_1['visual1-1']['code']}
							</SyntaxHighlighter>
						</Paper>
					</Box>
				</AccordionDetails>
			</Accordion>
			<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
				<Joyride steps={steps} continuous={true} showSkipButton={true} showProgress={true} run={true} />
			</Box>
		</Box>
	);
};

export default CSSFeaturesScreen;
