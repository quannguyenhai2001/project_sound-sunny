import { useState } from 'react';

const Test1 = () => {
	const [count, setCount] = useState(0);
	console.log('Test1');
	return (
		<div>
			<h1>Test1</h1>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
};

export default Test1;
