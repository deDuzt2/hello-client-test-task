import React from "react";
import { createPortal } from "react-dom";

interface ModalMenuProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}

function ModalMenu({ title, onClose, children }: ModalMenuProps) {
  if (typeof document === "undefined") return null;

  // Вешаем закрытие модалки при клике на крестик или вне модалки
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex flex-col bg-black/40 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-gray-500 rounded-t-2xl mt-auto p-4 max-h-[70vh] overflow-y-auto shadow-lg animate-slideUp"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-2">
          <h2 className="font-semibold text-white text-lg">{title}</h2>
          <button onClick={onClose} className="text-white hover:text-gray-700">
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
}

export default ModalMenu;
