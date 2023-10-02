import PropTypes from 'prop-types';
import "./SkillItem.css";

export default function SkillItem({ image, label, setActiveItem, index }) {

    return (
        <div className="skill_item" onClick={()=>setActiveItem(index)}>
            <img src={image} alt={label} className="item_image" />
            <p className="item_text text-sm md:text-base mt-5">{label}</p>
        </div>
    );
}
SkillItem.propTypes = {
    setActiveItem: PropTypes.func.isRequired,
};