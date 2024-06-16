const Footer = () => {
  const links = ["About", "Projects", "Contact"];
  return (
    <footer className="flex justify-between pb-4 max-[800px]:flex-col max-[800px]:gap-4 items-center mb-4 ">
      <ul className="flex gap-4">
        {links.map((item, key) => (
          <li className="text-subtitle text-sm" key={key}>
            <a className="hover:text-specialBlue font-medium" href={`#${item}`}>
              {item}
            </a>
          </li>
        ))}{" "}
      </ul>
      <p className=" text-[rgb(113,113,122)] text-sm">
        © 2024 Ealam Taher. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
