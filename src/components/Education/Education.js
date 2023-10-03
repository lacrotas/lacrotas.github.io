import './Education.css';
import { useState, useEffect } from 'react';

function Education({activeLanguage}) {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section className="education my_section mx-auto text-center">
            <h2>{activeLanguage.education.label}</h2>
            {(scroll >= 180) &&
                <div>
                    <div className="education_container flex justify-center">
                        <div className="container_left">
                            <div className="item_container item_container-react col-span-3 p-6 text-left">
                                <h3 className="text-sm md:text-base">{activeLanguage.education.reactLabel}</h3>
                                <p className="text-sm md:text-base  lg:w-60 w-40">{activeLanguage.education.reactText}</p>
                            </div>
                            <div className="item_container item_container-univercity col-span-3 p-6 text-left">
                                <h3 className="text-sm md:text-base">{activeLanguage.education.universityLabel}</h3>
                                <p className="text-sm md:text-base  lg:w-60 w-40">{activeLanguage.education.universityText}</p>
                            </div>
                        </div>
                        <div className="container_middle max-sm:hidden">
                            <div className="middle-anim"></div>
                            <svg className="education_svg" viewBox="0 0 334 596" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className='svg_circle' d="M163.305 15.3093C163.305 22.9111 157.026 29.1186 149.223 29.1186C141.421 29.1186 135.141 22.9111 135.141 15.3093C135.141 7.7075 141.421 1.5 149.223 1.5C157.026 1.5 163.305 7.7075 163.305 15.3093Z" stroke="#F6F2F6" strokeWidth="3" />
                                <line x1="164.805" y1="14.8298" x2="332.053" y2="14.8298" stroke="#F6F2F6" strokeWidth="3" />
                                <path className='svg_circle' d="M163.554 405.412C163.554 413.014 157.275 419.222 149.472 419.222C141.67 419.222 135.39 413.014 135.39 405.412C135.39 397.811 141.67 391.603 149.472 391.603C157.275 391.603 163.554 397.811 163.554 405.412Z" stroke="#F6F2F6" strokeWidth="3" />
                                <path className='svg_circle' d="M165.942 404.934L330.5 398L192 221" stroke="#F6F2F6" strokeWidth="3" />
                                <line x1="1.81704" y1="594.325" x2="139.066" y2="418.284" stroke="#F6F2F6" strokeWidth="3" />
                                <path d="M170.5 210.603C170.5 218.29 176.947 224.603 185 224.603C193.053 224.603 199.5 218.29 199.5 210.603C199.5 202.916 193.053 196.603 185 196.603C176.947 196.603 170.5 202.916 170.5 210.603Z" stroke="#F6F2F6" strokeWidth="3" />
                                <line x1="5.90839" y1="161.971" x2="136.908" y2="22.9712" stroke="white" strokeWidth="3" />
                                <line x1="7.4051" y1="161.556" x2="171.405" y2="207.556" stroke="white" strokeWidth="3" />
                            </svg>
                        </div>
                        <div className="container_right">
                            <div className="item_container item_container-innowise p-6 text-left">
                                <h3 className="text-sm md:text-base">{activeLanguage.education.innowiseLabel}</h3>
                                <p className="text-sm md:text-base lg:w-60 w-40">{activeLanguage.education.innowiseText}</p>
                            </div>
                            <div className="item_container item_container-modsen p-6 text-left">
                                <h3 className="text-sm md:text-base">{activeLanguage.education.modsenLabel}</h3>
                                <p className="text-sm md:text-base lg:w-60 w-40">{activeLanguage.education.modsenText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="education_container-small">
                        <div className='container_small-animate'></div>
                        <div className="item_container item_container-innowise text-left">
                            <h3 className="text-sm md:text-base">{activeLanguage.education.innowiseLabel}</h3>
                            <p className="text-sm md:text-base lg:w-60 w-40">{activeLanguage.education.innowiseText}</p>
                        </div>
                        <svg className="education_svg-small mx-auto" viewBox="0 0 14 40" fill="none">
                            <circle r="5" cx="7" cy="-8" stroke="#F6F2F6" strokeWidth="3" />
                            <line x1="7" y1="0" x2="7" y2="40" stroke="#F6F2F6" strokeWidth="3" />
                            <circle r="5" cx="7" cy="48" stroke="#F6F2F6" strokeWidth="3" />
                        </svg>
                        <div className="item_container item_container-react text-left">
                            <h3 className="text-sm md:text-base">{activeLanguage.education.reactLabel}</h3>
                            <p className="text-sm md:text-base  lg:w-60 w-40">{activeLanguage.education.reactText}</p>
                        </div>
                        <svg className="education_svg-small mx-auto" viewBox="0 0 14 40" fill="none">
                            <circle r="5" cx="7" cy="-8" stroke="#F6F2F6" strokeWidth="3" />
                            <line x1="7" y1="0" x2="7" y2="40" stroke="#F6F2F6" strokeWidth="3" />
                            <circle r="5" cx="7" cy="48" stroke="#F6F2F6" strokeWidth="3" />
                        </svg>
                        <div className="item_container item_container-modsen text-left">
                            <h3 className="text-sm md:text-base">{activeLanguage.education.modsenLabel}</h3>
                            <p className="text-sm md:text-base lg:w-60 w-40">{activeLanguage.education.modsenText}</p>
                        </div>
                        <svg className="education_svg-small mx-auto" viewBox="0 0 14 40" fill="none">
                            <circle r="5" cx="7" cy="-8" stroke="#F6F2F6" strokeWidth="3" />
                            <line x1="7" y1="0" x2="7" y2="40" stroke="#F6F2F6" strokeWidth="3" />
                            <circle r="5" cx="7" cy="48" stroke="#F6F2F6" strokeWidth="3" />
                        </svg>
                        <div className="item_container item_container-univercity text-left">
                            <h3 className="text-sm md:text-base">{activeLanguage.education.universityLabel}</h3>
                            <p className="text-sm md:text-base  lg:w-60 w-40">{activeLanguage.education.universityText}</p>
                        </div>
                    </div>
                </div>
            }
            {(scroll < 180) && <div className='education_container'></div>}
        </section >
    );
}

export default Education;