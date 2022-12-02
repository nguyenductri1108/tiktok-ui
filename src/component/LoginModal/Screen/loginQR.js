import { DialogTitle } from '@mui/material';
import classNames from 'classnames/bind';
import styles from '../loginmodal.module.scss';

const cx = classNames.bind(styles);

function LoginQr() {
    return (
        <div className={cx('wrapper')}>
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
                Log in with QR code
            </DialogTitle>

            <div className={cx('container')}>
                <span className={cx('qr-code-img')}>
                    <img src="https://cdn.me-qr.com/qr/40987440.png?v=1669867963" alt="Create qr code for free" />
                    <div className={cx('qr-body')}>
                        <p>1. Open the TikTok app on your mobile device </p>
                        <p>
                            2. On Profile, tap
                            <svg
                                width="16"
                                data-e2e=""
                                height="16"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M13.0001 13C13.0001 9.68629 15.6864 7 19.0001 7C22.3139 7 25.0001 9.68629 25.0001 13C25.0001 16.3137 22.3139 19 19.0001 19C15.6864 19 13.0001 16.3137 13.0001 13ZM19.0001 3C13.4773 3 9.00015 7.47715 9.00015 13C9.00015 18.5228 13.4773 23 19.0001 23C24.523 23 29.0001 18.5228 29.0001 13C29.0001 7.47715 24.523 3 19.0001 3ZM5.19435 40.9681C6.70152 35.5144 10.0886 32.2352 13.9162 30.738C17.7125 29.2531 22.0358 29.4832 25.6064 31.2486C26.1015 31.4934 26.7131 31.338 26.9931 30.8619L28.0072 29.1381C28.2872 28.662 28.1294 28.0465 27.6384 27.7937C23.0156 25.4139 17.4034 25.0789 12.4591 27.0129C7.37426 29.0018 3.09339 33.3505 1.2883 40.0887C1.14539 40.6222 1.48573 41.1592 2.02454 41.2805L3.97575 41.7195C4.51457 41.8408 5.04724 41.5004 5.19435 40.9681ZM37.0002 26C37.5525 26 38.0002 26.4477 38.0002 27V34H45.0002C45.5525 34 46.0002 34.4477 46.0002 35V37C46.0002 37.5523 45.5525 38 45.0002 38H38.0002V45C38.0002 45.5523 37.5525 46 37.0002 46H35.0002C34.448 46 34.0002 45.5523 34.0002 45V38H27.0002C26.448 38 26.0002 37.5523 26.0002 37V35C26.0002 34.4477 26.448 34 27.0002 34H34.0002V27C34.0002 26.4477 34.448 26 35.0002 26H37.0002Z"
                                ></path>
                            </svg>
                        </p>
                        <p>
                            3. Tap{' '}
                            <svg
                                width="16"
                                data-e2e=""
                                height="16"
                                viewBox="0 0 48 48"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M6 17V10C6 7.79086 7.79086 6 10 6H17C17.5523 6 18 6.44772 18 7V9C18 9.55228 17.5523 10 17 10H11C10.4477 10 10 10.4477 10 11V17C10 17.5523 9.55228 18 9 18H7C6.44772 18 6 17.5523 6 17ZM42 17V10C42 7.79086 40.2091 6 38 6H31C30.4477 6 30 6.44772 30 7V9C30 9.55228 30.4477 10 31 10H37C37.5523 10 38 10.4477 38 11V17C38 17.5523 38.4477 18 39 18H41C41.5523 18 42 17.5523 42 17ZM42 38V31C42 30.4477 41.5523 30 41 30H39C38.4477 30 38 30.4477 38 31V37C38 37.5523 37.5523 38 37 38H31C30.4477 38 30 38.4477 30 39V41C30 41.5523 30.4477 42 31 42H38C40.2091 42 42 40.2091 42 38ZM6 31V38C6 40.2091 7.79086 42 10 42H17C17.5523 42 18 41.5523 18 41V39C18 38.4477 17.5523 38 17 38H11C10.4477 38 10 37.5523 10 37V31C10 30.4477 9.55228 30 9 30H7C6.44772 30 6 30.4477 6 31ZM7 22C6.44772 22 6 22.4477 6 23V25C6 25.5523 6.44772 26 7 26H41C41.5523 26 42 25.5523 42 25V23C42 22.4477 41.5523 22 41 22H7Z"
                                ></path>
                            </svg>{' '}
                            and scan the QR code to confirm your login
                        </p>
                    </div>
                </span>
                <span>
                    <img
                        src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/webapp/main/webapp-desktop/b6d3cc69d3525571aef0.gif"
                        alt="help"
                        style={{ height: '270px', marginLeft: '24px' }}
                    ></img>
                </span>
            </div>
        </div>
    );
}

export default LoginQr;
