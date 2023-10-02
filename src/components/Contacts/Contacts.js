import telegramIcon from "../../assets/images/icons/fa_telegram.png";
import inContactIcon from "../../assets/images/icons/incontact.png";
import linkedInIcon from "../../assets/images/icons/linkedin.png";
import gitHubIcon from "../../assets/images/icons/gitHub.png";
import React from "react";

const Contacts = React.forwardRef(({activeLanguage})=> {
    return (
        <div className="text-center my_section">
            <h2>{activeLanguage.contacts.label}</h2>
            <div className='myinfo_flexbox flex justify-center mx-auto mt-10'>
                <a title='telegram' href='https://t.me/shaiterePE'><img className='w-10' src={telegramIcon} alt='telegram' /></a>
                <a title='inContact' href='https://vk.com/id574224844'><img className='w-10 ml-4' src={inContactIcon} alt='inContact' /></a>
                <a title='linkedIn' href="https://www.linkedin.com/in/maxim-grischenko-598370289/"><img className='w-10 ml-4' src={linkedInIcon} alt='linkedIn' /></a>
                <a title='gitHub' href='https://github.com/lacrotas'><img className='w-10 ml-4' src={gitHubIcon} alt='gitHubIcon' /></a>
            </div>
        </div>
    );
});
export default Contacts;