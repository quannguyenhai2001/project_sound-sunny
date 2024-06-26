import React, { useState } from 'react';
import {
	Box,
	Button,
	Checkbox,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography
} from '@mui/material';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import theme from '@/themes/theme.main.ts';
import { ControlType } from '@/types/common.types';
interface DataTableProps {
	columns?: any;
	data: any;
	options?: any;
	customTableStyles?: any;
}

const DataTable: React.FC<DataTableProps> = ({ data = [], columns, options, customTableStyles }) => {
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [isChecked, setIsChecked] = useState(false);
	const handleSelectRow = (index: number) => {
		const updatedSelectedRows = selectedRows.includes(index)
			? selectedRows.filter((i) => i !== index)
			: [...selectedRows, index];
		setSelectedRows(updatedSelectedRows);
		setIsChecked(updatedSelectedRows.length > 0);
	};
	const handleSelectAll = () => {
		const updatedSelectedRows = selectedRows.length === data.length ? [] : data.map((_row, index: number) => index);
		setSelectedRows(updatedSelectedRows);
		setIsChecked(updatedSelectedRows.length > 0);
	};
	const handleControl = ({ type, data }: { data?: any; type: ControlType }) => {
		switch (type) {
			case 'search':
				options.search.action(data);
				break;
			default:
				break;
		}
	};
	return (
		<Box sx={customTableStyles}>
			<Box>
				{isChecked && options.checkBox && options.checkBox.isShow && (
					<>
						<Button
							variant='outlined'
							sx={{
								mb: '1rem',
								display: 'flex',
								alignItems: 'normal',
								border: 'none'
								// '&:hover': {},
								// '&:focus': {}
							}}
							startIcon={<DeleteOutlineOutlinedIcon />}
							size='medium'
							color='error'
							onClick={() => handleControl({ type: 'multipleDelete' })}
						>
							Xóa {selectedRows.length} mục đã chọn
						</Button>
					</>
				)}
			</Box>
			<TableContainer
				sx={{
					'&.MuiTableContainer-root': {
						border: '1px solid #C6C6C6',
						borderRadius: '1.2rem',
						borderBottom: 'none',
						backgroundColor: 'white',
						'.MuiTypography-root': {
							paddingBottom: 0
						},
						'& .MuiTable-root': {
							'& .MuiTableHead-root': {
								backgroundColor: '#F4FAFF',
								'& .MuiTableRow-root': {
									'& .MuiTableCell-root': {
										padding: '1rem 2rem',
										'& .MuiTypography-root': {
											color: theme.palette.primary.main,
											border: 'none'
										}
									},
									'& .MuiTableCell-root:first-child, .MuiTableCell-root:last-child': {
										overflow: 'hidden'
									},
									'& .MuiTableCell-root:last-child': {
										overflow: 'hidden'
									}
								}
							},
							'& .MuiTableBody-root': {
								'& .MuiTableRow-root': {
									borderBottom: 'none',
									'& .MuiTableCell-root': {
										color: theme.palette.primary.black,
										padding: '1rem 2rem'
									}
								}
							}
						}
					}
				}}
			>
				<Table>
					<TableHead sx={{}}>
						<TableRow>
							{options && options.checkBox && options.checkBox.isShow && (
								<TableCell>
									<Checkbox
										checked={selectedRows.length === data.length && data.length > 0}
										indeterminate={selectedRows.length > 0 && selectedRows.length < data.length}
										onChange={handleSelectAll}
									/>
								</TableCell>
							)}
							{columns.map((col: any, index: number) => {
								return (
									<TableCell key={index} align={col.align} sx={{ '&.MuiTableCell-root': { width: col.width * 1 } }}>
										<Typography variant='body1' sx={{}}>
											{col.title}
										</Typography>
									</TableCell>
								);
							})}
						</TableRow>
					</TableHead>
					<TableBody>
						{data.map((row: any, index: number) => {
							return (
								<TableRow key={index}>
									{options && options.checkBox && options.checkBox.isShow && (
										<TableCell
											sx={{
												'&.MuiTableCell-root': {
													width: '2%',
													padding: '5px'
												}
											}}
										>
											<Checkbox checked={selectedRows.includes(index)} onChange={() => handleSelectRow(index)} />
										</TableCell>
									)}
									{columns.map((cell: any) => {
										for (const key in row) {
											if (key === cell.name) {
												return (
													<TableCell
														key={cell.name}
														sx={{
															'&.MuiTableCell-body': {
																textAlign: cell.align === 'right' ? 'end' : cell.align === 'left' ? 'start' : 'center'
															}
														}}
													>
														{cell.render ? cell.render(row) : <Typography variant='body5'>{row[cell.name]}</Typography>}
													</TableCell>
												);
											}
										}
										if (cell.name === 'action') {
											return (
												<TableCell
													key={cell.name}
													sx={{
														'&.MuiTableCell-body': {
															textAlign: cell.align === 'right' ? 'end' : cell.align === 'left' ? 'start' : 'center'
														}
													}}
												>
													{cell.render({
														value: row,
														handleSingleDelete: () => handleControl({ type: 'singleDelete', data: row }),
														handleEdit: () => handleControl({ type: 'edit', data: row })
													})}
												</TableCell>
											);
										}
									})}
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default DataTable;
