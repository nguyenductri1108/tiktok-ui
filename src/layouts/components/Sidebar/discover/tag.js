import classNames from 'classnames/bind';
import styles from './tag.module.scss';

const cx = classNames.bind(styles);

function Tag({ title, icon }) {
    return (
        <div className={cx('tag')}>
            <span className={cx('tag-icon')}>{icon}</span>
            <h4 className={cx('tag-title')}>{title}</h4>
        </div>
    );
}

export default Tag;
