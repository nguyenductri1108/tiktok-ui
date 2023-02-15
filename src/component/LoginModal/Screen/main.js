import { loginModalIcon } from '~/assets/iconSVG';
import classNames from 'classnames/bind';
import styles from '../loginmodal.module.scss';
import { Box, DialogTitle } from '@mui/material';
import LoginQr from './loginQR';
import LoginNormal from './loginNormal';
import { useContext, useEffect } from 'react';
import { ModalContext } from '~/component/Context/ModalContext';

const cx = classNames.bind(styles);

const LoginList = [
    {
        label: 'Use QR code',
        icon: loginModalIcon.qrCode.icon,
        data: <LoginQr />,
    },
    {
        label: 'Use phone / email / username',
        icon: loginModalIcon.personalInfo.icon,
        data: <LoginNormal />,
    },
    {
        label: 'Continue with Facebook',
        icon: loginModalIcon.facebook.icon,
        disabled: true,
    },
    {
        label: 'Continue with Google',
        icon: loginModalIcon.google.icon,
        disabled: true,
    },
    {
        label: 'Continue with Twitter',
        icon: loginModalIcon.twitter.icon,
        disabled: true,
    },
    {
        label: 'Continue with LINE',
        icon: loginModalIcon.line.icon,
        disabled: true,
    },
    {
        label: 'Continue with KakaoTalk',
        icon: loginModalIcon.kakaotalk.icon,
        disabled: true,
    },
    {
        label: 'Continue with Apple',
        icon: loginModalIcon.apple.icon,
        disabled: true,
    },
    {
        label: 'Continue with Instagram',
        icon: loginModalIcon.instagram.icon,
        disabled: true,
    },
];
function LoginMainMenu({ onClick }) {
    const ModalAction = useContext(ModalContext);

    // useEffect(() => {
    //     console.log('abc');
    //     ModalAction.offsignup();
    // }, []);

    return (
        <div className={cx('login-menu')}>
            <DialogTitle
                sx={{
                    color: 'rgb(22, 24, 35)',
                    fontFamily: 'SofiaPro, Arial, Tahoma, PingFangSC, sans-serif',
                    fontSize: '32px',
                    margin: '16px auto',
                    fontWeight: 'bold',
                    textAlign: 'center',
                }}
                className={cx('dialog-title')}
            >
                Log in to TikTok
            </DialogTitle>

            {LoginList.map((item, index) => {
                return (
                    <Box
                        className={cx('login-item', { disabled: item.disabled })}
                        onClick={
                            item.data
                                ? () => {
                                      onClick(item.data, false);
                                  }
                                : () => {}
                        }
                        key={index}
                    >
                        <span className={cx('login-item-icon')}>{item.icon}</span>
                        {item.label}
                    </Box>
                );
            })}
        </div>
    );
}

export default LoginMainMenu;
