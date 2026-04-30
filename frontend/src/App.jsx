import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicLayout, AdminLayout } from "./layouts";
import { LandingPage, ProjectPage, LoginPage, RegisterPage, ForgotPasswordPage, DashboardPage as DashboardPublic, FeedbackPage, ProfilePage } from "./pages/public";
import { AdminAspirations, DashboardAdmin, ProjectAdmin } from "./pages/admin";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/profile" element={ <ProfilePage /> } />

        <Route element={<PublicLayout />}>
          <Route path="/dashboard" element={<DashboardPublic />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Route>

        <Route element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<DashboardAdmin />} />
          <Route path="/admin/projects" element={<ProjectAdmin />} />
          <Route path="/admin/aspirations" element={<AdminAspirations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}