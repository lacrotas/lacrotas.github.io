import ProjectItem from "../../components/ProgectItem/ProjectItem";
import { PROJECTS } from "../../constants/project";

export default function Project({activeLanguage}) {
    return (
        <div className="text-center">
            <h2>{activeLanguage.projects.label}</h2>
            {PROJECTS.map((item,index) => <ProjectItem key={index} label={item.label} tehnology={item.tehnology} image={item.image} link={item.link} repozitory={item.repozitory} activeLanguage={activeLanguage} />)}
        </div>
    );
}