
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pharmacist from './admin/Pharmacist';
import NavAdmin from './components/navs/NavAdmin';
import NavPharmacists from './components/navs/NavPharmacists';
import Patients from './pharmacist/Patients';
import Medicine from './admin/Medicine';
import Account from './admin/Account';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route index element={<MainPage />} />
        <Route path="/admin" element={<NavAdmin />}>
          <Route index element={<Pharmacist />} />
          <Route path="medicine" element={<Medicine />} />
          <Route path="account" element={<Account />} />
        </Route>
        <Route path="/pharmacist" element={<NavPharmacists />}>
          <Route index element={<Patients />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
