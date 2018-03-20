import * as React from "react";
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import { Provider } from "react-redux";
import createBrowserHistory from 'history/createBrowserHistory'

import Layout from "./pages/Layout";
import Hello from "./components/Hello";
import Hi from "./components/Hi";

const customHistory = createBrowserHistory()


class Routes extends React.Component<{}, {}>{
    render() {
        return (
            <Router>
                <Layout>
                    <Route exact path="/" component={Hello} />
                    <Route exact path="/hi" component={Hi} />
                </Layout>
            </Router>
        )
    }
}

export default Routes;