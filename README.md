# Walls

Walls is a [`react-router-dom`](https://reacttraining.com/react-router/)
implementation that builds upon configuration.

[![Build Status](https://travis-ci.org/drublic/walls.svg?branch=master)](https://travis-ci.org/drublic/walls)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdrublic%2Fwalls.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdrublic%2Fwalls?ref=badge_shield)

## Usage

### Installing

If you use yarn, just run the following command in your project’s root directory.

    yarn add walls

Or using npm:

    npm install --save walls

### Using with your React-Component

```javascript
import routes from './routes'

const MyApp = ({ isAuthorized, onUnauthorized }) => (
  <Walls
    routes={routes}
    isAuthorized={isAuthorized}
    onUnauthorized={onUnauthorized}
  />
)
```

### Routes file

You can write a roules config that looks like this (`rotes.jsx`):

```javascript
import React from 'react'

export default [{
  private: false,
  exact: true,
  path: '/',
  render: () => (
    <p>Home</p>
  ),
}, {
  private: false,
  exact: true,
  path: '/foo',
  render: () => (
    <p>Foo</p>
  ),
}, {
  private: false,
  exact: true,
  path: '/bar',
  render: () => (
    <p>Bar</p>
  ),
}]
```

## Walls Component

Walls is the main routing component

### Properties

* `routes: Route[]`, configuration for all routes
* `isAuthorized: boolean`, is current user authorized
* `onUnauthorized: function`, if not authorized, do this

### Route

* `private: boolean`, Is this route protected?
* `exact: boolean`, Should the path match exactly?
* `path: string`, path to this route
* `render: function`, a rendering function

## React Router Functions

You can use these React Router functions via Walls:

* `Link`
* `NavLink`
* `Redirect`
* `matchPath`
* `withRouter`

## License

This framework is licensed under [MIT](./LICENSE)

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fdrublic%2Fwalls.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fdrublic%2Fwalls?ref=badge_large)
