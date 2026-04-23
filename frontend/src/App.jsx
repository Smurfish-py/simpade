import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout, AdminLayout } from "./layouts";
import { LandingPage } from "./pages/public";
import { DashboardAdmin } from "./pages/admin";
import { LoginPage } from "./pages/public/Login";
import { RegisterPage } from "./pages/public/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <PublicLayout /> }>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/login" element={<LoginPage />} /> {/* Diubah sesuai import */}
          <Route path="/register" element={<RegisterPage />} /> {/* Diubah sesuai import */}
        </Route>
        
        <Route element={ <AdminLayout /> }>
          <Route path="/admin/dashboard" element={ <DashboardAdmin /> } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}