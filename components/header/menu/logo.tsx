import Logo from "./image/logo.png"
import Image from "next/image";

const MenusLogo:React.FC=():React.ReactElement=>{
    return(
        <div className="header__logo-box">
            <Image src={Logo} alt="Logo" className="header__logo"></Image>
        </div>
    );
};

export default MenusLogo;