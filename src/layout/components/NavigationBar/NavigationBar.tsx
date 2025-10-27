import React from "react";
import { menu } from "../../../constants/menu";
import Collapse from "../../../component/Collapse";
import { Button, ButtonLink } from "../../../component/Button/Button";
import Sidebar from "../../../component/Sidebar";
import AlignLeft from "../../../assets/svg/align-left.svg";
import Dropdown from "../../../component/Dropdown";
import { useLocation } from "react-router-dom";

function NavigationBar() {
  const location = useLocation();
  const findActiveElement = (url: string) => location.pathname.startsWith(url);
  return (
    <Sidebar defaultState={true}>
      {({ isOpen, handleChange }) => (
        <div
          className={`flex flex-col justify-between min-h-screen p-4 bg-gray-500 duration-300 ${isOpen ? "w-64" : "w-12"}`}
        >
          <div>
            {menu.map(({ label, icon: Icon, link, children }, index) => {
              if (children) {
                return isOpen ? (
                  <Collapse
                    key={index}
                    button={
                      <Button
                        key={index}
                        className="flex pl-[20px] h-[40px] relative whitespace-nowrap hover:opacity-70"
                        style={{
                          color: findActiveElement(link) ? "red" : "white",
                        }}
                      >
                        <Icon
                          width={16}
                          height={16}
                          className="absolute left-[0px] top-[10px]"
                        />
                        {isOpen ? label : ""}
                      </Button>
                    }
                    defaultState={findActiveElement(link)}
                  >
                    {children.map(({ label, link: childrenLink }, index) => (
                      <ButtonLink
                        key={index}
                        to={link + childrenLink}
                        className={`flex pl-[20px] h-[40px] relative whitespace-nowrap hover:opacity-70`}
                        style={{
                          color: findActiveElement(link + childrenLink)
                            ? "red"
                            : "white",
                        }}
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
                        className="flex pl-[20px] h-[40px] relative whitespace-nowrap hover:opacity-70"
                        style={{
                          color: findActiveElement(link) ? "red" : "white",
                        }}
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
                    {children.map(({ label, link: childrenLink }, index) => (
                      <ButtonLink
                        key={index}
                        to={link + childrenLink}
                        className={`flex pl-[20px] h-[40px] relative whitespace-nowrap hover:opacity-70`}
                        style={{
                          color: findActiveElement(link + childrenLink)
                            ? "red"
                            : "white",
                        }}
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
                  className={`flex pl-[20px] h-[40px] relative whitespace-nowrap hover:opacity-70`}
                  style={{ color: findActiveElement(link) ? "red" : "white" }}
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

          <Button
            onClick={handleChange}
            className="flex pl-[20px] h-[40px] relative whitespace-nowrap text-white hover:opacity-70"
          >
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

export default NavigationBar;
