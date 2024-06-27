export const VISUAL_1 = {
	'visual1-1': {
		key: 'visual1-1',
		code: `
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
  `
	}
};
