import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageVisit } from "@/lib/supabase";

export function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    trackPageVisit(location.pathname);
  }, [location.pathname]);
}
