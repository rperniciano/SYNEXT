const NavigationBar:React.FC=():React.ReactElement=>{
    return(
        <nav className="navigation__nav">
            <ul className="navigation__list">
                <li className="navigation__item"><a href="#header" className="navigation__link">Products</a></li>
                <li className="navigation__item"><a href="#header" className="navigation__link">About Us</a></li>
                <li className="navigation__item"><a href="#header" className="navigation__link">LitePaper</a></li>
            </ul>
        </nav>
    );
};

export default NavigationBar;