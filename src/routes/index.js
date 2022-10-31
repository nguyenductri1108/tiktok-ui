//Page
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { publicRoutes as Route } from '~/config/routes';
//Layout

import { HeaderOnly } from '~/component/Layout';

const publicRoutes = [
    { path: Route.home, component: Home },
    { path: Route.following, component: Following },
    { path: Route.upload, component: Upload, layout: HeaderOnly },
    { path: Route.search, component: Search, layout: null },
    { path: Route.profile, component: Search, layout: HeaderOnly },
];

const privateRoutes = {};

export { publicRoutes, privateRoutes };
