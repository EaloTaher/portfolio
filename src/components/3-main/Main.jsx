import { useState } from "react";

const Main = () => {
  const leftButtons = ["React & Tailwind", "Node & Express"];
  const [active, setActive] = useState("all");

  return (
    <main className="flex gap-12 items-start max-[700px]:flex-col max-[700px]:items-center ">
      <section className=" flex flex-col gap-3 max-[700px]:flex-row max-[700px]:flex-wrap max-[700px]:justify-center">
        <button
          className={`${
            active === "all" &&
            "border border-specialBlue opacity-100 font-semibold tracking-[0.6px] py-3 rounded "
          } w-44 px-3 py-2 bg-[rgba(36,37,46,1)] text-lg capitalize opacity-50 border  hover:opacity-100 duration-300 
              max-[700px]:px-1 max-[700px]:text-base max-[700px]:w-36`}
          onClick={() => {
            setActive("all");
          }}
        >
          all projects
        </button>

        {leftButtons.map((btn, key) => (
          <button
            key={key}
            className={`${
              active === `${key}` &&
              "border border-specialBlue opacity-100 font-semibold tracking-[0.6px] py-3 rounded "
            } w-44 px-3 py-2 bg-[rgba(36,37,46,1)] text-lg capitalize opacity-50 border  hover:opacity-100 duration-300 
              max-[700px]:px-1 max-[700px]:text-base max-[700px]:w-36`}
            onClick={() => {
              setActive(`${key}`);
            }}
          >
            {btn}
          </button>
        ))}
      </section>
      <section className=" border border-red-600 flex flex-wrap gap-x-4 gap-y-8 justify-center">
        {["aa", "bb", "cc", "dd"].map((item, key) => (
          <article
            key={key}
            className="border-[rgba(93,188,252,0.3)] border-[3px] rounded hover:border-specialBlue duration-300 hover:rotate-1 hover:scale-[1.02] hover:cursor-pointer bg-gradient-to-t from-[rgba(255,255,255,0.05)] to bg-[rgba(255,255,255,0.05)]"
          >
            <img src="./landing1.png" className=" w-72 rounded" />
            <div className="w-72  py-3 px-2">
              <h1 className="text-title font-bold ">Landing Page 1</h1>
              <p className="text-subtitle text-sm mt-2 mb-5">
                f type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </p>
              <div className="flex justify-between">
                <div className="flex gap-3 text-xl text-subtitle">
                  <div className="icon-link hover:text-[1.5rem]  hover:text-iconHover" />
                  <div className="icon-github hover:text-[1.5rem]  hover:text-iconHover" />
                </div>
                <a
                  href=""
                  className="text-specialBlue flex items-center gap-1 mr-1"
                >
                  more <span className="icon-arrow-right " />
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Main;
