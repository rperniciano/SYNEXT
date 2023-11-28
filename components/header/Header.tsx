import HeaderText from "./header-text/header-text";
import IntroVideo from "./hero/IntroVideo";

const Header = () => {
  return (
    <>
      <header id="header" className="header">
        <HeaderText></HeaderText>
        <IntroVideo></IntroVideo>
      </header>
    </>
  );
};

export default Header;
