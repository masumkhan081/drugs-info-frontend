import { Link, Outlet } from "react-router-dom";
import Nav from "../components/Nav"; 
export default function Layout() {
  return (
    <div className="w-full min-h-screen flex flex-col gap-2.25 bg-green-100">
      <Nav /> 
      <Outlet />
    </div>
  );
}
