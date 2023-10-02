import CssIcon from "../assets/images/skills/Css.png";
import JSIcon from "../assets/images/skills/Js.png";
import ReactIcon from "../assets/images/skills/React.png";
import GulpIcon from "../assets/images/skills/Gulp.png";
import HtmlIcon from "../assets/images/skills/Html.png";
import GitIcon from "../assets/images/skills/git.png";

export const SKILLSEN = [
    {
        image: ReactIcon,
        label:"React",
        skillArr: ["Hooks", "State", "Context", "Redux", "Props", "Routes", "JSX", "ReactDOM"],
    },
    {
        image:CssIcon,
        label:"Css 3",
        skillArr: ["Selectors", "Cascading", "Sass", "Animation", "Media-request", "TailWind"],
    },
    {
        image: JSIcon,
        label:"Java script",
        skillArr: ["Data types", "Operators", "Functions", "Objects", "Events", "Assync", "Class"],
    },
    {
        image: GitIcon,
        label:"Git",
        skillArr: ["Branching", "Merger", "Pull request"],
    },
    {
        image: GulpIcon,
        label:"Gulp",
        skillArr: ["Assembly", "File minification", "Browser-sync"],
    },
    {
        image: HtmlIcon,
        label:"Html",
        skillArr: ["Tags", "Attribute", "Forms", "Adaptive", "Meta-tags"],
    },
];