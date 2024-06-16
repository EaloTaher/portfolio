import { useState } from "react";
import { projects } from "./myProject";
import { AnimatePresence, motion } from "framer-motion";
const Main = () => {
  const leftButtons = [
    { title: "HTML & CSS", category: "css" },
    { title: "JavaScript", category: "js" },
    { title: "React & MUI", category: "react" },
    { title: "Node & Express", category: "node" },
  ];
  const [active, setActive] = useState("all");

  const [filteredProjects, setfilteredProjects] = useState(projects);

  function handleClick(category) {
    setfilteredProjects(
      projects.filter((item) => {
        return item.category.includes(category) === true;
      })
    );
  }

  return (
    <main
      className="flex gap-12 items-start max-[700px]:flex-col max-[700px]:items-center pt-10"
      id="Projects"
    >
      <section className=" flex flex-col gap-3 max-[700px]:flex-row max-[700px]:flex-wrap max-[700px]:justify-center">
        <button
          className={`${
            active === "all" &&
            "border border-specialBlue opacity-100 font-semibold tracking-[0.6px] py-3 rounded "
          } w-44 px-3 py-2 text-buttonText  bg-buttonBg text-lg capitalize opacity-50 border  hover:opacity-100 duration-300 
              max-[700px]:px-1 max-[700px]:text-base max-[700px]:w-36`}
          onClick={() => {
            setActive("all");
            setfilteredProjects(projects);
          }}
        >
          All Projects
        </button>

        {leftButtons.map((btn, key) => (
          <button
            key={key}
            className={`${
              active === `${key}` &&
              "border border-specialBlue   opacity-100 font-semibold tracking-[0.6px] py-3 rounded "
            } w-44 px-3 py-2 bg-buttonBg text-buttonText text-lg capitalize opacity-50 border  hover:opacity-100 duration-300 
              max-[700px]:px-1 max-[700px]:text-base max-[700px]:w-36`}
            onClick={() => {
              setActive(`${key}`);
              handleClick(btn.category);
            }}
          >
            {btn.title}
          </button>
        ))}
      </section>
      <section className=" flex flex-wrap gap-x-4 gap-y-8 justify-center grow">
        <AnimatePresence>
          {filteredProjects.map((item, key) => (
            <motion.article
              layout
              initial={{ transform: "scale(0)" }}
              animate={{ transform: "scale(1)" }}
              transition={{ type: "spring", damping: 8, stiffness: 50 }}
              key={key}
            >
              <div className="border-[3px]  border-cardBorderColor rounded hover:border-cardBorder hover:bg-projectCardBg  duration-300 hover:rotate-1 hover:scale-[1.02] hover:cursor-pointer bg-gradient-to-t from-[rgba(255,255,255,0.05)] to bg-[rgba(255,255,255,0.05)] shadow-lg">
                <img src={item.imgPath} className=" w-72 rounded" />
                <div className="w-72  py-3 px-2">
                  <h1 className="text-title font-bold capitalize">
                    {item.projectTitle}
                  </h1>
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
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
