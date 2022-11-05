import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';

import { discoverIcon, sidebarIcon } from '~/assets/iconSVG';
import { MenuItem, MainMenu } from './mainMenu';
import ListAccountsSidebar from '~/component/ListAccountSidebar';
import LoginRec from './loginRecommend';
import Discover from './discover/discover';
import Footer from './footer';

const cx = classNames.bind(styles);

const loggedIn = false;

const SuggestedAccount = [
    {
        nickname: 'tri',
        avatar: 'dsa',
        tick: true,
        full_name: 'trind',
    },
    {
        nickname: 'tri',
        avatar: 'dsa',
        tick: true,
        full_name: 'trind',
    },
    {
        nickname: 'tri',
        avatar: 'dsa',
        tick: true,
        full_name: 'trind',
    },
    {
        nickname: 'tri',
        avatar: 'dsa',
        tick: true,
        full_name: 'trind',
    },
];

const FollowingAccount = [
    {
        nickname: 'tri',
        avatar: 'dsa',
        tick: true,
        full_name: 'trind',
    },
    {
        nickname: 'tri',
        avatar: 'dsa',
        tick: true,
        full_name: 'trind',
    },
    {
        nickname: 'tri',
        avatar: 'dsa',
        tick: true,
        full_name: 'trind',
    },
];

const DiscoverAccount = [
    {
        title: 'suthatla',
        icon: discoverIcon.hashtag,
    },
    {
        title: 'mackedoi',
        icon: discoverIcon.hashtag,
    },
    {
        title: 'sansangthaydoi',
        icon: discoverIcon.hashtag,
    },
    {
        title: 'Về Nghe Mẹ Ru - NSND Bach Tuyet & Hứa Kim Tuyền & 14 Casper & Hoàng Dũng',
        icon: discoverIcon.music,
    },
    {
        title: 'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n',
        icon: discoverIcon.music,
    },
    {
        title: 'Thiên Thần Tình Yêu - RICKY STAR',
        icon: discoverIcon.music,
    },
    {
        title: '7749hieuung',
        icon: discoverIcon.hashtag,
    },
    {
        title: 'genzlife',
        icon: discoverIcon.hashtag,
    },
    {
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
        icon: discoverIcon.music,
    },
    {
        title: '<p class="tiktok-e841qv-PText eikhr9j12">Thằng Hầu (Thái Hoàng Remix) [Short Version] - Dunghoangpham</p>',
        icon: discoverIcon.music,
    },
];

const FooterData = [
    ['About', 'Newsroom', 'Contact', 'Careers', 'ByteDance'],
    ['TikTok for Good', 'Advertise', 'Developers', 'Transparency', 'TikTok Rewards', 'TikTok Browse', 'TikTok Embeds'],
    [],
    [],
];

function Sidebar() {
    return (
        <div className={cx('container')}>
            <aside className={cx('wrapper')}>
                <MainMenu>
                    <MenuItem
                        title="For You"
                        to={config.publicRoutes.home}
                        icon={sidebarIcon.mainMenu.home.regular}
                        activeIcon={sidebarIcon.mainMenu.home.solid}
                    />
                    <MenuItem
                        title="Following"
                        to={config.publicRoutes.following}
                        icon={sidebarIcon.mainMenu.following.regular}
                        activeIcon={sidebarIcon.mainMenu.following.solid}
                    />
                    <MenuItem
                        title="LIVE"
                        to={config.publicRoutes.live}
                        icon={sidebarIcon.mainMenu.live.regular}
                        activeIcon={sidebarIcon.mainMenu.live.solid}
                    />
                </MainMenu>

                {!loggedIn && <LoginRec></LoginRec>}

                <ListAccountsSidebar heading="Suggested Account" data={SuggestedAccount} />

                {loggedIn && <ListAccountsSidebar heading="Following" data={FollowingAccount} />}

                <Discover data={DiscoverAccount}></Discover>

                <Footer data={FooterData}></Footer>
            </aside>
        </div>
    );
}

export default Sidebar;
