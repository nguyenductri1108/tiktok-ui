import styles from './footer.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function FooterColumn({ title, data }) {
    return (
        <div className={cx('footer-col')}>
            <h4 className={cx('col-title')}>{title}</h4>
            {data.map((item, index) => {
                return (
                    <span key={index} className={cx('col-item')}>
                        {item}
                    </span>
                );
            })}
        </div>
    );
}

export default FooterColumn;
