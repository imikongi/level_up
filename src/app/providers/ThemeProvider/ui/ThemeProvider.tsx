import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "../lib/ThemeContext";

//checking if there theme, saved to localStorage
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT

const ThemeProvider: FC = ({children}) => {
	const [theme, setTheme] = useState(defaultTheme)


	//memoizing this object, so it doesn't recreate on every render
	const defaultProps = useMemo(() => ({
		theme,
		setTheme: setTheme
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;