import React from "react";
import { screen, render } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Walls, { Props } from "../Walls";

import "@testing-library/jest-dom/extend-expect";

const ROUTE = {
  id: "foo",
  route: "/foo",
  render: () => <>foo</>,
  private: false,
};

const renderWrapper = (props: Props, currentRoute: string) => {
  const history = createMemoryHistory();
  history.push(currentRoute);

  render(
    <Router history={history}>
      <Walls {...props} />
    </Router>,
  );
};

describe("Walls", () => {
  describe("Given an existing walls garden", () => {
    describe("then a route is public ", () => {
      describe("can be visited", () => {
        beforeEach(() => {
          renderWrapper({ routes: [ROUTE] }, ROUTE.route);
        });

        it("renders Route component", () => {
          expect(screen.getByText(/foo/i)).toBeInTheDocument();
        });
      });
    });

    describe("then a route is private", () => {
      describe("and the user is authorized", () => {
        describe("can be visited", () => {
          beforeEach(() => {
            renderWrapper(
              {
                isAuthorized: true,
                routes: [
                  { ...ROUTE, render: () => <>private</>, private: true },
                ],
              },
              ROUTE.route,
            );
          });

          it("renders as Private Route", () => {
            expect(screen.getByText(/private/i)).toBeInTheDocument();
          });
        });
      });

      describe("and the user is not authorized", () => {
        describe("can not be visited", () => {
          beforeEach(() => {
            renderWrapper(
              {
                isAuthorized: false,
                routes: [
                  {
                    ...ROUTE,
                    render: () => <>private</>,
                    fallback: () => <>fallback</>,
                    private: true,
                  },
                ],
              },
              ROUTE.route,
            );
          });

          it("does not render the private route", () => {
            expect(screen.getByText(/fallback/i)).toBeInTheDocument();
          });
        });
      });
    });
  });
});
