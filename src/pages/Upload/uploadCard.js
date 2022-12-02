import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function UploadCard() {
    return (
        <div className={cx('upload-card')}>
            <span className={cx('upload-icon')}>
                <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"></img>
            </span>

            <div className={cx('upload-card-title')}>Select video to upload</div>
            <div className={cx('upload-card-title2')}>Or drag and drop a file</div>
            <div className={cx('upload-card-content')}>
                <span className={cx('upload-des')}>MP4 or WebM</span>
                <span className={cx('upload-des')}>720x1280 resolution or higher</span>
                <span className={cx('upload-des')}>Up to 10 minutes</span>
                <span className={cx('upload-des')}>Less than 2 GB</span>
            </div>
            <button className={cx('select-button')}>
                <span>Select file</span>
            </button>
        </div>
    );
}

export default UploadCard;
