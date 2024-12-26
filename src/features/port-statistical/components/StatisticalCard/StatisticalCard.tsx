import { Box, Card, CardContent, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';
import { useStyles } from './StatisticalCard.styles';
import gsap from 'gsap';
import Stonk from '@/assets/icons/stonk.svg?react';

interface StatisticalCardProps {
	data: any;
}

const StatisticalCard = ({ data }: StatisticalCardProps) => {
	const classes = useStyles();
	const StaticValueRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		gsap.fromTo(
			{ innerText: 0 },
			{ innerText: data.value },
			{
				duration: 0.7,
				snap: { innerText: 1 },
				ease: 'power1.out'
			}
		);
	}, [data]);

	return (
		<Card>
			<CardContent className={classes.cardContentRoot}>
				<Box className={classes.boxContent}>
					<Box className={classes.icon}>
						<Box>
							<img alt='icon' src={data.icon} />
						</Box>
					</Box>
					<Box>
						<Typography
							sx={{ color: '#868686', fontSize: '1.3rem', fontWeight: '550', mb: '1.4rem' }}
							variant='subbody2'
						>
							{data.title}
						</Typography>
						<Typography ref={StaticValueRef} variant='title2'>
							{data.value}
						</Typography>
						<Box
							sx={{
								marginTop: '1.2rem',
								backgroundColor: '#DEFBE6',
								borderRadius: '1.6rem',
								width: 'fit-content',
								p: '0.4rem 0.8rem',
								lineHeight: '0'
							}}
						>
							<Stonk />
							<Typography component={'span'} sx={{ marginLeft: '0.5rem' }} variant='subbody1'>
								10%
							</Typography>
						</Box>
					</Box>
				</Box>
				<Box></Box>
			</CardContent>
		</Card>
	);
};

export default StatisticalCard;
