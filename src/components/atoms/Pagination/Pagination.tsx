import React from 'react';
import { Box, Pagination as MuiPagination } from '@mui/material';
import theme from '@/themes/theme.main';

type PaginationProps = {
	page: number;
	handleChangePage: (event: React.ChangeEvent<unknown>, value: number) => void;
	total: number;
	customStyles?: Record<string, any>;
};

function Pagination({ page, total, handleChangePage, customStyles }: PaginationProps) {
	return (
		<Box
			sx={{
				position: 'fixed',
				zIndex: '9999999999',
				bottom: theme.spacing(3),
				right: theme.spacing(3),
				'& .MuiPagination-root': {
					'& .MuiButtonBase-root': {
						backgroundColor: 'rgba(255, 255, 255, 1)',
						borderRadius: '4px',
						color: 'rgba(0, 0, 0, 0.25)',

						'&.MuiPaginationItem-previousNext': {
							color: 'rgba(0, 0, 0, 0.85)'
						}
					},
					'& .MuiButtonBase-root.Mui-selected': {
						backgroundColor: '#FFFFFF',
						borderRadius: '4px',
						color: '#223671',
						border: '1px solid #223671'
					}
				},
				...customStyles
			}}
		>
			<MuiPagination count={total} page={page} onChange={handleChangePage} />
		</Box>
	);
}

export default Pagination;
