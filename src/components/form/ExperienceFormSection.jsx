import Entry from './Entry.jsx';
import ResetButton from './ResetButton.jsx';
import '../../styles/FormSection.css';

export default function ExperienceFormSection({ onReset }) {
    return (
        <fieldset>
            <legend>Experience</legend>

            <Entry label="Company Name" name="company" required />
            <Entry label="Position" name="position" />
            <Entry label="Responsibilities" type="textarea" name="responsibilities" />
            <Entry label="Date of Start" type="month" name="experienceStart" />
            <Entry label="Date of End" type="month" name="experienceEnd" />

            <ResetButton onReset={onReset} />
        </fieldset>
    );
}