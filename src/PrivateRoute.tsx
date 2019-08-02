import React, { FunctionComponent, ReactElement } from "react";
import { Route, withRouter } from "react-router-dom";

interface Props {
  isAuthorized: boolean;
  onUnauthorized: (props: any) => void;
}

const PrivateRoute: FunctionComponent<Props> = ({
  isAuthorized,
  onUnauthorized,
  ...props
}): ReactElement | null => {
  if (!isAuthorized) {
    if (typeof onUnauthorized === "function") {
      onUnauthorized(props);
    }

    return null;
  }

  return (
    <Route {...props} />
  );
};

export default withRouter(PrivateRoute as any);
