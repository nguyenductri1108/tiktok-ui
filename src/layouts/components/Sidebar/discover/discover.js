import styles from './tag.module.scss';
import classNames from 'classnames/bind';
import Tag from './tag';

const cx = classNames.bind(styles);

function Discover({ data }) {
    return (
        <div className={cx('wrapper')}>
            <h4 className={cx('heading')}>Discover</h4>
            <div className={cx('content')}>
                {data.map((item, index) => {
                    return <Tag key={index} title={item.title} icon={item.icon}></Tag>;
                })}
            </div>
        </div>
    );
}

export default Discover;
