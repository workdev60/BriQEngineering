import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FloatingButtons from "@/components/FloatingButtons";
import Index from "./pages/Index";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import AdminPage from "./pages/AdminPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "@/components/ScrollToTop";
import { usePageTracking } from "./hooks/usePageTracking";

const queryClient = new QueryClient();

const AppInner = () => {
  usePageTracking();
  const location = useLocation();
  const isAdmin = location.pathname === "/admin";

  return (
    <>
      <ScrollToTop />
      {!isAdmin && <SiteHeader />}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isAdmin && <SiteFooter />}
      {!isAdmin && <FloatingButtons />}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppInner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
