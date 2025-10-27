import React, { useState, useRef, useEffect, ReactElement } from "react";
import { createPortal } from "react-dom";

interface SidebarDropdownProps {
  button: ReactElement;
  children: React.ReactNode;
  className?: string;
}

function Dropdown({ button, children, className }: SidebarDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number }>({
    top: 0,
    left: 0,
  });
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      setCoords({
        top: rect.top,
        left: rect.right + 4, // немного отступаем вправо
      });
    }
  }, [isOpen]);

  // Закрытие при клике вне выпадашки
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (!btnRef.current?.contains(e.target as Node)) setIsOpen(false);
    };
    if (isOpen) document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isOpen]);

  const menuContent = (
    <div
      className={`fixed bg-gray-700 rounded-lg py-1 shadow-lg z-[9999] ${className}`}
      style={{
        top: coords.top,
        left: coords.left,
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      <div ref={btnRef} onMouseEnter={() => setIsOpen(true)}>
        {button}
      </div>
      {isOpen && createPortal(menuContent, document.body)}
    </>
  );
}

export default Dropdown;
