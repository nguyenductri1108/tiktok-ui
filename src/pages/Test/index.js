import {
    Container,
    Dialog,
    DialogTitle,
    Fade,
    Grow,
    MenuItem,
    Slide,
    TextareaAutosize,
    TextField,
} from '@mui/material';
import styles from './Test.module.scss';
import classNames from 'classnames/bind';
// import 'antd/dist/antd.css';

// import './index.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { forwardRef, useRef, useState } from 'react';
import Test1 from './Test';
import { Box } from '@mui/system';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: false,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};

const BASE_API_URL = 'https://staging.books.monsters.vn/apis/imagefiles';
const BASE_FILE = 'https://books.monsters.vn/files';

function Test() {
    const inputRef = useRef();
    const imgRef = useRef();
    const inputRefArea = useRef();
    const [imageURL, setImageURL] = useState('');

    const [open, setOpen] = useState(false);

    console.log(imageURL);
    localStorage.setItem(
        'bearer_token',
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2OTA1MDk3NiwianRpIjoiN2NiNzU0ZjQtM2MwNi00ZjUwLWEyZGUtOTE1MGJlMWY4NmM0IiwidHlwZSI6ImFjY2VzcyIsInN1YiI6IjYzN2JiMjYwODQ4NzdhMTdhODNjMmUwZiIsIm5iZiI6MTY2OTA1MDk3NiwiY3NyZiI6IjgxZjlhNjE5LTU0MzAtNDA5Ni04Y2QzLTgxZmQyZjIyOTQyNSIsImV4cCI6MTY2OTEzNzM3Nn0.szuPhJOqzFkiEJy1WsDgGNq6Ta-TsYmz7ipvgFhl3Z0',
    );

    // const imagePost = async(url, data) {
    //     const response

    // }

    const loadFile = function (file) {
        const reader = new FileReader();
        reader.onload = function () {
            const output = imgRef.current;
            setImageURL(reader.result);
        };
        reader.readAsDataURL(file);
    };

    const handleChange = async (event) => {
        const photo = event.target.files[0];
        const formData = new FormData();
        console.log(localStorage.getItem('bearer_token'));

        formData.append('fileToUpload', photo);

        const response = await axios({
            method: 'post',
            url: BASE_API_URL,
            data: formData,
            headers: { Authorization: `Bearer ${localStorage.getItem('bearer_token')}` },
        })
            .then((response) => response.data)
            .catch((error) => console.log(error));

        setImageURL(`${BASE_FILE}/${response.data.thumb_url}`);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        inputRefArea.current.classList.add(cx('is-dragover'));
        console.log(inputRefArea.current.classList);
    };
    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();

        console.log(inputRefArea.current.classList);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        inputRefArea.current.classList.remove(cx('is-dragover'));
        loadFile(e.dataTransfer.files[0]);
        console.log(e.dataTransfer.files);
    };

    return (
        <div>
            <Box
                sx={{
                    height: '300px',
                    width: '300px',
                    border: '1px solid black',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                ref={inputRefArea}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => {
                    inputRef.current.click();
                }}
            >
                {!imageURL && (
                    <div
                        style={{
                            margin: 'auto',
                            display: 'block',
                        }}
                    >
                        Click here
                    </div>
                )}
                <input
                    type="file"
                    onChange={(e) => {
                        handleChange(e);
                        loadFile(e.target.files[0]);
                    }}
                    accept="image/*"
                    hidden
                    ref={inputRef}
                />
                {!!imageURL && (
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            position: 'relative',
                        }}
                    >
                        <img
                            className={cx('img')}
                            alt="img"
                            ref={imgRef}
                            src={imageURL}
                            style={{ width: '100%', height: '100%' }}
                        ></img>
                        <span
                            onClick={(e) => {
                                e.stopPropagation();
                                setImageURL('');
                                inputRef.current.files = [];
                            }}
                            className={cx('x-icon')}
                        >
                            <CloseIcon />
                        </span>
                    </Box>
                )}
            </Box>

            <button
                onClick={() => {
                    setOpen(true);
                }}
            >
                Open dialog
            </button>
            <Dialog
                onClose={() => {
                    setOpen(false);
                }}
                open={open}
                sx={{}}
            >
                <Container
                    sx={{
                        width: '483px',
                        height: '100%',
                        padding: '48px 0px 0px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <DialogTitle className={cx('dialog-title')}>Log in to TikTok</DialogTitle>
                </Container>
            </Dialog>
        </div>
    );
}

export default Test;
<h2>Test</h2>;
