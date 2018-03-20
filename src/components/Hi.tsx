import * as React from "react";
import { SFC } from "react";
import { Link } from "react-router-dom";

interface IHiProps {
  name?: string;
}

const Hi: SFC<IHiProps> = (props: IHiProps) => {
  return (
    <div>
      <h3>Hi there!</h3>
      <Link to="/">CLICK ME</Link>
    </div>
  );
};

export default Hi;
