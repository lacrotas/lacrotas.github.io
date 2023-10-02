import "./ProjectItem.css";

export default function ProjectItem({ label, tehnology, image, link, repozitory, activeLanguage }) {
    return (
        <div className="project_item relative">
            <div className="project_item-dark absolute"></div>
            <img className="project_item-image absolute top-0 left-0" src={image} alt="burger" />
            <div className="text-center project_item-left">
                <h2 className="text-lg md:text-xl">{label}</h2>
                <ul className="progect_items grid max-md:grid-cols-1 grid-cols-3 mx-auto mt-10 gap-5 ml-16 max-md:ml-0">
                    {tehnology.map((item, index) => <li className="project_item-list text-sm md:text-base text-left" key={index}>{item}</li>)}
                </ul>
            </div>
            <div className="text-center project_item-right">
                <div className="buttons_container">
                    <a href={repozitory}><button className="button-reposite">{activeLanguage.projects.repository}</button></a>
                    <a href={link}><button className="button-demo">{activeLanguage.projects.live}</button></a>
                </div>
            </div>
        </div>
    );
}