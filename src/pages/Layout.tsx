import React = require("react");
import { Link } from "react-router-dom";

class Layout extends React.Component<{}, {}>{
    public render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        )
    }
}

export default Layout;