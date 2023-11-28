import Logo from "./image/logo.png"

const MenusLogo:React.FC=():React.ReactElement=>{
    return(
        <div className="header__logo-box">
            <img src={Logo} alt="Logo" className="header__logo"></img>
        </div>
    );
};

export default MenusLogo;