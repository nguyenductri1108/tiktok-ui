import Footer from '../components/Footer';
import Header from '../components/Header';

import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';

const cx = classNames.bind(styles);

const footerContent = [
    { title: 'Company', data: ['About', 'Newsroom', 'Contact', 'Careers', 'ByteDance'] },
    {
        title: 'Programs',
        data: ['TikTok for Good', 'Advertise', 'Developers', 'TikTok Rewards', 'TikTok Browse', 'TikTok Embeds'],
    },
    {
        title: 'Support',
        data: [
            'Help Center',
            'Safety Center',
            'Creator Portal',
            'Community Guidelines',
            'Transparency',
            'Accessibility',
        ],
    },
    {
        title: 'Legal',
        data: ['Privacy Policy', 'Terms of Use'],
    },
];

function HeaderOnly({ children, footer, headerSize, contentSize }) {
    return (
        <div>
            <Header className={cx(headerSize)} />
            <div className={cx('container', contentSize)}>
                <div className={cx('content')}>{children}</div>
            </div>
            <Footer data={footerContent} />
        </div>
    );
}

export default HeaderOnly;
