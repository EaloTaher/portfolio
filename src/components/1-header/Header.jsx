const header = () => {
  const navLinks = ["About", "Articles", "Projects", "Speaking", "Contact"];
  return (
    <header className="flex flex-row items-center justify-between px-10  ">
      <nav className=" py-3 px-6 bg-header rounded-[55px]">
        <ul className="flex flex-row gap-4">
          {navLinks.map((item, key) => (
            <li key={key}>
              <a
                href=""
                className=" text-title opacity-90 text-sm font-medium hover:opacity-100 hover:text-[0.92rem] hover:text-specialBlue duration-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <button className=" text-xl">light</button>
    </header>
  );
};

export default header;
