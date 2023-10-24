import React from "react";
import PageTitle from "../common-ui/PageTitle";
import ViewFilterStaff from "../components/tabularViews/ViewFilterStaff";
import { useSelector } from "react-redux";
import Button from "../common-ui/Button";
import SearchFilter from "../components/SearchFilter";
import { Outlet } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export default function Staff() {
  //
  const currentView = useSelector((state) => state.staffView.currentView);
  //
  return (
    <div className="w-full  flex flex-col gap-1.5 md:px-0.38 pt-1.5">
      <PageTitle title={currentView} />
      <div className="flex justify-between md:flex-row flex-col gap-3">
        <ViewFilterStaff />

        <div className="flex gap-2">
          <Button
            icon={<AiOutlinePlus className="inline text-red-700" />}
            txt={` ${currentView}`}
            onClick={() => {}}
            style={`btn_test_data`}
          />
        </div>
      </div>
      <SearchFilter />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
