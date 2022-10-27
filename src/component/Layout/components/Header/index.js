import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCircleXmark,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SendIcon from '@mui/icons-material/Send';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';

import { useEffect, useState } from 'react';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';
import tippy, { roundArrow } from 'tippy.js';
import HeaderMenu from '~/component/Popper/HeaderMenu';
import 'tippy.js/dist/tippy.css';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SettingsIcon from '@mui/icons-material/Settings';
import CustomAvatar from '~/component/Images/Avatar';

const cx = classNames.bind(styles);

const currentUser = true;

function Header() {
    const [result, setResult] = useState([]);
    const [searchinput, setSearchInput] = useState('');

    const MENU_ITEM = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    { code: 'vi', title: 'Tiếng Việt' },
                    { code: 'en', title: 'English' },
                ],
            },
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

    const userMenu = [
        {
            icon: <PermIdentityIcon fontSize="large" />,
            title: 'View profile',
            to: '/feedback',
        },
        {
            icon: (
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10.0002 2.49992C5.85803 2.49992 2.50016 5.85778 2.50016 9.99992C2.50016 14.1421 5.85803 17.4999 10.0002 17.4999C14.1423 17.4999 17.5002 14.1421 17.5002 9.99992C17.5002 5.85778 14.1423 2.49992 10.0002 2.49992ZM0.833496 9.99992C0.833496 4.93731 4.93755 0.833252 10.0002 0.833252C15.0628 0.833252 19.1668 4.93731 19.1668 9.99992C19.1668 15.0625 15.0628 19.1666 10.0002 19.1666C4.93755 19.1666 0.833496 15.0625 0.833496 9.99992Z"
                    ></path>
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.141 4.99992C12.141 6.27424 13.2115 7.3484 14.5835 7.3484V9.01507C13.6736 9.01507 12.8267 8.72389 12.141 8.22854V11.4961C12.141 13.2238 10.7059 14.5833 8.98723 14.5833C7.26852 14.5833 5.8335 13.2238 5.8335 11.4961C5.8335 9.76845 7.26852 8.40901 8.98723 8.40901V10.0757C8.1429 10.0757 7.50016 10.7343 7.50016 11.4961C7.50016 12.2579 8.1429 12.9166 8.98723 12.9166C9.83156 12.9166 10.4743 12.2579 10.4743 11.4961V4.99992H12.141Z"
                    ></path>
                </svg>
            ),
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <VideoCallIcon fontSize="large" />,
            title: 'LIVE Studio',
            to: '/feedback',
        },
        {
            icon: <SettingsIcon fontSize="large" />,
            title: 'Settings',
            to: '/feedback',
        },
        ...MENU_ITEM,
        {
            icon: <LogoutIcon />,
            title: 'Logout',
            to: '/logout',
            separate: true,
        },
    ];

    useEffect(() => {
        setTimeout(() => {
            setResult([...result, 'fake']);
        }, 3000);
    }, []);

    tippy('.testTippy', {
        content: "I'm a Tippy tooltip!",
    });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok"></img>
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

                <div className={cx('action')}>
                    <Button leftIcon={<FontAwesomeIcon icon={faPlus} />} text size="medium">
                        Upload
                    </Button>
                    {currentUser ? (
                        <div className="current-user-wrapper">
                            <Tippy delay={[0, 0]} content="Message">
                                <button className={cx('action-btn')}>
                                    <span className={cx('message')}>
                                        <SendIcon fontSize="large" />
                                    </span>
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 0]} content="Inbox">
                                <button className={cx('action-btn')}>
                                    <span className={cx('inbox')}>
                                        <SmsOutlinedIcon fontSize="large" />
                                    </span>
                                </button>
                            </Tippy>
                        </div>
                    ) : (
                        <>
                            <Button primary href="/upload" className={cx('abc-xyz')} size="medium">
                                Log in
                            </Button>
                        </>
                    )}

                    <HeaderMenu
                        loggedIn={currentUser}
                        item={currentUser ? userMenu : MENU_ITEM}
                        onChange={(item) => {
                            console.log(item);
                        }}
                    >
                        {currentUser ? (
                            // <div className={cx('avatar-btn')}>
                            <CustomAvatar
                                className={cx('more-btn')}
                                sx={{ width: '32px', height: '32px', marginLeft: '24px', cursor: 'pointer' }}
                                // alt="avatar"
                                src="https://p16-sign-va.tiktokcdn.comm/musically-maliva-obj/1653272836951046~c5_100x100.jpeg?x-expires=1666789200&x-signature=2B7uOSc17cDMXlkBli%2FPNR3SsPs%3D"
                            />
                        ) : (
                            // </div>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon className={cx('more-icon')} icon={faEllipsisVertical} />
                            </button>
                        )}
                    </HeaderMenu>
                </div>
            </div>
        </header>
    );
}

export default Header;
