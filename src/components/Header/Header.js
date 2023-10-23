import PropTypes from 'prop-types';
import React, { useState } from 'react';
// import DarkImage from '../../assets/images/darkTheme.png';
// import LightImage from '../../assets/images/whiteTheme.png';
import "./Header.css";
import RU from '../../constants/RU';
import EN from '../../constants/EN';

const Header = ({ scrollToElement, setActiveLanguage, activeLanguage }) => {
    const [linkStyle, setLinkStyle] = useState(["header_li active", "header_li", "header_li"]);
    // const [isDarkTheme, setisDarktTeme] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    function setActiveLanguageHandle() {
        if (activeLanguage === RU) {
            setActiveLanguage(EN);
        } else {
            setActiveLanguage(RU);
        }
        setIsModalOpen(false);
    }
    function setClassName(index, refName) {
        scrollToElement(refName);
        setIsModalOpen(false);
        setLinkStyle([changeClassName(index, 0), changeClassName(index, 1), changeClassName(index, 2)]);
    }
    function changeClassName(index, number) {
        if (index === number) {
            return "header_li active";
        }
        return "header_li";
    }
    // function changeTheme(isDark) {
    //     if (isDark) {
    //         setisDarktTeme(true);
    //         document.documentElement.setAttribute('data-theme', "dark");
    //     } else {
    //         setisDarktTeme(false);
    //         document.documentElement.setAttribute('data-theme', "light");
    //     }
    //     setIsModalOpen(false);
    // }
    return (
        <div>
            <header className="header flex justify-around">
                <div></div>
                <ul className="flex space-x-10 justify-center items-center">
                    <li className={linkStyle[0]} onClick={() => setClassName(0, "about")} >{activeLanguage.header.about}</li>
                    <li className={linkStyle[1]} onClick={() => setClassName(1, "projects")} >{activeLanguage.header.project}</li>
                    <li className={linkStyle[2]} onClick={() => setClassName(2, "contacts")} >{activeLanguage.header.developing}</li>
                </ul>
                <div className='header_container'>
                    <button className='container_button' onClick={setActiveLanguageHandle}>{activeLanguage.header.label}</button>
                    {/* {isDarkTheme && <img className='container_image' src={DarkImage} alt='dark' onClick={() => changeTheme(false)} />}
                    {!isDarkTheme && <img className='container_image' src={LightImage} alt='dark' onClick={() => changeTheme(true)} />} */}
                </div>
            </header >
            <header className='header_small'>
                {!isModalOpen && <svg onClick={() => setIsModalOpen(true)} className="small_burger" width="42" height="28" viewBox="0 0 42 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 1.5H39.75M2.25 14H39.75M2.25 26.5H39.75" stroke="#2A465C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>}
                {isModalOpen && <svg onClick={() => setIsModalOpen(false)} className="small_cross" width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.72852" width="40.9493" height="2.44439" rx="1.22219" transform="rotate(45 1.72852 0)" fill="#D9D9D9" />
                    <rect y="28.9555" width="40.9493" height="2.44439" rx="1.22219" transform="rotate(-45 0 28.9555)" fill="#D9D9D9" />
                </svg>}
                {isModalOpen &&
                    <div className='modal flex items-center justify-start text-center'>
                        <ul>
                            <li className={linkStyle[0]} onClick={() => setClassName(0, "about")} >{activeLanguage.header.about}</li>
                            <li className={linkStyle[1]} onClick={() => setClassName(1, "projects")} >{activeLanguage.header.project}</li>
                            <li className={linkStyle[2]} onClick={() => setClassName(2, "contacts")} >{activeLanguage.header.developing}</li>
                        </ul>
                        <div className='header_container'>
                            <button className='container_button' onClick={setActiveLanguageHandle}>{activeLanguage.header.label}</button>
                            {/* {isDarkTheme && <img className='container_image' src={DarkImage} alt='dark' onClick={() => changeTheme(false)} />}
                            {!isDarkTheme && <img className='container_image' src={LightImage} alt='dark' onClick={() => changeTheme(true)} />} */}
                        </div>
                    </div>}
            </header>
        </div>
    );
}
export default Header;
Header.propTypes = {
    scrollToElement: PropTypes.func.isRequired,
    setActiveLanguage: PropTypes.func.isRequired,
};