import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarth,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Tippy from '@tippyjs/react/headless';
import { useEffect, useRef, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';
import { roundArrow } from 'tippy.js';
import HeaderMenu from '~/component/Popper/HeaderMenu';
import { icon } from '@fortawesome/fontawesome-svg-core';
import { Title } from '@mui/icons-material';

const cx = classNames.bind(styles);

function Header() {
    const [result, setResult] = useState([]);
    const [searchinput, setSearchInput] = useState('');

    const MENU_ITEM = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/upload',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setResult([...result, 'fake']);
        }, 3000);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok"></img>
                <Tippy
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
                    <div className={cx('header-search')} spellCheck={false}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                            value={searchinput}
                            onChange={(e) => {
                                setSearchInput(e.target.value);
                            }}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    {/* <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text size="medium">
                        Upload
                    </Button>
                    <Button primary href="/upload" className={cx('abc-xyz')} size="medium">
                        Log in
                    </Button> */}

                    <HeaderMenu item={MENU_ITEM}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon className={cx('more-icon')} icon={faEllipsisVertical} />
                        </button>
                    </HeaderMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
