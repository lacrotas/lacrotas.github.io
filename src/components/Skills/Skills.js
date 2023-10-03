import "./Skills.css";
import React from "react";
import SkillItem from "./SkillItem/SkillItem";
import { useState } from "react";
import SkillDescription from "./SkillDescription/SkillDescription";
function Skills({ activeLanguage }) {
    const [activeItem, setActiveItem] = useState(0);
    const [isItemChoosen, setIsItemChoosen] = useState(false);

    function handleClick(index) {
        setActiveItem(index);
        setIsItemChoosen(true);
        const children = document.querySelectorAll(".skills_container > div");
        for (let i = 0; i < children.length; i++) {
            if (index !== i) {
                children[i].className = "skill_item";
            } else {
                children[i].className = "skill_item skill_item-active";
            }
        }
    }
    return (
        <section className="skills my_section mx-auto text-center w-4/4">
            <h2>{activeLanguage.skills.label}</h2>
            <div className="skills_container grid w-4/4 gap-5 mx-auto">
                {activeLanguage.skills.skillList.map((item, index) => <SkillItem className={"skill_item"} key={index} image={item.image} label={item.label} setActiveItem={handleClick} index={index} />)}
            </div>
            {(isItemChoosen && <SkillDescription arr={activeLanguage.skills.skillList[activeItem].skillArr} />) || <div className="empty_skill-description w-3/4">{activeLanguage.skills.helpDescription}</div>}
        </section>
    );
}

export default Skills;