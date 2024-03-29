import React from 'react';
import './styles/index.scss'
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {classNames} from "shared/lib/classNames/classNames";
import {NavBar} from "widgets/NavBar";


const App = () => {
	const {theme} = useTheme()

	return (
		<div className={classNames('app', {}, [theme])}>

			<NavBar/>


			<AppRouter/>
		</div>
	);
};

export default App;