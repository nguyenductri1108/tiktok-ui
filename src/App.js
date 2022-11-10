import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalCss from './component/GlobalCss';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from './layouts';
import { Fragment } from 'react';

function App() {
    return (
        <Router>
            <GlobalCss>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            let props = { headerSize: route.headerSize, contentSize: route.contentSize };
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                                props = {};
                            }
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout {...props}>
                                            <route.component />
                                        </Layout>
                                    }
                                ></Route>
                            );
                        })}
                    </Routes>
                </div>
            </GlobalCss>
        </Router>
    );
}

export default App;
