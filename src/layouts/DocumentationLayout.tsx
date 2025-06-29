import { Outlet } from "react-router-dom";

export default function DocumentationLayout() {
  return (
    <div>
      <Outlet /> {/* This is where child routes render */}
    </div>
  );
}
