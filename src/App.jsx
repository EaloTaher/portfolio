import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1000) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    });
  }, []);

  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const hrStyle =
    "my-10 border border-borderPrimary w-[calc(100%+10rem)] -ml-[5rem]";
  return (
    <div
      id="up"
      className=" m-auto w-[80%] max-sm:w-[98%]  border-2 border-borderPrimary  bg-secondary text-white px-20 max-sm:px-5 max-lg:w-[90%]"
    >
      <Header />
      <Hero />
      <hr className={`${hrStyle}`} />
      <Main />
      <hr className={`${hrStyle}`} />
      <Contact />
      <hr className={`${hrStyle}`} />
      <Footer />
      {/* Scroll to top button */}

      <a
        className={`duration-700 ${
          showScrollBtn ? "opacity-100" : "opacity-0"
        }`}
        href="#up"
      >
        <button className=" icon-arrow-up fixed bg-[rgba(25,118,210,1)] w-10 h-10  rounded-full bottom-8  right-[3%] hover:bg-[rgba(25,118,210,0.8)] text-2xl" />
      </a>
    </div>
  );
}

export default App;
