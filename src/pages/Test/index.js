import { MenuItem, TextareaAutosize, TextField } from '@mui/material';
import styles from './Test.module.scss';
import classNames from 'classnames/bind';
// import 'antd/dist/antd.css';

// import './index.css';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import { useRef, useState } from 'react';

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
    // const [img, setImg] = useState('./');

    const inputRef = useRef();

    const handleInput = (e) => {
        // setImg(inputRef.current.value);
        console.log('input: ' + e.target.file[0]);
    };

    function chooseFileClick() {
        inputRef.current.click();
    }

    function dropHandler(ev) {
        console.log('File(s) dropped');

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();

        if (ev.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...ev.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === 'file') {
                    const file = item.getAsFile();
                    console.log(`… file[${i}] = ${file}`);
                }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...ev.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}] = ${file}`);
            });
        }
    }

    function dragOverHandler(ev) {
        console.log('File(s) in drop zone');

        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
    }

    return (
        <div>
            <div className="abcc">
                <h2>Test</h2>
            </div>

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

            <input hidden multiple type="file" ref={inputRef} onChange={handleInput} />
            <div onClick={chooseFileClick} className={cx('dropPlace')}>
                Drop file here
            </div>

            <div className={cx('drop')} onDrop={dropHandler} onDragOver={dragOverHandler}>
                <p>
                    Drag one or more files to this <i>drop zone</i>.
                </p>
            </div>

            {/* <img src={img} alt="img" className={cx('img')} /> */}
        </div>
    );
}

export default Test;
<h2>Test</h2>;
