import Walls, { RouteProps as RoutePropsWalls } from "./src/Walls";

export {
  Link,
  NavLink,
  Redirect,
  matchPath,
  withRouter,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export type RouteProps = RoutePropsWalls;

export default Walls;
