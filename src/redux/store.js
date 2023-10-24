import { configureStore } from "@reduxjs/toolkit";

import purchSlice from "./slices/purchView";
import saleSlice from "./slices/saleView";
import staffSlice from "./slices/StaffView";
import drugsViewSlice from "./slices/DrugsView";

export default configureStore({
  reducer: {
    drugsView: drugsViewSlice,
    purchView: purchSlice,
    salesView: saleSlice,
    staffView: staffSlice,
  },
});
