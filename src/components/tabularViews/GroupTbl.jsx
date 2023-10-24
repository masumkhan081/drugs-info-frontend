import React, { useEffect } from "react";
import { tblHeadergroups } from "../../static-data/table";
import { useDispatch, useSelector } from "react-redux";
import { checkSingle, checkAll, setCurrentView } from "../../redux/slices/DrugsView";
import { getHandler } from "../../util/handler";

export default function GroupTbl() {
  // 
  const dispatch = useDispatch();
  const groups = useSelector((state) => state.drugsView.groups);
  const allChecked = useSelector((state) => state.drugsView.allChecked);
  // 
  useEffect(() => {
     const fetch = async () => {
      const data = await getHandler("/groups"); 
      dispatch(setCurrentView({view:"groups",data:data.data.groups}));
    };
    fetch();
  },[]);
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
            {tblHeadergroups.map((itm, ind) => {
              return (
                <th key={ind} className="th">
                  {itm}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {groups.map((item,ind) => {
            return (
              <tr key={item.id} className="tr_tbody">
                <td className="td">
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={(e) => dispatch(checkSingle())}
                  />
                </td>
                <td className="py-1.125">{ind}</td>
                <td className="py-1.125">{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
