import { useSelector, useDispatch } from "react-redux";
import Button from "../common-ui/Button";
import PageTitle from "../common-ui/PageTitle";
import ViewFilterDrugs from "../components/tabularViews/ViewFilterDrugs";
import SearchFilter from "../components/SearchFilter";
import { AiOutlinePlus } from "react-icons/ai"; 
 
//
import { Outlet } from "react-router-dom"; 

export default function Drugs() {
  //

  const currentView = useSelector((state) => state.currentView);

  return (
    <div className="w-full  flex flex-col gap-1.5 md:px-0.38 pt-1.5">
      <PageTitle title={currentView} />
      <div className="flex justify-between md:flex-row flex-col gap-3">
        <ViewFilterDrugs />

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
