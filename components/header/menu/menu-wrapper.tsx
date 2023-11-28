import MenusLogo from "./logo";
import NavigationBar from "./navigator";

const MenuWrapper:React.FC=():React.ReactElement=>{
    return(
        <div className="navigation">
            <MenusLogo></MenusLogo>
            <NavigationBar></NavigationBar>
        </div>
    )
};

export default MenuWrapper;