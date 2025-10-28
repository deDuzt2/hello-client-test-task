import { useLocation } from "react-router-dom";

// Определяем активную страницу
export const useActivePage = () => {
  const location = useLocation();

  return location.pathname;
};
