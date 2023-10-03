import ProjectItem from "../../components/ProgectItem/ProjectItem";
import { PROJECTS } from "../../constants/project";

export default function Project({activeLanguage}) {
    return (
        <section className="progect text-center w-4/4">
            <h2>{activeLanguage.projects.label}</h2>
            {PROJECTS.map((item,index) => <ProjectItem key={index} label={item.label} tehnology={item.tehnology} image={item.image} link={item.link} repozitory={item.repozitory} activeLanguage={activeLanguage} />)}
        </section>
    );
}