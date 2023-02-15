import { Container } from '@mui/material';
import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from '../Context/ModalContext';
import styles from './loginmodal.module.scss';
import LoginMainMenu from './Screen/main';
import SignUpMenu from './Screen/signUp';

const cx = classNames.bind(styles);

function LoginModalContainer() {
    const ModalAction = useContext(ModalContext);

    const handleRenderArr = (data) => {
        setRenderArr([...renderArr, data]);
    };

    const popRenderArr = () => {
        setRenderArr((renderArr) => renderArr.slice(0, -1));
    };

    const resetRenderArr = () => {
        ModalContext.offsignup();
        setRenderArr((renderArr) => renderArr.slice(0, 1));
    };

    const [renderArr, setRenderArr] = useState([<LoginMainMenu onClick={handleRenderArr} />]);

    return (
        <>
            <span
                className={cx('cancel-icon')}
                onClick={() => {
                    ModalAction.close();
                    resetRenderArr();
                }}
            >
                <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 48 48"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M21.1718 23.9999L10.2931 13.1212C9.90261 12.7307 9.90261 12.0975 10.2931 11.707L11.7074 10.2928C12.0979 9.90228 12.731 9.90228 13.1216 10.2928L24.0002 21.1715L34.8789 10.2928C35.2694 9.90228 35.9026 9.90228 36.2931 10.2928L37.7073 11.707C38.0979 12.0975 38.0979 12.7307 37.7073 13.1212L26.8287 23.9999L37.7073 34.8786C38.0979 35.2691 38.0979 35.9023 37.7073 36.2928L36.2931 37.707C35.9026 38.0975 35.2694 38.0975 34.8789 37.707L24.0002 26.8283L13.1216 37.707C12.731 38.0975 12.0979 38.0975 11.7074 37.707L10.2931 36.2928C9.90261 35.9023 9.90261 35.2691 10.2931 34.8786L21.1718 23.9999Z"
                    ></path>
                </svg>
            </span>

            {renderArr.length > 1 && (
                <span
                    onClick={() => {
                        popRenderArr();
                        if (renderArr.length < 3) ModalAction.offsignup();
                    }}
                    className={cx('back-icon')}
                >
                    <svg
                        className="tiktok-1i5fgpz-StyledChevronLeftOffset eg439om1"
                        width="1em"
                        height="1em"
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z"
                        ></path>
                    </svg>
                </span>
            )}
            <Container
                sx={{
                    width: '483px',
                    height: '100%',
                    padding: '48px 0px 0px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    borderRadius: '8px',
                    paddingTop: '48px',
                }}
            >
                {renderArr[renderArr.length - 1]}

                {ModalAction.data.signingUp ? (
                    <div className={cx('modal-footer')}>
                        <span className={cx('modal-footer-title')}>Already have an account?</span>
                        <div className={cx('modal-footer-link')}>Log in</div>
                    </div>
                ) : (
                    <div className={cx('modal-footer')}>
                        <span className={cx('modal-footer-title')}>Don’t have an account?</span>
                        <div
                            onClick={() => {
                                handleRenderArr(<SignUpMenu renderArr={renderArr} onClick={handleRenderArr} />);
                            }}
                            className={cx('modal-footer-link')}
                        >
                            Sign up
                        </div>
                    </div>
                )}
            </Container>
        </>
    );
}

export default LoginModalContainer;
