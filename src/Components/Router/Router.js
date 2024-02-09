import { Routes , Route } from "react-router-dom";

import Insert from "../Insert/Insert";
import Update from "../Update/Update";

function CustomRouter() {
  return (

    <Routes>

      <Route path='/insert' element={<Insert></Insert>}></Route>
      <Route path='/update' element={<Update></Update>}></Route>
      
    </Routes>

  )
}

export default CustomRouter;