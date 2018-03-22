import React = require("react");
import Footer from "./Footer";
import Header from "./Header";

class Layout extends React.Component<{}, {}> {
  public render() {
    return (
      <>
        <Header />
        <div className="container content">{this.props.children}</div>
        <Footer />
      </>
    );
  }
}

export default Layout;
