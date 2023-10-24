import { Outlet } from "react-router-dom";
import NavLeft from "../components/nav/NavLeft";
 
//
export default function Landing() {
  return (
    <div className="w-full h-full bg-sl/50 grid grid-cols-5 ">
      <NavLeft />
      <div className="col-span-4 px-2.0 bg-wh">
        <Outlet />
      </div>
    </div>
  );
}
