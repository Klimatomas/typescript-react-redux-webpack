import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello: React.SFC<HelloProps> = (props: HelloProps) => (
  <div className={"container"}>
    <h3>
      Hello from {props.compiler} and {props.framework}! Now with HMR from
      Webpack and Redux support!
    </h3>
  </div>
);
