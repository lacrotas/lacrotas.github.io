import "./SkillDescription.css";

export default function SkillDescription({ arr }) {
    return (
        <div className="description w-3/4 mx-auto">
            <ul className="grid grid-cols-4 gap-5 ml-10">
                {arr.map((item, index) => <li className="description_paragraph text-sm md:text-base" key={index}>{item}</li>)}
            </ul>
        </div>
    );
}