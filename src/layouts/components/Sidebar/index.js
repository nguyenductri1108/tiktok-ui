import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';

import { sidebarIcon } from '~/assets/iconSVG';
import { MenuItem, MainMenu } from './mainMenu';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <MainMenu>
                <MenuItem title="For You" to={config.publicRoutes.home} icon={sidebarIcon.mainMenu.home} />
                <MenuItem title="Following" to={config.publicRoutes.following} icon={sidebarIcon.mainMenu.following} />
                <MenuItem title="LIVE" to={config.publicRoutes.following} icon={sidebarIcon.mainMenu.live} />
            </MainMenu>
        </aside>
    );
}

export default Sidebar;
