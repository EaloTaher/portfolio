import { useEffect, useState } from "react";

const Header = () => {
  const [themeCounter, setthemeCounter] = useState(true);
  const selectedTheme = localStorage.getItem("theme");
  useEffect(() => {
    // If the user has selected a theme, use that
    if (selectedTheme) {
      if (selectedTheme == "dark") {
        document.body.classList.remove("light");
        document.body.classList.add(selectedTheme);
      } else if (selectedTheme == "light") {
        document.body.classList.remove("dark");
        document.body.classList.add(selectedTheme);
      }

      //Else If the users OS preferences prefers dark mode
    } else if (window.matchMedia("(prefers-color-scheme: dark)")) {
      document.body.classList.add("dark");

      //Else use light mode
    } else {
      document.body.classList.add("light");
    }
  }, [themeCounter]);
  function handleTheme() {
    const themeSelected = localStorage.getItem("theme");
    if (!themeSelected) {
      localStorage.setItem("theme", "dark");
    } else if (themeSelected == "dark") {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
    setthemeCounter(!themeCounter);
  }
  const navLinks = ["About", "Articles", "Projects", "Speaking", "Contact"];
  const [showModal, setShowModal] = useState(false);
  return (
    <header className="flex flex-row items-center justify-between px-10 mt-5  ">
      {/* In Case of the screens that are less than 768px the hamburger menu will be unhidden and the nav will be hidden */}
      <button
        className=" text-2xl size-10 hidden max-md:block icon-menu bg-header rounded-full hover:text-title  text-subtitle hover:border border-[rgba(244,165,96,0.249)] duration-200 active:scale-90  "
        onClick={() => {
          setShowModal(true);
        }}
      />

      <div />
      <nav className=" py-3 px-6 bg-header rounded-[55px] shadow-[1px_1px_40px_#2323242a]  max-md:hidden">
        <ul className="flex flex-row gap-4">
          {navLinks.map((item, key) => (
            <li key={key}>
              <a
                href=""
                className=" text-title opacity-90 text-sm font-medium hover:opacity-100 hover:text-[0.92rem] hover:text-specialBlue duration-200 "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => {
          handleTheme();
        }}
        className=" size-10  bg-header shadow-lg rounded-full hover:border text-subtitle hover:text-title border-[rgba(244,165,96,0.249)] duration-200 active:scale-90"
      >
        <span
          className={`${
            selectedTheme
              ? selectedTheme == "dark"
                ? "icon-moon"
                : "icon-sun text-yellow-500 "
              : "icon-moon"
          }  text-2xl  `}
        />
      </button>
      {showModal && (
        <div className="fixed inset-0  bg-[rgb(40,40,48)] opacity-95 z-10">
          <div className="w-[85%] m-auto mt-8 rounded-2xl px-6 pt-4 pb-0 bg-secondary  animate-popup">
            <ul>
              <li className="text-right -mb-4">
                <button
                  className="icon-close  text-2xl text-subtitle hover:text-3xl hover:text-red-600 duration-200 hover:rotate-180  "
                  onClick={() => {
                    setShowModal(false);
                  }}
                />
              </li>
              {navLinks.map((item, key) => (
                <li
                  key={key}
                  className="border-b border-solid border-borderPrimary pb-3 pt-2 last:border-none hover:opacity-100 hover:text-[0.92rem] hover:text-specialBlue hover:cursor-pointer"
                >
                  <a className="text-base">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
