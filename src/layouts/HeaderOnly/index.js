import Footer from '../components/Footer';
import Header from '../components/Header';

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

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Footer data={footerContent} />
        </div>
    );
}

export default HeaderOnly;
