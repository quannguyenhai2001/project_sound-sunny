import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';

export const exportExcel = () => {
	const data = [
		{
			timeIn: '10:00',
			timeOut: '10:00',
			money: '3.215.545.000 đ'
		}
	];
	const workbook = new Workbook();
	const worksheet = workbook.addWorksheet('Report');
	worksheet.columns = [
		{ header: 'Time In', key: 'timeIn', width: 30 },
		{ header: 'Time Out', key: 'timeOut', width: 30 },
		{ header: 'Money', key: 'money', width: 30 }
	];
	worksheet.addRows(data);
	workbook.xlsx.writeBuffer().then((data) => {
		const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
		saveAs(blob, 'bao_cao_tong_doanh_thu.xlsx');
	});
};
