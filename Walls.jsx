import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import PrivateRoute from './PrivateRoute'
import RouteTranstionGroup from './RouteTransitionGroup'

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
        <Fragment>
          {children}

          <Switch>
            {routes.map((route) => {
              const { private: privateRoute, render, ...props } = route
              const key = `route-${(Math.random() * 10000).toFixed(4)}`

              if (privateRoute) {
                return (
                  <PrivateRoute
                    key={key}
                    isAuthorized={isAuthorized}
                    onUnauthorized={onUnauthorized}
                    render={newProps => (
                      <RouteTranstionGroup
                        {...newProps}
                        render={render}
                      />
                    )}
                    {...props}
                  />
                )
              }

              return (
                <Route
                  key={key}
                  render={newProps => (
                    <RouteTranstionGroup
                      {...newProps}
                      render={render}
                    />
                  )}
                  {...props}
                />
              )
            })}
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default Walls
