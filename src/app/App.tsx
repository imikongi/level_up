import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames/classNames";


const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}>Change theme</button>
			<Link to={'/'}>To main</Link>
			<Link to={'/about'}>To about</Link>

			<AppRouter/>
		</div>
	);
};

export default App;