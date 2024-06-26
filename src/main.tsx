import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
// let queues: any = [];
// function onRenderCallback(id, phase, actualDuration, baseDuration, startTime, commitTime) {
// 	// Save it
// 	queues.push({
// 		id,
// 		phase,
// 		actualDuration,
// 		baseDuration,
// 		startTime,
// 		commitTime
// 	});
// }

// Every 10 seconds, to send Profiler To Anywhere monitoring
// setInterval(sendProfilerToMonitor, 10000);

// function sendProfilerToMonitor() {
// 	if (!queues.length) return;

// 	const data = [...queues];

// 	fetch('...', { method: 'POST', body: JSON.stringify(data) });

// 	queues = [];
// }
// eslint-disable-next-line import/no-named-as-default-member
ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <Profiler id='App' onRender={onRenderCallback}> */}
		<App />
		{/* </Profiler> */}
	</React.StrictMode>
);
