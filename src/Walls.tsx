import React, {
  ReactElement,
  FunctionComponent,
  ReactNode,
} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";

export interface RouteProps {
  id?: string;
  private?: boolean;
  exact?: boolean;
  path?: string | string[];
  render: (props: any) => ReactNode;
}

interface Props {
  routes: RouteProps[];
  isAuthorized?: boolean;
  onUnauthorized?: (props: any) => void;
  children?: ReactElement;
}

const Walls: FunctionComponent<Props> = ({
  routes,
  isAuthorized = false,
  onUnauthorized,
  children,
}): ReactElement => {
  const PrivateRouteAny = PrivateRoute as any;

  return (
    <Router>
      <>
        {children}

        <Switch>
          {routes.map(
            (route: RouteProps): ReactElement => {
              const { private: privateRoute, id, ...props } = route;
              const key = `route-${id || (Math.random() * 10000).toFixed(4)}`;

              if (privateRoute) {
                return (
                  <PrivateRouteAny
                    key={key}
                    isAuthorized={isAuthorized}
                    onUnauthorized={onUnauthorized}
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
