import React from "react";
import {Link, LinkProps} from "react-router-dom";
import cls from './AppLink.module.scss'

interface AppLinkProps extends LinkProps{
    className?: string;
}

export const AppLink: React.FC<AppLinkProps> = (props) => {
    const {
        to,
        children,
        className,
        ...otherProps
    } = props

    return (
        <Link
            to={to}
            {...otherProps}
            className={cls.AppLink}
        >
            {children}
        </Link>
    );
};
