import avatar from '../../assets/images/avatar.png';
import telegramIcon from '../../assets/images/icons/fa_telegram.png';
import inContactIcon from '../../assets/images/icons/incontact.png';
import linkedInIcon from '../../assets/images/icons/linkedin.png';
import gitHubIcon from '../../assets/images/icons/gitHub.png';

function Myinfo({activeLanguage}) {
    return (
        <section className="myinfo w-60 text-center mx-auto my_section">
            <h2 className='text-lg md:text-xl'>{activeLanguage.myInfo.name}</h2>
            <p className='text-sm md:text-base mt-2'>{activeLanguage.myInfo.profesion}</p>
            <img className='mt-7 avatar_image' src={avatar} alt="avatar" />
            <div className='myinfo_flexbox flex justify-between w-40 mx-auto mt-5'>
                <a title='telegram' href='https://t.me/shaiterePE'><img className='w-7' src={telegramIcon} alt='telegram' /></a>
                <a title='inContact' href='https://vk.com/id574224844'><img className='w-7' src={inContactIcon} alt='inContact' /></a>
                <a title='linkedIn' href="https://www.linkedin.com/in/maxim-grischenko-598370289/"><img className='w-7' src={linkedInIcon} alt='linkedIn' /></a>
                <a title='gitHub' href='https://github.com/lacrotas'><img className='w-7' src={gitHubIcon} alt='gitHubIcon' /></a>
            </div>
        </section>
    );
}

export default Myinfo; 