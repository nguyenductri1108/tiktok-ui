import classNames from 'classnames/bind';
import { useContext } from 'react';
import Button from '~/component/Button';
import { ModalContext } from '~/component/Context/ModalContext';
import styles from './loginRecommend.module.scss';

const cx = classNames.bind(styles);

function LoginRec() {
    const ModalAction = useContext(ModalContext);

    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('title')}>Log in to follow creators, like videos, and view comments.</h4>
            <Button className={cx('button')} onClick={ModalAction.open} outline size="large">
                Log in
            </Button>
        </div>
    );
}

export default LoginRec;
