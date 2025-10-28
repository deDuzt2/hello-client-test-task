import React from "react";
import { menu } from "../../../constants/menu";
import Collapse from "../../../component/Collapse";
import { Button, ButtonLink } from "../../../component/Button/Button";
import Sidebar from "../../../component/Sidebar";
import AlignLeft from "../../../assets/svg/align-left.svg";
import Dropdown from "../../../component/Dropdown";
import { useActivePage } from "../../../hooks/useActivePage";

function DesktopNavigationBar() {
  const activePage = useActivePage();
  return (
    <Sidebar defaultState={true}>
      {({ isOpen, handleChange }) => (
        <div
          className={`flex flex-col justify-between min-h-screen p-4 bg-gray-500 duration-300 ${isOpen ? "w-64" : "w-12"}`}
        >
          <div>
            {menu.map(({ label, icon: Icon, link, children }, index) => {
              if (children && children.length) {
                return isOpen ? (
                  <Collapse
                    key={index}
                    button={
                      <Button
                        key={index}
                        className={`flex pl-[20px] relative ${activePage.startsWith(link) ? "text-red-500" : "text-white"}`}
                      >
                        <Icon
                          width={16}
                          height={16}
                          className="absolute left-[0px] top-[10px]"
                        />
                        {isOpen ? label : ""}
                      </Button>
                    }
                    defaultState={activePage.startsWith(link)}
                  >
                    {children.map(({ label, link }, index) => (
                      <ButtonLink
                        key={index}
                        to={link}
                        className={`flex pl-[20px] relative ${activePage.startsWith(link) ? "text-red-500" : "text-white"}`}
                      >
                        {isOpen ? label : ""}
                      </ButtonLink>
                    ))}
                  </Collapse>
                ) : (
                  <Dropdown
                    button={
                      <Button
                        key={index}
                        className={`flex pl-[20px] relative ${activePage.startsWith(link) ? "text-red-500" : "text-white"}`}
                      >
                        <Icon
                          width={16}
                          height={16}
                          className="absolute left-[0px] top-[10px]"
                        />
                        {isOpen ? label : ""}
                      </Button>
                    }
                  >
                    {children.map(({ label, link }, index) => (
                      <ButtonLink
                        key={index}
                        to={link}
                        className={`flex pl-[20px] relative ${activePage.startsWith(link) ? "text-red-500" : "text-white"}`}
                      >
                        {label}
                      </ButtonLink>
                    ))}
                  </Dropdown>
                );
              }

              return (
                <ButtonLink
                  key={index}
                  to={link}
                  className={`flex pl-[20px] relative ${activePage.startsWith(link) ? "text-red-500" : "text-white"}`}
                >
                  <Icon
                    width={16}
                    height={16}
                    className="absolute left-[0px] top-[10px]"
                  />
                  {isOpen ? label : ""}
                </ButtonLink>
              );
            })}
          </div>

          <Button onClick={handleChange} className="flex pl-[20px] relative">
            <AlignLeft
              width={16}
              height={16}
              className="absolute left-[0px] top-[10px]"
            />
            {isOpen ? "Закрыть меню" : ""}
          </Button>
        </div>
      )}
    </Sidebar>
  );
}

export default DesktopNavigationBar;
