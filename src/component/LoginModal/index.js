import classNames from 'classnames/bind';
import styles from './loginmodal.module.scss';

const cx = classNames.bind(styles);

function Modal({}) {
    return (
        <div className={cx('overlay')}>
            <div className={cx('modal-container')}>
                <div className="modal-content"></div>
            </div>
            <div className={cx('cancel-icon')}>
                <svg
                    class="tiktok-1anes8e-StyledIcon e1gjoq3k3"
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
            </div>
        </div>
    );
}

export default Modal;
