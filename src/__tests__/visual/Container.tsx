import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";

import Walls from "../../../index";

import routes from "./routes";

const Container = (): ReactElement<any> => (
  <Walls routes={routes}>
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/foo">Foo</NavLink></li>
        <li><NavLink to="/bar">Bar (Private)</NavLink></li>
      </ul>
    </nav>
  </Walls>
);

export default Container;
