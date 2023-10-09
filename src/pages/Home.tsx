import React, { useState } from "react";
import { tableView, tableHeaders,drugs } from "../static-data/table";
import Button from "../common-ui/Button";
import Input from "../common-ui/Input";

const Home = () => {
  const [searchContent, setSearchContent] = useState("");
  const [currentView, setCurrentView] = useState("drugs");

  const activeStyle = (button: string) =>
    button == currentView ? "bg-green-300" : "";

  return (
    <div className="w-full min-h-screen flex flex-col gap-1.5 md:px-3.0 px-1.5">
      <div className="flex justify-between md:flex-row flex-col gap-3">
        <div className="flex gap-2 flex-wrap">
          {tableView.map((view, ind) => {
            return (
              <Button
                txt={view}
                onClick={() => setCurrentView(view)}
                style={`btn_test_data capitalize ${activeStyle(view)} `}
                key={ind}
              />
            );
          })}
        </div>
        <div className="flex gap-2">
          <Input
            type={"text"}
            value={searchContent}
            style="border"
            onChange={(e) => setSearchContent(e.target.value)}
          />
        </div>
      </div>

      <div>
        <table className="w-full overflow-x-auto">
          <thead>
            <tr className="tr_thead rounded-md border-b border-green-700">
              <th className="th text-center">
                <Input
                  type="checkbox"
                  style="float-left"
                  // checked={view_params.checked}
                  // onChange={(e) =>
                  //   set_view_params({
                  //     ...view_params,
                  //     checked: e.target.checked,
                  //   })
                  // }
                />
              </th>

              {tableHeaders[currentView].map((item, ind) => {
                return (
                  <th key={ind} className="th">
                    {item}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {/* {data.map((item) => {
              return (
                <tr key={item.order_id} className="tr_tbody">
                  <td className="td">
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={(e) =>
                        check_single({ order_id: item.order_id })
                      }
                    />
                  </td> */}
            {/* below padding may apply to all */}
            {/* <td className="py-1.125">{item.order_id}</td>

                  <td>
                    <Link to={"/admin/orders/order-detail/" + item.order_id}>
                      {item.product_name}
                    </Link>{" "}
                  </td>
                  <td>{item.date}</td>
                  <td>{item.customer}</td>
                  <TD2 txt={item.status} />
                  <td>{item.items}</td>
                  <td>{item.total}</td>
                </tr>
              );
            })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
