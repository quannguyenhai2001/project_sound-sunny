import DataTable from '@/components/organisms/DataTable/DataTable';
import { Box } from '@mui/material';
interface StudentReportTabProps {
	data: any;
	columns: any;
}
const RolesTab = ({ data, columns }: StudentReportTabProps) => {
	return (
		<Box>
			<DataTable
				data={data}
				columns={columns}
				options={{
					checkBox: {
						isShow: true
					}
				}}
				customTableStyles={{
					'&.MuiBox-root': {
						'& .MuiTableContainer-root': {
							'& .MuiTable-root': {
								'& .MuiTableHead-root': {
									backgroundColor: 'white',
									'& .MuiTableRow-root': {
										'& .MuiTableCell-root': {
											'&:not(:last-child)': {
												borderRight: '1px solid #E5E7EB'
											}
										}
									}
								},
								'& .MuiTableBody-root': {
									backgroundColor: 'white',
									'& .MuiTableRow-root': {
										'& .MuiTableCell-root': {
											'&:not(:last-child)': {
												borderRight: '1px solid #E5E7EB'
											}
										}
									}
								}
							}
						}
					}
				}}
			/>
		</Box>
	);
};

export default RolesTab;
