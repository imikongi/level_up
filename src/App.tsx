import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {AboutPageLLazy} from "./pages/AboutPage/AboutPageL.lazy";
import {MainPageLLazy} from "./pages/MainPage/MainPageL.lazy";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";


const App = () => {
	const {theme, toggleTheme} = useTheme()

	return (
		<div className={classNames('app', {hovered: true}, [theme])}>
			<button onClick={toggleTheme}>Change theme</button>
			<Link to={'/'}>To main</Link>
			<Link to={'/about'}>To about</Link>

			<Suspense fallback={''}>
				<Routes>
					<Route path={'/about'} element={<AboutPageLLazy/>}/>
					<Route path={'/'} element={<MainPageLLazy/>}/>
				</Routes>
			</Suspense>
		</div>
	);
};

export default App;