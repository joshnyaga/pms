
import MainPage from './MainPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pharmacist from './admin/Pharmacist';
import NavAdmin from './components/navs/NavAdmin';
import NavPharmacists from './components/navs/NavPharmacists';
import Patients from './pharmacist/Patients';
import Medicine from './admin/Medicine';
import Account from './admin/Account';
import AccountP from './pharmacist/AccountP';
import Hospital from './pharmacist/Hospital';
import Physician from './pharmacist/Physician';
import Prescription from './pharmacist/Prescription';
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
          <Route path="account" element={<AccountP />} />
          <Route path="hospitals" element={<Hospital />} />
          <Route path="physicians" element={<Physician />} />
          <Route path="prescription/*" element={<Prescription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
