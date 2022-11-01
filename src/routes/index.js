//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import config from '~/config';
//Layout

import { HeaderOnly } from '~/layouts';

const publicRoutes = [
    { path: config.publicRoutes.home, component: Home },
    { path: config.publicRoutes.following, component: Following },
    { path: config.publicRoutes.upload, component: Upload, layout: HeaderOnly },
    { path: config.publicRoutes.search, component: Search, layout: null },
    { path: config.publicRoutes.profile, component: Search, layout: HeaderOnly },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
