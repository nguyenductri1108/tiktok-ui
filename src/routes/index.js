//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import config from '~/config';
//Layout

import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    { path: config.publicRoutes.home, component: Home, headerSize: 'normal', contentSize: 'normal' },
    { path: config.publicRoutes.following, component: Following, headerSize: 'full', contentSize: 'full' },
    {
        path: config.publicRoutes.upload,
        component: Upload,
        layout: HeaderOnly,
        headerSize: 'full',
        contentSize: 'normal',
        footer: true,
    },
    { path: config.publicRoutes.search, component: Search, layout: null, headerSize: 'full', contentSize: 'full' },
    {
        path: config.publicRoutes.profile,
        component: Search,
        layout: HeaderOnly,
        headerSize: 'normal',
        contentSize: 'normal',
    },
    { path: config.publicRoutes.live, component: Following, headerSize: 'full', contentSize: 'full' },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
