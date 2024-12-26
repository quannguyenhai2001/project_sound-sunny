import { memo } from 'react';

interface TodoProps {
	text: string;
}

const Todo = memo(function Todo({ text }: TodoProps) {
	console.log('render todo');
	return (
		<div className='card'>
			<h2>{text}</h2>
		</div>
	);
});

export default Todo;
