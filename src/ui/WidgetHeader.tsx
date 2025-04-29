import { NavLink } from "react-router-dom";

import * as R from "../config/routes";

const routes = [
  {
    route: R.HOME_ROUTE, 
    designation: "MOVIESEARCH",
    class: "widget-title"
  }, 
  {
    route: R.FAVORITES_ROUTE, 
    designation: "keyboard_double_arrow_right star",
    class: "favorites-mark material-icons"
  }
];

export const WidgetHeader = () => {
  return (
    <nav className="widget-header">
      {routes.map((route, i) => {
        return (
          <NavLink 
            key={i}
            className={route.class} 
            to={route.route}>{route.designation}           
          </NavLink>
        );
      })}
    </nav>
  );
};

