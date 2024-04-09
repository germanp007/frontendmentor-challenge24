import { FC } from "react";
import logo from "../../../public/images/logo.svg";

type Props = {
  image: string;
  name: string;
};

const LogoComponent: FC<Props> = ({ image, name }) => (
  <img src={logo} alt="Logo" className="h-[30px] w-[100px]" />
);
export default LogoComponent;
