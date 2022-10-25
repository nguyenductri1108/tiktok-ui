import classNames from 'classnames/bind';
import styles from './LanguageMenu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function HeaderLanguageMenu({ title, onBack }) {
    return (
        <header className={cx('header-language-menu')}>
            <button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon className={cx('icon')} icon={faChevronLeft} />
            </button>
            <h4 className={cx('title-header')}>{title}</h4>
        </header>
    );
}

export default HeaderLanguageMenu;
