import PersonalFormSection from './PersonalFormSection.jsx';
import EducationFormSection from './EducationFormSection.jsx';
import ExperienceFormSection from './ExperienceFormSection.jsx';
import '../../styles/Form.css';

export default function Form({ onChange }) {
    return (
        <>
            <h1>Resume CV Generator</h1>
            <span>Items marked with * are required for section to be visible.</span>
            <form onChange={onChange}>
                <PersonalFormSection onReset={onChange}/>
                <EducationFormSection onReset={onChange} />
                <ExperienceFormSection onReset={onChange} />
            </form>
        </>
    );
}

