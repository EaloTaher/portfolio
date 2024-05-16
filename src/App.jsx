import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";

function App() {
  const hrStyle =
    "my-10 border border-borderPrimary w-[calc(100%+10rem)] -ml-[5rem]";
  return (
    <div className=" m-auto w-[80%] max-sm:w-[98%]  border-2 border-borderPrimary  bg-secondary text-white px-20 max-sm:px-5 max-lg:w-[90%]">
      <Header />
      <Hero />
      <hr className={`${hrStyle}`} />
      <Main />
      <hr className={`${hrStyle}`} />
      <Contact />
      <hr className={`${hrStyle}`} />
      <Footer />
    </div>
  );
}

export default App;
