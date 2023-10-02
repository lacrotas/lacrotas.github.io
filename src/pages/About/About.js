import Myinfo from '../../components/MyInfo/Myinfo';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Contacts from '../../components/Contacts/Contacts';

export default function About({activeLanguage}) {
    return(
        <div>
            <Myinfo activeLanguage={activeLanguage} />
            <Education activeLanguage={activeLanguage} />
            <Skills activeLanguage={activeLanguage} />
            <Contacts activeLanguage={activeLanguage} />
        </div>
    );
}