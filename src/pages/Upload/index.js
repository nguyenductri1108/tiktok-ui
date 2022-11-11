import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Upload video</h2>
            <span className={cx('heading-des')}>Post a video to your account</span>
            <div className={cx('upload-content')}></div>
        </div>
    );
}

export default Upload;
