import telegramIcon from "../../assets/images/icons/telegramInner.svg";
import inContactIcon from "../../assets/images/icons/vkInner.svg";
import linkedInIcon from "../../assets/images/icons/linkedInInner.svg";
import React from "react";
import "./Contact.css";

const Contacts = React.forwardRef(({ activeLanguage }) => {
    return (
        <div className="contact_section text-center my_section">
            <h2>{activeLanguage.contacts.label}</h2>
            <ul className="social-icons-1">
                <li><a href="https://t.me/shaiterePE"><img className='w-7' src={telegramIcon} alt='telegram' /></a></li>
                <li><a href="https://vk.com/id574224844"><img className='w-7' src={inContactIcon} alt='inContact' /></a></li>
                <li><a href="https://www.linkedin.com/in/maxim-grischenko-598370289/"><img className='w-7' src={linkedInIcon} alt='linkedIn' /></a></li>
            </ul>
            <p className="mt-14">© copyright by Grishchenko Maxim</p>
        </div>
    );
});
export default Contacts;