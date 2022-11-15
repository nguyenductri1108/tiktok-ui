import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useRef, useState } from 'react';
import { TextareaAutosize } from '@mui/material';

const cx = classNames.bind(styles);

function Upload() {
    const [caption, setCaption] = useState('');
    const captionRef = useRef();

    const handleCaptionInput = () => {
        if (caption.length > 150) {
            setCaption(captionRef.current.value.slice(0, 150));
            return;
        }
        setCaption(captionRef.current.value);
    };

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Upload video</h2>
            <span className={cx('heading-des')}>Post a video to your account</span>
            <div className={cx('upload-content')}>
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
                <div className={cx('upload-option')}>
                    <div className={cx('upload-edit')}>
                        <span className={cx('edit-icon')}>
                            <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/divide_black.e1e40d5b.svg"></img>
                        </span>

                        <div className={cx('edit-des')}>
                            <span className={cx('edit-title')}>Divide videos and edit</span>
                            <span className={cx('edit-title2')}>
                                You can quickly divide videos into multiple parts, remove redundant parts and turn
                                landscape videos into portrait videos
                            </span>
                        </div>
                        <button className={cx('edit-btn')}>Edit</button>
                    </div>
                    <div className={cx('upload-caption')}>
                        <div className={cx('caption-title')}>
                            <span className={cx('title')}>Caption</span>
                            <span className={cx('word-count')}>{`${caption.length} / 150`}</span>
                        </div>
                        <div className={cx('caption-input-wrapper')}>
                            <div className={cx('textarea-wrapper')}>
                                <TextareaAutosize
                                    onChange={handleCaptionInput}
                                    className={cx('caption-input')}
                                    value={caption}
                                    ref={captionRef}
                                    style={{
                                        width: 200,
                                        outline: 'none',
                                        fontSize: 16,
                                        width: '100%',
                                    }}
                                />
                                {/* <TextareaAutosize
                                    aria-label="empty textarea"
                                    
                                /> */}
                            </div>
                            <div className={cx('icon-wrapper')}>
                                <AlternateEmailIcon sx={{ marginRight: '8px' }} fontSize="medium" />
                                <img src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/hashtag.234f1b9c.svg" />
                            </div>
                        </div>
                    </div>
                    <div className={cx('upload-cover')}></div>
                    <div className={cx('upload-range')}></div>
                    <div className={cx('upload-permission')}></div>
                    <div className={cx('upload-check')}></div>
                    <div className={cx('upload-button')}></div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
