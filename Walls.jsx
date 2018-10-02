import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import RouteTransitionGroup from './RouteTransitionGroup'

class Walls extends React.PureComponent {
  static propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
      private: PropTypes.bool,
      exact: PropTypes.bool,
      path: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]),
      render: PropTypes.func,
    })).isRequired,
    isAuthorized: PropTypes.bool,
    onUnauthorized: PropTypes.func,
    children: PropTypes.node,
  }

  static defaultProps = {
    isAuthorized: false,
    onUnauthorized: () => { },
    children: null,
  }

  render() {
    const {
      routes,
      isAuthorized,
      onUnauthorized,
      children,
    } = this.props

    return (
      <Router>
        <Route
          render={({ location }) => (
            <Fragment>
              {children}

              <RouteTransitionGroup location={location}>
                <Switch location={location}>
                  {routes.map((route) => {
                    const {
                      private: privateRoute,
                      render,
                      ...props
                    } = route
                    const key = route.path

                    if (privateRoute) {
                      return (
                        <PrivateRoute
                          key={key}
                          isAuthorized={isAuthorized}
                          onUnauthorized={onUnauthorized}
                          render={render}
                          {...props}
                        />
                      )
                    }

                    return (
                      <Route
                        key={key}
                        render={render}
                        {...props}
                      />
                    )
                  })}
                </Switch>
              </RouteTransitionGroup>

            </Fragment>
          )}
        />
      </Router>
    )
  }
}

export default Walls
