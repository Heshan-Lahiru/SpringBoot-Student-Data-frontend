
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import   'bootstrap/dist/css/bootstrap.min.css'
import StudentTable from './component/studentdetails/StudentDetails'
import UpdateStudentPage from './component/updateprofile/UpdateProfile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/studenttable" element={<StudentTable />} />
        <Route path="/updateprofile/:id" element={<UpdateStudentPage />} />
      </Routes>
    </BrowserRouter>
  );
}

