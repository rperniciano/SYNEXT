import HeaderText from "./header-text/header-text";
import IntroVideo from "./hero/IntroVideo";
import MenusLogo from "./menu/logo";

const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <MenusLogo></MenusLogo>
        <HeaderText></HeaderText>
        <IntroVideo></IntroVideo>
      </header>
    </>
  );
};

export default Header;
