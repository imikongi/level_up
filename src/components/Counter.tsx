import React, {useState} from 'react';
import './Counter.scss'
const Counter = () => {
	const [counter, setCounter] = useState(0)


	return (
		<div>
			{counter}
			<button onClick={() => setCounter(prev => prev + 1)}>Plus 1 </button>
		</div>
	);
};

export default Counter;