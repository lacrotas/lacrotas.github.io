import "./ProjectItem.css";

export default function ProjectItem({ label, tehnology, image, link, repozitory, activeLanguage }) {
    // const bgImage = { backgroundImage: "url(" + { image } + ")" }
    return (
        <div className="project_item relative">
            <div className="text-center project_item-up"  style={{ backgroundImage: `url(${image})` }}>
                    <a href={repozitory}><button className="button-reposite">{activeLanguage.projects.repository}</button></a>
                    <a href={link}><button className="button-demo ml-5">{activeLanguage.projects.live}</button></a>
            </div>
            <div className="text-center project_item-bottom">
                <h2 className="text-lg md:text-xl">{label}</h2>
                <ul className="progect_items grid max-md:grid-cols-1 grid-cols-3 mx-auto mt-10 gap-5 ml-16 max-md:ml-0">
                    {tehnology.map((item, index) => <li className="project_item-list text-sm md:text-base text-left" key={index}>{item}</li>)}
                </ul>
            </div>
        </div>
    );
}