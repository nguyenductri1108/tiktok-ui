import { NavLink } from 'react-router-dom';
import styles from './mainMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon }) {
    return (
        <NavLink className={(nav) => cx('item', { active: nav.isActive })} to={to}>
            {icon}
            <span className={cx('item-title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
