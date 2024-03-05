import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes} from "./ThemeContext";

interface UseThemeRes {
	theme: Themes;
	toggleTheme: () => void
}

export const useTheme = (): UseThemeRes => {
	const {theme, setTheme} = useContext(ThemeContext)

	const toggleTheme = () => {
		const newTheme = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK
		setTheme(newTheme)
		//saving theme into the local storage by our constant key
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {theme, toggleTheme}
}