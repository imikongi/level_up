import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {AboutPageLLazy} from "./pages/AboutPage/AboutPageL.lazy";
import {MainPageLLazy} from "./pages/MainPage/MainPageL.lazy";

const App = () => {
	return (
		<div className='app'>
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