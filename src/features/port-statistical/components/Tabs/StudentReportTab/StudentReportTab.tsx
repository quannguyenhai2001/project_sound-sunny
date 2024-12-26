import DataTable from '@/components/organisms/DataTable/DataTable';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Card, Fade, TextField } from '@mui/material';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { useState } from 'react';
interface StudentReportTabProps {
	data: any;
	columns: any;
}
const StudentReportTab = ({ data, columns }: StudentReportTabProps) => {
	const [isOpenSearch, setIsOpenSearch] = useState(false);
	return (
		<Box>
			<Card
				sx={{
					'&.MuiPaper-root.MuiCard-root': {
						height: '6.4rem',
						borderRadius: '0',
						padding: '0 1.6rem',
						borderTopLeftRadius: '1.2rem',
						display: 'flex',
						alignItems: 'center',
						borderTopRightRadius: '1.2rem',
						border: '1px solid  #C6C6C6',
						borderBottom: 'none',
						boxShadow: 'none'
					}
				}}
			>
				{!isOpenSearch ? (
					<Button
						onClick={() => setIsOpenSearch(true)}
						size='small'
						sx={{
							color: 'rgba(155, 155, 155, 1)',
							border: '1px solid #C6C6C6',
							'&:hover': {
								color: 'C6C6C6',
								border: '1px solid #C6C6C6'
							}
						}}
						variant='outlined'
					>
						<Box sx={{ display: 'flex', gap: '1.6rem' }}>
							<SearchIcon />
							<FilterAltOutlinedIcon />
						</Box>
					</Button>
				) : (
					<Fade in={isOpenSearch}>
						<Box sx={{ display: 'grid', width: '100%', gridTemplateColumns: '10fr 1fr', gap: '1.6rem' }}>
							<TextField
								InputProps={{
									startAdornment: <SearchIcon sx={{ marginRight: '0.8rem' }} />
								}}
								placeholder='Tìm kiếm'
								size='small'
								variant='outlined'
								autoFocus
								fullWidth
							/>
							<Button
								onClick={() => setIsOpenSearch(false)}
								size='small'
								sx={{
									'&.MuiButtonBase-root': {
										color: 'black',
										border: '1px solid #C6C6C6',
										'&:hover': {
											color: 'C6C6C6',
											border: '1px solid #C6C6C6'
										}
									}
								}}
								variant='outlined'
							>
								Huỷ bỏ
							</Button>
						</Box>
					</Fade>
				)}
			</Card>
			<DataTable
				columns={columns}
				customTableStyles={{
					'&.MuiBox-root': {
						'& .MuiTableContainer-root': {
							borderRadius: '0',
							borderBottomLeftRadius: '1.2rem',
							borderBottomRightRadius: '1.2rem',
							'& .MuiTable-root': {
								'& .MuiTableHead-root': {
									'& .MuiTableRow-root': {
										'& .MuiTableCell-root': {
											padding: '1.5rem 2rem'
										}
									}
								},
								'& .MuiTableBody-root': {
									'& .MuiTableRow-root': {
										'& .MuiTableCell-root': {
											padding: '1.5rem 2rem'
										}
									}
								}
							}
						}
					}
				}}
				data={data}
			/>
		</Box>
	);
};

export default StudentReportTab;
