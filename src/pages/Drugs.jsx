import { useSelector, useDispatch } from "react-redux";
import Button from "../common-ui/Button";
import PageTitle from "../common-ui/PageTitle";
import ViewFilterDrugs from "../components/tabularViews/ViewFilterDrugs";
import SearchFilter from "../components/SearchFilter";
import { AiOutlinePlus } from "react-icons/ai";

//
import { Outlet } from "react-router-dom";
import { useState } from "react";
import DrugForm from "../components/drugs/DrugForm";
import MFRForm from "../components/drugs/MFRForm";
import UnitForm from "../components/drugs/UnitForm";
import GroupForm from "../components/drugs/GroupForm";
import GenericForm from "../components/drugs/GenericForm";
import BrandForm from "../components/drugs/BrandForm";
import FormulationForm from "../components/drugs/FormulationForm";

export default function Drugs() {
  //

  const [dropDown, setDropDown] = useState(false);
  const [menuFolded, setMenuFolded] = useState(true);

  const currentView = useSelector((state) => state.drugsView.currentView);

  return (
    <div className="w-full  flex flex-col gap-1.5 md:px-0.38 pt-1.5">
      <PageTitle title={currentView} />
      <div className="flex justify-between md:flex-row flex-col gap-3">
        <ViewFilterDrugs />

        <div className="flex gap-2">
          <Button
            icon={<AiOutlinePlus className="inline text-red-700" />}
            txt={` ${currentView}`}
            onClick={() => { setDropDown(!dropDown) }}
            style={`btn_test_data`}
          />
        </div>
        <div className={dropDown ? "nav_drop_down" : `hidden`}>
          {currentView == "brands" && <BrandForm visible={dropDown} setDropDown={setDropDown} />}
          {currentView == "drugs" && <DrugForm visible={dropDown} setDropDown={setDropDown} />}
          {currentView == "formulations" && <FormulationForm visible={dropDown} setDropDown={setDropDown} />}
          {currentView == "generics" && <GenericForm visible={dropDown} setDropDown={setDropDown} />}
          {currentView == "groups" && <GroupForm visible={dropDown} setDropDown={setDropDown} />}
          {currentView == "units" && <UnitForm visible={dropDown} setDropDown={setDropDown} />}
          {currentView == "manufacturers" && <MFRForm visible={dropDown} setDropDown={setDropDown} />}
        </div>
      </div>
      <SearchFilter />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
