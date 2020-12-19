import React, { ReactElement, FunctionComponent, ReactNode } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

export interface RouteProps {
  id?: string;
  private?: boolean;
  exact?: boolean;
  path?: string | string[];
  render: (props: any) => ReactNode;
  fallback?: FunctionComponent<any>;
}

interface Props {
  routes: RouteProps[];
  isAuthorized?: boolean;
  onUnauthorized?: (props: any) => void;
}

const Walls: FunctionComponent<Props> = ({
  routes,
  isAuthorized = false,
  onUnauthorized,
  children,
}) => {
  return (
    <Router>
      <>
        {children}

        <Switch>
          {routes.map(
            (route: RouteProps, index: number): ReactElement<any> => {
              const { private: privateRoute, id, fallback, ...props } = route;
              const key = `route-${id || props.path || index}`;

              if (privateRoute) {
                return (
                  <PrivateRoute
                    key={key}
                    isAuthorized={isAuthorized}
                    onUnauthorized={onUnauthorized}
                    fallback={fallback}
                    {...props}
                  />
                );
              }

              return <Route key={key} {...props} />;
            },
          )}
        </Switch>
      </>
    </Router>
  );
};

export default Walls;
