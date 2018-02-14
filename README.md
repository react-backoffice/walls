# Walls

Walls is a [`react-router-dom`](https://reacttraining.com/react-router/)
implementation that builds upon configuration.

## Usage

### Installing

If you use yarn, just run the following command in your project’s root directory.

    yarn add walls

Or using npm:

    npm install --save walls

## Walls Component

Walls is the main routing component

### Properties

* `routes: Route[]`, configuration for all routes
* `isAuthorized: boolean`, is current user authorized
* `onUnauthorized: function`, if not authorized, do this

## License

This framework is licensed under [MIT](./LICENSE)
