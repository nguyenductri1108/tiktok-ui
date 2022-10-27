import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Avatar } from '@mui/material';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <li className={cx('Wrapper')}>
            <Avatar
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tiktok-obj/1666177006571521~c5_300x300.webp?x-expires=1666018800&x-signature=1J0e3hD9GnNmgZIhz%2FWNgFlR7SU%3D"
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>saigonteu</span>
                    <FontAwesomeIcon className={cx('verify-icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('username')}>Saigon Tếu</p>
            </div>
        </li>
    );
}

export default AccountItem;
