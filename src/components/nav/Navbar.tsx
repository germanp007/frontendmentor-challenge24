import LogoComponent from "../imagesComp/Logo";

const Navbar = () => {
  return (
    <nav className="flex w-full h-[100px] justify-between items-center px-6 mb-[90px] sm:h-[180px] md:p-12">
      <LogoComponent />
      <ul className="font-Header flex justify-between list-none  text-[16px] gap-3 tracking-wide font-light sm:gap-10">
        <li>
          <a href="#" className="no-underline text-DesaturatedBlue">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="no-underline text-DesaturatedBlue">
            Team
          </a>
        </li>
        <li>
          <a href="#" className="no-underline text-DesaturatedBlue">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
