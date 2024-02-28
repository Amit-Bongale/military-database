import { Routes , Route } from "react-router-dom";

import SoldierDetails from "../Details/SoldierDetails/SoldierDetails";
import DepartmentDetails from '../Details/DepartmentDetails/DepartmentDetails';
import PostingDetails from '../Details/PostingDetails/PostingDetails';
import OperationDetails from "../Details/OperationDetails/OperationDetails";
import MedalDetails from '../Details/MedalDetails/MedalDetails'

import InsertSoldier from "../Insert/InsertSoldier/InsertSoldier";
import InsertDept from '../Insert/InsertDept/InsertDept'
import InsertPosting from '../Insert/InsertPosting/InsertPosting';
import InsertOperaton from '../Insert/InsertOperation/InsertOperation';
import InsertMedals from '../Insert/InsertMedals/InsertMedals';

import UpdateDepartment from '../Update/UpdateDept/UpdateDepartment';
import UpdateMedals from '../Update/UpdateMedals/UpdateMedals';
import UpdateOperatin from '../Update/UpdateOperation/UpdateOperation';
import UpdatePosting from '../Update/UpdatePosting/UpdatePosting';
import UpdateSoldier from "../Update/UpdateSoldier/UpdateSoldier";

import DeleteDepartment from '../Delete/DeleteDept/DeleteDepartment';
import DeleteMedals from '../Delete/DeleteMedals/DeleteMedals';
import DeleteOperation from '../Delete/DeleteOperation/DeleteOperation';
import Deleteposting from '../Delete/DeletePosting/DeletePosting';
import DeleteSoldier from '../Delete/DeleteSoldier/DeleteSoldier';


function CustomRouter() {
  return (

    <Routes>

      <Route path="/deptartmentdetails" element={<DepartmentDetails></DepartmentDetails>}></Route>
      <Route path="/medaldetails" element={<MedalDetails></MedalDetails>}></Route>
      <Route path="/operationdetails" element={<OperationDetails></OperationDetails>}></Route>
      <Route path="/postingdetails" element={<PostingDetails></PostingDetails>}></Route>
      <Route path="/soldierdetails" element={<SoldierDetails></SoldierDetails>}></Route>
      

      <Route path='/insertdepartment' element={<InsertDept></InsertDept>}></Route>
      <Route path='/insertmedal' element={<InsertMedals></InsertMedals>}></Route>
      <Route path='/insertoperation' element={<InsertOperaton></InsertOperaton>}></Route>
      <Route path='/insertposting' element={<InsertPosting></InsertPosting>}></Route>
      <Route path='/insertsoldier' element={<InsertSoldier></InsertSoldier>}></Route>


      <Route path='/updateDepartment' element={<UpdateDepartment></UpdateDepartment>}></Route>
      <Route path='/updatemedal' element={<UpdateMedals></UpdateMedals>}></Route>
      <Route path='/updatesoperation' element={<UpdateOperatin></UpdateOperatin>}></Route>
      <Route path='/updateposting' element={<UpdatePosting></UpdatePosting>}></Route>
      <Route path='/updatesoldier' element={<UpdateSoldier></UpdateSoldier>}></Route>

      <Route path='/deletedepartment' element={<DeleteDepartment></DeleteDepartment>}></Route>
      <Route path='/deletemedal' element={<DeleteMedals></DeleteMedals>}></Route>
      <Route path='/deleteoperation' element={<DeleteOperation></DeleteOperation>}></Route>
      <Route path='/deleteposting' element={<Deleteposting></Deleteposting>}></Route>
      <Route path='/deletesoldier' element={<DeleteSoldier></DeleteSoldier>}></Route>

    </Routes>

  )
}

export default CustomRouter;