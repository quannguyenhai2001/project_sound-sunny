import React, { useState } from 'react';
import Test2 from './Test2';

const Test = ({ children, component: Component }: { children: React.ReactNode; component: any }) => {
	const [count, setCount] = useState(0);
	return (
		<div>
			<div>
				<button onClick={() => setCount(count + 1)}>Click</button>
			</div>
			{children}
			{Component}
			<Test2 />
		</div>
	);
};

export default Test;
