import React, { FunctionComponent } from "react";
import { Route } from "react-router-dom";

interface Props {
  isAuthorized: boolean;
  onUnauthorized?: (props: any) => void;
  fallback?: FunctionComponent<any>;
}

const PrivateRoute: FunctionComponent<Props> = ({
  isAuthorized,
  onUnauthorized,
  fallback,
  ...props
}) => {
  if (!isAuthorized) {
    if (typeof onUnauthorized === "function") {
      onUnauthorized(props);
    }

    return <Route {...props}>{fallback}</Route>;
  }

  return <Route {...props} />;
};

export default PrivateRoute;
