import React, {useState} from 'react';
import styles from './Counter.module.scss'

const Counter = () => {
	const [counter, setCounter] = useState(0)


	return (
		<div>
			{counter}
			<button className={styles.button} onClick={() => setCounter(prev => prev + 1)}>Plus 1 </button>
		</div>
	);
};

export default Counter;