import styles from './footer.module.scss';
import classNames from 'classnames/bind';
import FooterList from './footerList';

const cx = classNames.bind(styles);

function Footer({ data }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((item, index) => {
                return <FooterList key={index} data={item}></FooterList>;
            })}
        </div>
    );
}

export default Footer;
