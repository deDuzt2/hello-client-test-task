import { useState, ReactNode } from "react";

type SidebarProps = {
  children: (props: {
    isOpen: boolean;
    handleChange: () => void;
    close: () => void;
    open: () => void;
  }) => ReactNode;
  defaultState?: boolean;
};

function Sidebar({ children, defaultState = false }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(defaultState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const handleChange = () => setIsOpen((prev) => !prev);

  return <>{children({ isOpen, open, close, handleChange })}</>;
}
export default Sidebar;
