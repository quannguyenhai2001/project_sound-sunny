import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Paper } from '@mui/material';
import cat from '../../../../assets/images/cat.png';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BackTitle from '@/components/atoms/BackTitle/BackTitle';

const VisualScreen = () => (
	<Box>
		<BackTitle title='VISUAL 1' customStyles={{ margin: 0 }} />
		<Accordion sx={{ marginBottom: '1rem' }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1-content' id='panel1-header'>
				- Visual 1.1
			</AccordionSummary>
			<AccordionDetails sx={{ overflow: 'auto', height: '600px' }}>
				<Box
					sx={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '1rem',
						alignItems: 'center',
						justifyContent: 'center',
						transformStyle: 'preserve-3d',
						perspective: '1000px'
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
					<Paper elevation={3} sx={{ padding: '10px', backgroundColor: '#272822', color: '#f8f8f2' }}>
						<Typography component='pre' sx={{ overflow: 'auto' }}>
							<code>{`
    import React from 'react';

    const HelloWorld = () => {
      return (
        <div>
          <h1>Hello, world!</h1>
        </div>
      );
    };

    export default HelloWorld;
  `}</code>
						</Typography>
					</Paper>
				</Box>
			</AccordionDetails>
		</Accordion>
	</Box>
);

export default VisualScreen;
