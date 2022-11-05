import classNames from 'classnames/bind';
import Button from '~/component/Button';
import styles from './loginRecommend.module.scss';

const cx = classNames.bind(styles);

function LoginRec() {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Log in to follow creators, like videos, and view comments.</h4>
            <Button className={cx('button')} to="/login" outline large>
                Log in
            </Button>
        </div>
    );
}

export default LoginRec;
