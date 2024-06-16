import Lottie from "lottie-react";
import developer from "../../../public/animation/developer.json";
import { motion } from "framer-motion";
const Hero = () => {
  const soicalIcons = ["icon-instagram", "icon-github", "icon-linkedin"];

  return (
    <section className="flex mt-12 min-h-[350px]" id="About">
      <div className=" flex-grow">
        <div className="flex items-end gap-3 min-h-24">
          <motion.img
            src="./ealam_photo.png"
            className="w-[88px] border border-orange-400 rounded-full p-[1px] shadow-[1px_1px_40px_rgba(203,200,200,0.58)_inset]"
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 5, type: "spring", stiffness: 100 }}
          />
          <div className="icon-verified text-specialCyan text-lg mb-[0.1rem]" />
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className=" text-h1Title text-title my-6  font-semibold "
        >
          Front-End Programmer, Instrumentation Technician and Calisthenics
          Athlete.
        </motion.h1>
        <p className="text-subtitle text-sm mb-8 ">
          I&apos;m Ealam Taher, A Front-End programmer based in Kirkuk-Iraq. I
          create Reliable and scalable front end websites.
        </p>
        <div className="flex text-xl gap-6 text-subtitle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0 0 50 50"
            className={`${true && "invert"}  hover:w-8 hover:h-8 duration-500 `}
            id="xLogo"
          >
            <path d="M 11 4 C 7.1456661 4 4 7.1456661 4 11 L 4 39 C 4 42.854334 7.1456661 46 11 46 L 39 46 C 42.854334 46 46 42.854334 46 39 L 46 11 C 46 7.1456661 42.854334 4 39 4 L 11 4 z M 11 6 L 39 6 C 41.773666 6 44 8.2263339 44 11 L 44 39 C 44 41.773666 41.773666 44 39 44 L 11 44 C 8.2263339 44 6 41.773666 6 39 L 6 11 C 6 8.2263339 8.2263339 6 11 6 z M 13.085938 13 L 22.308594 26.103516 L 13 37 L 15.5 37 L 23.4375 27.707031 L 29.976562 37 L 37.914062 37 L 27.789062 22.613281 L 36 13 L 33.5 13 L 26.660156 21.009766 L 21.023438 13 L 13.085938 13 z M 16.914062 15 L 19.978516 15 L 34.085938 35 L 31.021484 35 L 16.914062 15 z"></path>
          </svg>
          {soicalIcons.map((ico, key) => (
            <div
              key={key}
              className={`${ico} hover:text-3xl duration-500 hover:text-iconHover hover:cursor-pointer `}
            />
          ))}
        </div>
      </div>
      <div className=" max-[1250px]:hidden">
        <Lottie animationData={developer} className=" w-full " />
      </div>
    </section>
  );
};

export default Hero;
