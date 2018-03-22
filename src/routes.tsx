import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hi from "./components/Hi";
import Layout from "./layout/Layout";
import HelloMain from "./pages/HelloMain";

class Routes extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={HelloMain} />
          <Route exact path="/hi" component={Hi} />
        </Layout>
      </Router>
    );
  }
}

export default Routes;
