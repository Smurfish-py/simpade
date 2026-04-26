import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PublicLayout, AdminLayout } from "./layouts";

import { LandingPage } from "./pages/public";
import { DashboardAdmin, ProjectPage } from "./pages/admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={ <PublicLayout /> }>
          <Route path="/" element={ <LandingPage /> }></Route>
        </Route>
        <Route element={ <AdminLayout /> }>
          <Route path="/admin/dashboard" element={ <DashboardAdmin /> }></Route>
          <Route path="/admin/projects" element={ <ProjectPage /> }></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}