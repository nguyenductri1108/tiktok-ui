import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './account.module.scss';
import { Avatar, Skeleton } from '@mui/material';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
function Account({ loading = false, itemData = {} }) {
    return (
        <Link to={`/@${itemData.nickname}`} className={cx('Wrapper')}>
            {loading ? (
                <Skeleton variant="circular">
                    <Avatar sx={{ width: 32, height: 32 }} />
                </Skeleton>
            ) : (
                <Avatar sx={{ width: 32, height: 32 }} className={cx('avatar')} src={itemData.avatar} />
            )}
            <div className={cx('info')}>
                {loading ? (
                    <Skeleton sx={{ width: '100%' }} />
                ) : (
                    <p className={cx('name')}>
                        <span>{itemData.nickname}</span>
                        {itemData.tick && <FontAwesomeIcon className={cx('verify-icon')} icon={faCheckCircle} />}
                    </p>
                )}
                {loading ? <Skeleton sx={{ width: '100%' }} /> : <p className={cx('username')}>{itemData.full_name}</p>}
            </div>
        </Link>
    );
}

export default Account;
