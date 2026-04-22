import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PublicLayout, AdminLayout } from "./layouts";

import { LandingPage } from "./pages/public";
import { DashboardAdmin } from "./pages/admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <PublicLayout /> }>
          <Route path="/" element={ <LandingPage /> }></Route>
        </Route>
        <Route element={ <AdminLayout /> }>
          <Route path="/admin/dashboard" element={ <DashboardAdmin /> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}