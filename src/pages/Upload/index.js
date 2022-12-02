import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { useRef, useState } from 'react';
import {
    Checkbox,
    createTheme,
    FormControlLabel,
    FormGroup,
    MenuItem,
    TextareaAutosize,
    TextField,
} from '@mui/material';
import { Switch } from 'antd';
import { styled } from '@mui/system';
import UploadCard from './uploadCard';

const cx = classNames.bind(styles);

const ranges = ['Public', 'Friends', 'Private'];

const CssTextField = styled(TextField)({
    focused: {
        borderColor: 'black',
    },
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'yellow',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'yellow',
            },
        },
        '& fieldset': {
            borderColor: 'white',
        },
    },
});

function Upload() {
    const [caption, setCaption] = useState('');
    const [range, setRange] = useState('Public');
    const captionRef = useRef();

    const handleCaptionInput = () => {
        if (caption.length > 150) {
            setCaption(captionRef.current.value.slice(0, 150));
            return;
        }
        setCaption(captionRef.current.value);
    };

    const onChange = (checked) => {
        console.log(`switch to ${checked}`);
    };

    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('heading')}>Upload video</h2>
            <span className={cx('heading-des')}>Post a video to your account</span>
            <div className={cx('upload-content')}>
                <UploadCard />
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
                    <div style={{ marginTop: '24px' }} className={cx('cover-wrapper')}>
                        <span className={cx('cover-title')}>Cover</span>
                        <div className={cx('cover-content')}>
                            <div className={cx('cover-frame')}></div>
                        </div>
                    </div>
                    <div className={cx('upload-range')}>
                        <span className={cx('range-title')}>Who can watch this video</span>

                        <TextField
                            className={cx('range-menu')}
                            id="outlined-select-currency"
                            SelectProps={{
                                MenuProps: {
                                    sx: {
                                        '& li': {
                                            fontSize: '1.6rem',
                                            height: 'fit-content',
                                            minHeight: 0,
                                        },
                                    },
                                },
                            }}
                            sx={{
                                '& fieldset': {
                                    border: '1px solid black !important',
                                },
                                '#outlined-select-currency': {
                                    fontSize: '1.6rem',
                                    height: 'fit-content',
                                    minHeight: 0,
                                },
                                width: '300px',
                                height: '36px',
                            }}
                            select
                            value={range}
                            onChange={(e) => {
                                setRange(e.target.value);
                                console.log(range);
                            }}
                        >
                            {ranges.map((option) => (
                                <MenuItem key={option} value={option}>
                                    {option}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className={cx('upload-permission')}>
                        <span className={cx('permission-title')}>Allow user to:</span>
                        <FormGroup className={cx('permission-menu')}>
                            <FormControlLabel
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontSize: '16px',
                                    },
                                }}
                                className={cx('permission-item')}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.MuiFormControlLabel-label': {
                                                fontSize: '16px',
                                            },
                                            color: 'var(--primary)',
                                            '&.Mui-checked': {
                                                color: 'var(--primary)',
                                            },
                                        }}
                                        defaultChecked
                                        size="large"
                                    />
                                }
                                label="Comment"
                            />
                            <FormControlLabel
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontSize: '16px',
                                    },
                                }}
                                control={
                                    <Checkbox
                                        sx={{
                                            color: 'var(--primary)',
                                            '&.Mui-checked': {
                                                color: 'var(--primary)',
                                            },
                                        }}
                                        defaultChecked
                                        size="large"
                                    />
                                }
                                label="Duet"
                            />
                            <FormControlLabel
                                sx={{
                                    '& .MuiFormControlLabel-label': {
                                        fontSize: '16px',
                                    },
                                }}
                                control={
                                    <Checkbox
                                        sx={{
                                            '&.MuiFormControlLabel-label': {
                                                fontSize: '16px',
                                            },
                                            color: 'var(--primary)',
                                            '&.Mui-checked': {
                                                color: 'var(--primary)',
                                            },
                                        }}
                                        defaultChecked
                                        size="large"
                                    />
                                }
                                label="Stitch"
                            />
                        </FormGroup>
                    </div>
                    <div className={cx('upload-check')}>
                        <div className={cx('handle-check')}>
                            <span className={cx('check-title')}>Run a copyright check</span>
                            <Switch defaultChecked onChange={onChange} />
                        </div>
                        <span className={cx('check-des')}>
                            We'll check your video for potential copyright infringements on used sounds. If
                            infringements are found, you can edit the video before posting.
                        </span>
                    </div>
                    <div className={cx('upload-button')}>
                        <button className={cx('discard-button')}>Discard</button>
                        <button disabled className={cx('post-button')}>
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
