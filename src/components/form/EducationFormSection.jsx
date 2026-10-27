import Entry from './Entry.jsx';
import ResetButton from './ResetButton.jsx';
import '../../styles/FormSection.css';

export default function EducationFormSection({ onReset }) {
    return (
        <fieldset>
            <legend>Education</legend>

            <Entry label="School Name" name="school" required />
            <Entry label="Title of Study" name="titleOfStudy" />
            <Entry label="Degree" name="degree" />
            <Entry label="Start" type="month" name="educationStart" />
            <Entry label="End" type="month" name="educationEnd" />

            <ResetButton onReset={onReset} />
        </fieldset>
    );
}