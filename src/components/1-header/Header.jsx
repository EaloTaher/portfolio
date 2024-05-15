import { useState } from "react";

const Header = () => {
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
      <button className=" size-10  bg-header  rounded-full hover:border text-subtitle hover:text-title border-[rgba(244,165,96,0.249)] duration-200 active:scale-90">
        <span className="icon-moon  text-2xl     " />
      </button>
      {showModal && (
        <div className="fixed inset-0  bg-[rgb(40,40,48)] opacity-95">
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
