import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import FooterColumn from './footerColumn';
import { footerIcon } from '~/assets/iconSVG';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { makeStyles, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Footer({ data }) {
    const [language, setLanguage] = useState('English');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };
    return (
        <div className={cx('wrapper')}>
            <footer className={cx('footer-container')}>
                <div className={cx('logo')}>
                    <span>{footerIcon.logo}</span>
                    <span className={cx('brand')}>{footerIcon.brand}</span>
                </div>
                {data.map((item, index) => {
                    return <FooterColumn key={index} title={item.title} data={item.data}></FooterColumn>;
                })}
            </footer>

            <div className={cx('end')}>
                <div className={cx('language')}>
                    {/* <FormControl>
                        <NativeSelect
                            defaultValue={'English'}
                            inputProps={{
                                name: 'Language',
                                id: 'uncontrolled-native',
                            }}
                        >
                            <option value={'English'}>English</option>
                            <option value={'Tiếng Việt'}>Tiếng Việt</option>
                        </NativeSelect>
                    </FormControl> */}
                    {/* <TextField
                        variant="outlined"
                        id="demo-simple-select-autowidth"
                        value={language}
                        onChange={handleChange}
                        select
                        className={cx('language-choose')}
                        sx={{
                            width: '172px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                        }}
                        SelectProps={{
                            style: {
                                color: 'yellow',
                            },
                        }}
                    >
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Tiếng Việt">Tiếng việt</MenuItem>
                        <MenuItem value="Japanese">Japanese</MenuItem>
                        <MenuItem value="Tiếng abc">Tiếng abc</MenuItem>
                    </TextField> */}
                </div>
            </div>
        </div>
    );
}

export default Footer;
