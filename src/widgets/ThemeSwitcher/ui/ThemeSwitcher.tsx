import {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import styles from './ThemeSwitcher.module.scss'
import {Themes, useTheme} from "app/providers/ThemeProvider";
import LightIcon from 'shared/assets/icons/sun-svgrepo-com.svg'
import DarkIcon from 'shared/assets/icons/moon-svgrepo-com.svg'
import {Button} from "shared/ui/Button";
import {ThemeButton} from "shared/ui/Button/ui/Button";


interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({className}) => {
	const {theme, toggleTheme} = useTheme()

	return (
		<Button
			className={classNames(styles.themeSwitcher, {}, [className])}
			onClick={toggleTheme}
			theme={ThemeButton.CLEAR}
		>
			{theme === Themes.LIGHT
				? <DarkIcon width={36} height={36}/>
				: <LightIcon width={36} height={36}/>}
		</Button>
	);
};
