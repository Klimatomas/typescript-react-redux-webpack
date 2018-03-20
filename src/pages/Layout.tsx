import React = require("react");

class Layout extends React.Component<{}, {}> {
  public render() {
    return <div className="container">{this.props.children}</div>;
  }
}

export default Layout;
