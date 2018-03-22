import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

export interface IHelloProps {
  compiler: string;
  framework: string;
}

class Hello extends React.Component<IHelloProps, {}> {
  public render() {
    return (
      <div className="col">
        <h3>
          Hello from {this.props.compiler} and {this.props.framework} ! Now with
          HMR from Webpack and Redux support! ++ TSLint (tslint-misc-rules) ++
          Prettier for formatting ++ Bootstrap for styles
        </h3>
        <Link to="/hi">CLICK ME</Link>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
