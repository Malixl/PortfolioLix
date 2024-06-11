import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavigationBar() {
  const Menus = [
    { name: "Home", icon: "home-outline", dis: "translate-x-0", path: "/" },
    {
      name: "About",
      icon: "person-outline",
      dis: "translate-x-16",
      path: "/about",
    },
    {
      name: "Projects",
      icon: "rocket-outline",
      dis: "translate-x-32",
      path: "/projects",
    },
    {
      name: "Contact",
      icon: "call-outline",
      dis: "translate-x-48",
      path: "/contact",
    },
  ];

  const location = useLocation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const currentPath = location.pathname;
    const activeIndex = Menus.findIndex((menu) => menu.path === currentPath);
    setActive(activeIndex !== -1 ? activeIndex : 0);
  }, [location.pathname]);

  return (
    <div className="fixed lg:bottom-10 bottom-6 w-full z-50 flex justify-center">
      <div className="bg-gray-500 max-h-[4.4rem] px-6 rounded-xl">
        <ul className="flex relative">
          <span
            className={`bg-gray-500 duration-500 ${Menus[active].dis} border-4 border-gray-800 h-16 w-16 absolute -top-5 rounded-full`}
          ></span>
          {Menus.map((menu, i) => (
            <li key={i} className="w-16 font-bold text-sm lg:text-sm">
              <Link
                to={menu.path}
                className="flex flex-col text-center pt-6"
                onClick={() => setActive(i)}
              >
                <span
                  className={`text-xl cursor-pointer duration-500 ${
                    i === active && "-mt-6 text-white"
                  }`}
                >
                  <ion-icon name={menu.icon}></ion-icon>
                </span>
                <span
                  className={`${
                    active === i
                      ? "translate-y-4 duration-700 opacity-100 text-white"
                      : "opacity-0 translate-y-10 "
                  } `}
                >
                  {menu.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
