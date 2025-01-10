import "./Header.scss";
import ArrowIcon from "../../assets/icons/arrow.svg";
import MenuIcon from "../../assets/icons/menu.svg";
import SearchIcon from "../../assets/icons/search.svg";
import DropdownArrow from "../DropdownArrow/DropdownArrow";

function Header() {
    return (
        <header className="header">
            <div className="header__top-nav">
                <div className="header__container">
                    <nav className="header__container--left">
                        <ul className="header__nav-list--top">
                            <li className="header__nav-item--top">
                                <a href="https://www.scotiabank.com/ca/en/personal.html" className="header__nav-link">Personal</a>
                            </li>
                            <li className="header__nav-item--top">
                                <a href="https://www.scotiabank.com/ca/en/small-business.html" className="header__nav-link">Small Business</a>
                            </li>
                            <li className="header__nav-item--top">
                                <a href="https://www.scotiabank.com/ca/en/commercial-banking.html" className="header__nav-link">Commercial</a>
                            </li>
                            <li className="header__nav-item--top">
                                <a href="https://www.gbm.scotiabank.com/en.html" className="header__nav-link">Global Markets</a>
                            </li>
                            <li className="header__nav-item--top">
                                <a href="https://globalwealth.scotiabank.com/en/home.html" className="header__nav-link">Global Wealth</a>
                            </li>
                            <li className="header__nav-item--top">
                                <a href="https://www.scotiabank.com/ca/en/about.html" className="header__nav-link">About Us</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="header__container--right">
                        <ul className="header__nav-list--top">
                            <li className="header__nav-item--top">
                                <a href="https://www.scotiabank.com/global/en/global-site.html?redirect=false" className="header__nav-link">More Sites</a>
                            </li>
                            <li className="header__nav-item--top">
                                <div className="header__toggle">
                                    <span className="header__option">English</span>
                                    <img src={ArrowIcon} alt="dropdown arrow icon" className="header__icon--small" />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="header__main">
                <div className="header__container--main">
                    <div className="header__container--logo">
                        <a href="https://www.scotiawealthmanagement.com/ca/en.html" className="header__link">               
                            <img class="header__logo--tablet" src="https://www.scotiawealthmanagement.com/content/dam/scotiafunds/image/logos/ScotiaWM_logo_E_twoline_R_HEX_Jun_2022.png" alt="Scotia Wealth Management" data-img-id="header" />
                        
                            <img class="header__logo--mobile" src="https://www.scotiawealthmanagement.com/content/dam/scotiabank/images/logos/2019/scotiabank-logo-red-mobile.svg" alt="Scotia Wealth Management" data-img-id="header" />
                        </a>
                    </div>

                    <nav className="header__nav">
                        <ul className="header__nav-list--main">
                            <li className="header__nav-item--main">
                                <p className="header__dropdown">Tailored <br></br>solutions</p>
                                <img src={ArrowIcon} alt="dropdown arrow icon" className="header__icon--dropdown" />
                            </li>
                            <li className="header__nav-item--main header__nav-item--active">
                                <span className="header__dropdown">All services</span>
                                <img src={ArrowIcon} alt="dropdown arrow icon" className="header__icon--dropdown" />
                            </li>
                            <li className="header__nav-item--main">
                                <span className="header__dropdown">About us</span>
                            </li>
                            <li className="header__nav-item--main">
                                <p className="header__dropdown">Enriched <br></br> thinking</p>
                                <img src={ArrowIcon} alt="dropdown arrow icon" className="header__icon--dropdown" />
                            </li>
                            <li className="header__nav-item--main">
                                <span className="header__dropdown">Connect with us</span>
                            </li>
                        </ul>
                        <img src={SearchIcon} alt="search icon" className="header__icon--search" />
                    </nav>
                    <div className="header__cta">
                        <span className="header__text">Sign in</span>
                        {/* <img src={ArrowIcon} alt="dropdown arrow icon" className="header__icon--large" /> */}
                        <DropdownArrow />
                    </div>

                    <button className="header__nav-toggle">
                        <img src={MenuIcon} alt="menu icon" className="header__icon--menu" />
                    </button>
                    

                </div>
            </div>

        </header>
    );
};

export default Header;