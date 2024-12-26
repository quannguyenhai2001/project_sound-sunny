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
				columns={columns}
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
				data={data}
				options={{
					checkBox: {
						isShow: true
					}
				}}
			/>
		</Box>
	);
};

export default RolesTab;
