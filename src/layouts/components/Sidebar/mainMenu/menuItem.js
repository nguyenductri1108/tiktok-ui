import { NavLink } from 'react-router-dom';
import styles from './mainMenu.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            end
            className={(nav) => {
                return cx('item', { active: nav.isActive });
            }}
            to={to}
        >
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('item-title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
