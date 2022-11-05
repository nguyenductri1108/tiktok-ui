import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import FooterColumn from './footerColumn';
import { footerIcon } from '~/assets/iconSVG';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { MenuItem, Select } from '@mui/material';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Footer({ data }) {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
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
                    <FormControl sx={{ m: 1, minWidth: 80 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={age}
                            onChange={handleChange}
                            autoWidth
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Twenty</MenuItem>
                            <MenuItem value={21}>Twenty one</MenuItem>
                            <MenuItem value={22}>Twenty one and a half</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}

export default Footer;
