import React, { useEffect } from "react";
import { tblHeaderDrugs } from "../../static-data/table";
import { useDispatch, useSelector } from "react-redux";
import {
  checkSingle,
  checkAll,
  setCurrentView,
} from "../../redux/slices/DrugsView";
import { getHandler } from "../../util/handler";

export default function DrugTbl() {
  //
  const dispatch = useDispatch();
  const stock = useSelector((state) => state.drugsView.stock);
  const allChecked = useSelector((state) => state.drugsView.allChecked);
  //
  useEffect(() => {
    const fetch = async () => {
      const data = await getHandler("/stock");
      dispatch(setCurrentView({ view: "stock", data: data.data.stock }));
    };
    fetch();
  }, []);
  //
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
            {tblHeaderDrugs.map((itm, ind) => {
              return (
                <th key={ind} className="th">
                  {itm}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {stock.map((item, ind) => {
            return (
              <tr key={ind} className="tr_tbody">
                <td className="td">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => dispatch(checkSingle())}
                  />
                </td>
                {/* below padding may apply to all */}
                <td className="py-1.125">{ind}</td>
                <td className="py-1.125">{item.brandId}</td>
                <td className="py-1.125">{"item.generic.name"}</td>
                <td className="py-1.125">{item.available}</td>
                <td className="py-1.125">
                  {item.strength + " " + "item.unit.name"}
                </td>
                <td className="py-1.125">{"item.formulation.name"}</td>
                <td className="py-1.125">{"item.manufacturer"}</td>
                {/* <TD2 txt={item.status} /> */}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
