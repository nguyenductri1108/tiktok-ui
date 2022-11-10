import { MenuItem, TextField } from '@mui/material';
import styles from './Test.module.scss';
import classNames from 'classnames/bind';

// import './index.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useRef } from 'react';

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

function Test() {
    const inputRef = useRef();

    const handleInput = () => {
        console.log('inputRef:' + inputRef.current);
    };

    function chooseFileClick() {
        inputRef.current.click();
    }

    function handleChangeInput() {
        console.log(inputRef.current.file);
    }

    return (
        <div>
            <h2>
                Test
                <h3 className={cx('abc')}>abc</h3>
            </h2>
            {/* <TextField
                variant="outlined"
                id="demo-simple-select-autowidth"
                select
                defaultValue={'English'}
                className="language_choose"
                sx={{
                    width: '172px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                }}
                SelectProps={{
                    style: { color: 'yellow', fontSize: '18px' },
                }}
            >
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Tiếng Việt">Tiếng việt</MenuItem>
                <MenuItem value="Japanese">Japanese</MenuItem>
                <MenuItem value="Tiếng abc">Tiếng abc</MenuItem>
            </TextField> */}

            {/* <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other band
                    files
                </p>
            </Dragger> */}

            <input hidden multiple="false" type="file" ref={inputRef} onChange={handleInput} />
            <div onClick={chooseFileClick} onChange={handleChangeInput} className={cx('dropPlace')}>
                Drop file here
            </div>
        </div>
    );
}

export default Test;
<h2>Test</h2>;
