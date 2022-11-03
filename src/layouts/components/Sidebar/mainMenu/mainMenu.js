import styles from './mainMenu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function MainMenu({ children }) {
    return <nav className={cx('main-menu')}>{children}</nav>;
}

export default MainMenu;
