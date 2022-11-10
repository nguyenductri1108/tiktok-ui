import classNames from 'classnames/bind';
import styles from './Upload.module.scss';

const cx = classNames.bind(styles);

function Upload() {
    return (
        <div>
            <h2>Upload video</h2>
            <span>Post a video to your account</span>
        </div>
    );
}

export default Upload;
