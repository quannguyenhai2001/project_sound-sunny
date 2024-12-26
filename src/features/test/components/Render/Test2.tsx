import { useState } from 'react';

const Test2 = () => {
	const [count, setCount] = useState(0);
	console.log('Test2');
	return (
		<div>
			<h1>Test2</h1>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</div>
	);
};

export default Test2;
