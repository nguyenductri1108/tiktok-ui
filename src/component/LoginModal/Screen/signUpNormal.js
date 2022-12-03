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

function SignUpNormal() {
    const [loading, setLoading] = useState(false);
    const [signUpInfo, setSignUpInfo] = useState({
        username: '',
        password: '',
    });
    const [seePassword, setSeePassword] = useState(false);

    let disableSubmit = !signUpInfo.username || !signUpInfo.password;

    const handleSignUp = async () => {
        setLoading(true);
        let response = await AxiosPost(
            {
                type: 'email',
                email: signUpInfo.username,
                password: signUpInfo.password,
            },
            'api/auth/register',
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
                Sign up
            </DialogTitle>

            <div className={cx('container', 'login-container')}>
                <div className={cx('title-login')}>Email or username</div>
                <input
                    className={cx('input-modal')}
                    onChange={(e) => {
                        setSignUpInfo({ ...signUpInfo, username: e.target.value });
                    }}
                    type="email"
                    placeholder="Email or username"
                />
                <div style={{ width: '100%', position: 'relative' }}>
                    <input
                        className={cx('input-modal')}
                        type={seePassword ? 'text' : 'password'}
                        placeholder="Password"
                        onChange={(e) => {
                            setSignUpInfo({ ...signUpInfo, password: e.target.value });
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
                    className={cx('submit-login-btn', { disabled: disableSubmit || loading })}
                    onClick={handleSignUp}
                >
                    Sign up
                </LoadingButton>
            </div>
        </div>
    );
}

export default SignUpNormal;
