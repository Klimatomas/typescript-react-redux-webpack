import * as React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Hello from "./components/Hello";
import Hi from "./components/Hi";
import Layout from "./pages/Layout";

class Routes extends React.Component<{}, {}> {
  public render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Hello} />
          <Route exact path="/hi" component={Hi} />
        </Layout>
      </Router>
    );
  }
}

export default Routes;
