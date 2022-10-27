import classNames from 'classnames/bind';
import styles from './HeaderSearch.module.scss';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import HeadlessTippy from '@tippyjs/react/headless';
import { useState } from 'react';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function HeaderSearch() {
    const [searchinput, setSearchInput] = useState('');

    return (
        <div className={cx('header-search')} spellCheck={false}>
            <HeadlessTippy
                placement="bottom-start"
                trigger="focus"
                interactive={true}
                // visible={result.length > 0}
                render={(attrs) => (
                    <PopperWrapper>
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <h4 className={cx('search-header')}>Accounts</h4>
                            <ul className={cx('search-list-account')}>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </ul>
                            <p className={cx('search-note')}>View all results for "{searchinput}" </p>
                        </div>
                    </PopperWrapper>
                )}
            >
                <input
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    value={searchinput}
                    onChange={(e) => {
                        setSearchInput(e.target.value);
                    }}
                />
            </HeadlessTippy>
            <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
        </div>
    );
}

export default HeaderSearch;
