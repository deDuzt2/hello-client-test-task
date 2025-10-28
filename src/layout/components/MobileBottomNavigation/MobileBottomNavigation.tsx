import React, { useState } from "react";
import { ChildrenItem, menu } from "../../../constants/menu";
import { useActivePage } from "../../../hooks/useActivePage";
import { Button, ButtonLink } from "../../../component/Button/Button";
import ModalMenu from "../../../component/ModalMenu";

function MobileBottomNavigation() {
  const activePage = useActivePage();
  const [modalData, setModalData] = useState<{
    title: string;
    children: ChildrenItem[];
  } | null>(null);

  return (
    <>
      {/* Нижняя навигация */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-500 border-t shadow-md flex overflow-x-auto scrollbar-none py-2 z-40">
        {menu.map(({ label, link, children, icon: Icon }, index) => {
          if (children && children.length) {
            return (
              <Button
                key={index}
                className={`flex flex-col justify-between items-center text-sm h-[60px] ${activePage.startsWith(link) ? "text-red-500" : "text-white"}`}
                onClick={() => setModalData({ title: label, children })}
              >
                <Icon width={16} height={16} />
                <span>{label}</span>
              </Button>
            );
          }

          return (
            <ButtonLink
              key={index}
              to={link}
              className={`flex flex-col justify-between items-center text-sm h-[60px] ${activePage.startsWith(link) ? "text-red-500" : "text-white"}`}
            >
              <Icon width={16} height={16} />
              <span>{label}</span>
            </ButtonLink>
          );
        })}
      </div>

      {/*Модалка с дочерними элементами*/}
      {!!modalData && (
        <ModalMenu title={modalData.title} onClose={() => setModalData(null)}>
          <div className="flex flex-col space-y-2">
            {modalData.children.map(({ label, link }, index) => (
              <ButtonLink
                key={index}
                to={link}
                className={`${activePage.startsWith(link) ? "text-red-500" : "text-white"}`}
                onClick={() => setModalData(null)}
              >
                {label}
              </ButtonLink>
            ))}
          </div>
        </ModalMenu>
      )}
    </>
  );
}

export default MobileBottomNavigation;
