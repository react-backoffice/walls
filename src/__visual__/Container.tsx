import React, { FunctionComponent, ReactElement, useState } from "react";
import { NavLink } from "react-router-dom";

import Walls from "../../index";

import routes from "./routes";

const Container: FunctionComponent<any> = () => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  return (
    <Walls routes={routes} isAuthorized={isAuthorized}>
      <div style={{ display: "flex" }}>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/foo">Foo</NavLink>
            </li>
            <li>
              <NavLink to="/bar">Bar (Private)</NavLink>
            </li>
          </ul>
        </nav>

        <div>
          <label htmlFor="isAuthorized">Is Authorized?</label>
          <input
            type="checkbox"
            onChange={() => setIsAuthorized(!isAuthorized)}
            id="isAuthorized"
          />
        </div>
      </div>
    </Walls>
  );
};

export default Container;
