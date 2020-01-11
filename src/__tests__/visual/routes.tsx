import React, { ReactElement } from "react";

export default [{
  private: false,
  exact: true,
  path: "/",
  render: (): ReactElement<any> => (
    <p>Home</p>
  ),
}, {
  private: false,
  exact: true,
  path: "/foo",
  render: (): ReactElement<any> => (
    <p>Foo</p>
  ),
}, {
  private: true,
  exact: true,
  path: "/bar",
  render: (): ReactElement<any> => (
    <p>Bar (Private)</p>
  ),
}];
