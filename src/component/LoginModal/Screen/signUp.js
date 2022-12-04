import { loginModalIcon } from '~/assets/iconSVG';
import classNames from 'classnames/bind';
import styles from '../loginmodal.module.scss';
import { Box } from '@mui/system';
import { DialogTitle } from '@mui/material';
import SignUpNormal from './signUpNormal';
import { useContext, useEffect } from 'react';
import { ModalContext } from '~/component/Context/ModalContext';
const cx = classNames.bind(styles);

const SignUpList = [
    {
        label: 'Use phone or email',
        icon: loginModalIcon.personalInfo.icon,
        data: <SignUpNormal />,
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
];

function SignUpMenu({ renderArr, onClick }) {
    const ModalAction = useContext(ModalContext);

    useEffect(() => {
        console.log('abc');
        ModalAction.onsignup();
    }, [renderArr]);

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
                Sign up for TikTok
            </DialogTitle>

            {SignUpList.map((item, index) => {
                return (
                    <Box
                        className={cx('login-item', { disabled: item.disabled })}
                        onClick={
                            item.data
                                ? () => {
                                      onClick(item.data);
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

export default SignUpMenu;
