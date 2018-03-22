import { SFC } from "react";
import React = require("react");
import { Link } from "react-router-dom";

interface IHiProps {
  name: string;
}

const Hi: SFC<IHiProps> = (props: IHiProps) => {
  return (
    <div className="col">
      <h3>Hi there! {props.name}</h3>
      <Link to="/">CLICK ME</Link>
    </div>
  );
};

export default Hi;
