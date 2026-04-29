import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout, AdminLayout } from "./layouts";
import { LandingPage } from "./pages/public";
import { LoginPage } from "./pages/public/Login";
import { RegisterPage } from "./pages/public/Register";
import { ForgotPasswordPage } from "./pages/public/ForgotPassword";
import { DashboardPublic } from "./pages/public/Dashboard";
import { ProjectPublic } from "./pages/public/Projects";
import { Feedback } from "./pages/public/Feedback";
import { DashboardAdmin, ProjectAdmin } from "./pages/admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

        <Route element={<PublicLayout />}>
          <Route path="/dashboard" element={<DashboardPublic />} />
          <Route path="/projects" element={<ProjectPublic />} />
          <Route path="/feedback" element={<Feedback />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/projects" element={<ProjectAdmin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}