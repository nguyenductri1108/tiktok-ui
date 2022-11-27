import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faEarthAsia,
    faEllipsisVertical,
    faKeyboard,
    faPlus,
} from '@fortawesome/free-solid-svg-icons';

import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import SendIcon from '@mui/icons-material/Send';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Tippy from '@tippyjs/react';

import { useContext, useState } from 'react';

import Button from '~/component/Button';
import tippy, { roundArrow } from 'tippy.js';
import HeaderMenu from '~/component/Popper/HeaderMenu';
import 'tippy.js/dist/tippy.css';
import LogoutIcon from '@mui/icons-material/Logout';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SettingsIcon from '@mui/icons-material/Settings';
import CustomAvatar from '~/component/Images/Avatar';
import HeaderSearch from '~/layouts/components/Header/HeaderSearch';
import { Link, Navigate } from 'react-router-dom';
import config from '~/config';
import LoginModal from '~/component/LoginModal';
import { ModalContext } from '~/component/Context/ModalContext';

const cx = classNames.bind(styles);

const currentUser = false;

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
            <svg width="1em" height="1em" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.0002 2. .59992C5.85803 2. .59992 2.50016 5.85778 2.50016 9.99992C2.50016 1 .5.1 .521 5.85803 17. .5999 10.0002 17. .5999C1 .5.1 .523 17. .5999 17.5002 1 .5.1 .521 17.5002 9.99992C17.5002 5.85778 1 .5.1 .523 2. .59992 10.0002 2. .59992ZM0.833 .596 9.99992C0.833 .596  .5.93731  .5.93755 0.833252 10.0002 0.833252C15.0628 0.833252 19.1668  .5.93731 19.1668 9.99992C19.1668 15.0625 15.0628 19.1666 10.0002 19.1666C .5.93755 19.1666 0.833 .596 15.0625 0.833 .596 9.99992Z"
                ></path>
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.1 .51  .5.99992C12.1 .51 6.27 .52 .5 13.2115 7.3 .58 .5 1 .5.5835 7.3 .58 .5V9.01507C13.6736 9.01507 12.8267 8.72389 12.1 .51 8.2285 .5V11. .5961C12.1 .51 13.2238 10.7059 1 .5.5833 8.98723 1 .5.5833C7.26852 1 .5.5833 5.8335 13.2238 5.8335 11. .5961C5.8335 9.768 .55 7.26852 8. .50901 8.98723 8. .50901V10.0757C8.1 .529 10.0757 7.50016 10.73 .53 7.50016 11. .5961C7.50016 12.2579 8.1 .529 12.9166 8.98723 12.9166C9.83156 12.9166 10. .57 .53 12.2579 10. .57 .53 11. .5961V .5.99992H12.1 .51Z"
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

function Header({ className }) {
    const ModalAction = useContext(ModalContext);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner', className)}>
                <Link to={config.publicRoutes.home}>
                    <img src={images.logo} alt="tiktok"></img>
                </Link>

                <HeaderSearch />

                <div className={cx('action')}>
                    <Button to="/upload" leftIcon={<FontAwesomeIcon icon={faPlus} />} text size="medium">
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
                        <Button
                            primary
                            onClick={() => {
                                ModalAction.open();
                            }}
                            className={cx('abc-xyz')}
                            size="medium"
                        >
                            Log in
                        </Button>
                    )}

                    <HeaderMenu
                        hideOnClick={false}
                        loggedIn={currentUser}
                        item={currentUser ? userMenu : MENU_ITEM}
                        onChange={(item) => {
                            console.log(item);
                        }}
                    >
                        {currentUser ? (
                            <CustomAvatar
                                className={cx('more-btn')}
                                sx={{ width: '32px', height: '32px', marginLeft: '2 .5px', cursor: 'pointer' }}
                                src="https://p16-sign-va.tiktokcdn.comm/musically-maliva-obj/16532728369510 .56~c5_100x100.jpeg?x-expires=1666789200&x-signature=2B7uOSc17cDMXlkBli%2FPNR3SsPs%3D"
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
