import { Outlet } from "react-router-dom";
import { WidgetHeader } from "./WidgetHeader";

export const MainTemplate = () => {
  return (
    <div className="widget-container">
      <WidgetHeader />
      <main className="widget-content">
        <Outlet />
      </main>
    </div>
  );
}
