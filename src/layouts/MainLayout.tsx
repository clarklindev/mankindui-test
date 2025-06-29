import { Outlet } from "react-router-dom";
import Header from "../components/main-header";

export default function MainLayout() {
  return (
    <div>
      <Header />
      <main className="pt-20">
        <Outlet /> {/* This is where child routes render */}
      </main>
    </div>
  );
}
