import React, {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import styles from './NavBar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

interface NavBarProps {
	className?: string
}

export const NavBar: FC<NavBarProps> = ({className}) => {
	return (
		<div className={classNames(styles.navBar, {}, [className])}>

			<div className={styles.logo}>

			</div>

			<div className={styles.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>To main</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>To about</AppLink>
			</div>
		</div>
	);
};


