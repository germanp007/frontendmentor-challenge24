import logo from "../../../public/images/logo.svg";

const LogoComponent = () => (
  <img
    src={logo}
    alt="Logo"
    className="h-[30px] w-[100px] sm:w-[150px] sm:h-[44px]"
  />
);
export default LogoComponent;
