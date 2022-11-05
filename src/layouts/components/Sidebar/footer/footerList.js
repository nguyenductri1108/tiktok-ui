import styles from './footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FooterList({ data }) {
    return (
        <div className={cx('title-list')}>
            {data.map((item, index) => {
                return <span className={cx('title-item')}>{item}</span>;
            })}
        </div>
    );
}

export default FooterList;
