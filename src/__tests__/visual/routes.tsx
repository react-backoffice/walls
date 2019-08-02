import React, { ReactElement } from "react";

export default [{
  private: false,
  exact: true,
  path: "/",
  render: (): ReactElement => (
    <p>Home</p>
  ),
}, {
  private: false,
  exact: true,
  path: "/foo",
  render: (): ReactElement => (
    <p>Foo</p>
  ),
}, {
  private: true,
  exact: true,
  path: "/bar",
  render: (): ReactElement => (
    <p>Bar (Private)</p>
  ),
}];
