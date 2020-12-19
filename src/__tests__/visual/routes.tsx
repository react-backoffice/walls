import React, { ReactElement } from "react";

export default [
  {
    private: false,
    exact: true,
    path: "/",
    render: () => <p>Home</p>,
  },
  {
    private: false,
    exact: true,
    path: "/foo",
    render: () => <p>Foo</p>,
  },
  {
    private: true,
    exact: true,
    path: "/bar",
    render: () => <p>Bar (Private)</p>,
    fallback: () => <p>Unauthorized</p>,
  },
];
