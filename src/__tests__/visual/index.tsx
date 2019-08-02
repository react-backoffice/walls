import React from "react";
import ReactDOM from "react-dom";

import Container from "./Container";

const element = document.querySelector("[data-react-app]");
const render = (Component: any): any => {
  ReactDOM.render(
    <Component />,
    element,
  );
};

render(Container);
