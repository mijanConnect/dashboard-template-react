import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/main/MainLayout";
import AuthLayout from "@/layout/auth/AuthLayout";
import Login from "@/components/auth/Login";
import ForgotPassword from "@/components/auth/ForgotPassword";
import Overview from "@/components/pages/overview/Overview";
import NotFound from "@/components/NotFound";
import AppointmentsManagement from "@/components/pages/appointmentsManagement/AppointmentsManagement";
import PatientManagement from "@/components/pages/patientManagement/PatientManagement";
import Transactions from "@/components/pages/transactions/Transactions";
import BusinessSettings from "@/components/pages/businessSetting/BusinessSettings";
import Schedule from "@/components/pages/schedule/Schedule";
import ContentManagement from "@/components/pages/contentManagement/ContentManagement";
import TermsConditions from "@/components/pages/termsConditions/TermsConditions";
import PrivacyPolicy from "@/components/pages/privacyPolicy/PrivacyPolicy";
import AboutUs from "@/components/pages/aboutUs/AboutUs";
import Settings from "@/components/pages/settings/Settings";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "appointments-management",
        element: <AppointmentsManagement />,
      },
      {
        path: "patient-management",
        element: <PatientManagement />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "business-setting",
        element: <BusinessSettings />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "content-management",
        element: <ContentManagement />,
      },
      {
        path: "terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
