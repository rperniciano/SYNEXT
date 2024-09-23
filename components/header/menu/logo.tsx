import Logo from "./image/logo.png";
import Image from "next/image";

const MenusLogo: React.FC = (): React.ReactElement => {
  return (
    <div className="header__logo-box">
      <Image src="https://ionevision.com/svg/onevision-white-long.svg" width={50} height={50} alt="Logo" className="header__logo" />
    </div>
  );
};

export default MenusLogo;
