import React, { useEffect } from "react";
import { tblHeaderFormulations } from "../../static-data/table";
import { useDispatch, useSelector } from "react-redux";
import { checkSingle, checkAll, setCurrentView } from "../../redux/slices/DrugsView";
import { getHandler } from "../../util/handler";

export default function FormulationTbl() {
  const dispatch = useDispatch();
  const formulations = useSelector((state) => state.drugsView.formulations);
  const allChecked = useSelector((state) => state.drugsView.allChecked);


  useEffect(() => {
    const fetch = async () => {
      const data = await getHandler("/formulations"); 
      dispatch(setCurrentView({view:"formulations",data:data.data.formulations}));
    };
    fetch();
  },[]);

  return (
    <div className="">
      <table className="w-full overflow-x-auto border-2">
        <thead>
          <tr className="tr_thead">
            <th className="th">
              <input
                type="checkbox"
                checked={allChecked}
                onChange={(e) => dispatch(checkAll())}
              />
            </th>
            {tblHeaderFormulations.map((itm, ind) => {
              return (
                <th key={ind} className="th">
                  {itm}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {formulations.map((item,ind) => {
            return (
              <tr key={item.id} className="tr_tbody">
                <td className="td">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => dispatch(checkSingle())}
                  />
                </td>
                {/* below padding may apply to all */}
                <td className="py-1.125">{ind}</td>
                <td className="py-1.125">{item.fullName}</td>
                <td className="py-1.125">{item.shortName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
