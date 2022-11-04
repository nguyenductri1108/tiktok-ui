import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';

import { sidebarIcon } from '~/assets/iconSVG';
import { MenuItem, MainMenu } from './mainMenu';
import ListAccountsSidebar from '~/component/ListAccountSidebar';

const cx = classNames.bind(styles);

const loggedIn = true;

function Sidebar() {
    return (
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

            <ListAccountsSidebar
                heading="Suggested Account"
                data={[
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
                ]}
            />

            <ListAccountsSidebar
                heading="Following"
                data={[
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
                ]}
            />
        </aside>
    );
}

export default Sidebar;
