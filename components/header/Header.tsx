import HeaderText from "./header-text/header-text";
import MenusLogo from "./menu/logo";
import Image from "next/image";
import Sfondo from "./menu/image/headerimg.jpg";
import ChiSiamoButton from "./button/button";

const Header = () => {
  return (
    <section>
      <header id="header" className="header">
          <Image src={Sfondo} alt="Sfondo" className="header__image" />
          <MenusLogo></MenusLogo>
          <HeaderText></HeaderText>
          <ChiSiamoButton></ChiSiamoButton>
      </header>
    </section>
  );
};

export default Header;
