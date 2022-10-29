import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { Avatar } from '@mui/material';

const cx = classNames.bind(styles);
function AccountItem({ itemData }) {
    return (
        <li className={cx('Wrapper')}>
            <Avatar className={cx('avatar')} src={itemData.avatar} />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>{itemData.nickname}</span>
                    {itemData.tick && <FontAwesomeIcon className={cx('verify-icon')} icon={faCheckCircle} />}
                </p>
                <p className={cx('username')}>{itemData.full_name}</p>
            </div>
        </li>
    );
}

export default AccountItem;
