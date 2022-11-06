import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children, headerSize, contentSize }) {
    console.log('headerSize at DefaultLayout:' + headerSize);
    return (
        <div className={cx('wrapper')}>
            <Header className={cx(headerSize)} />
            <div className={cx('container', contentSize)}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
