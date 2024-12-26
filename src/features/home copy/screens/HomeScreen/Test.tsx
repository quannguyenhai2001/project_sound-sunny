import { useEffect, useState } from 'react';

const Test = ({ lastName, firstName, a }: any) => {
	const [count, setCount] = useState('');
	const handleClick = () => {};
	useEffect(() => {});
	return (
		<div>
			{lastName} {firstName + a}
			<button onClick={handleClick}> CLick </button>
		</div>
	);
};

export default Test;
