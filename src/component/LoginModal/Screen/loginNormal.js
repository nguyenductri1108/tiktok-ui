import classNames from 'classnames/bind';
import styles from '../loginmodal.module.scss';
import { Cascader, Input, Select, Space } from 'antd';
import { DialogTitle } from '@mui/material';
import { useState } from 'react';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import { AxiosPost } from '~/service/nextGenSearchService';

const cx = classNames.bind(styles);

const { Option } = Select;

function LoginNormal() {
    const [loading, setLoading] = useState(false);
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
    });
    const [seePassword, setSeePassword] = useState(false);

    let disableSubmit = !loginInfo.username || !loginInfo.password;

    const handleLogin = async () => {
        setLoading(true);
        let response = await AxiosPost(
            {
                email: loginInfo.username,
                password: loginInfo.password,
            },
            'api/auth/login',
        );
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 1000);
        });
        setLoading(false);

        console.log('response:' + response);
    };

    return (
        <div className={cx('sign-in-normal')}>
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
                Log in
            </DialogTitle>

            <div className={cx('container', 'login-container')}>
                <div className={cx('title-login')}>Email or username</div>
                <input
                    className={cx('input-modal')}
                    onChange={(e) => {
                        setLoginInfo({ ...loginInfo, username: e.target.value });
                    }}
                    type="text"
                    placeholder="Email or username"
                />
                <div style={{ width: '100%', position: 'relative' }}>
                    <input
                        className={cx('input-modal')}
                        type={seePassword ? 'text' : 'password'}
                        placeholder="Password"
                        onChange={(e) => {
                            setLoginInfo({ ...loginInfo, password: e.target.value });
                        }}
                    />
                    <span
                        onClick={() => {
                            setSeePassword((seePassword) => !seePassword);
                        }}
                    >
                        {seePassword ? (
                            <VisibilityOffOutlinedIcon className={cx('password-icon')} />
                        ) : (
                            <VisibilityOutlinedIcon className={cx('password-icon')} />
                        )}
                    </span>
                </div>

                <div className={cx('forgot-password')} style={{ height: '32px' }}></div>

                <LoadingButton
                    disableRipple
                    loading={loading}
                    className={cx('submit-login-btn', { disabled: disableSubmit })}
                    onClick={handleLogin}
                >
                    Log in
                </LoadingButton>
            </div>
        </div>
    );
}

export default LoginNormal;
