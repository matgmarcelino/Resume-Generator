import Entry from './Entry.jsx';
import ResetButton from './ResetButton.jsx';
import '../../styles/FormSection.css';

export default function PersonalFormSection({ onReset }) {
    return (
        <fieldset>
            <legend>Personal Information</legend>

            <Entry label="First Name" name="firstName" />
            <Entry label="Last Name" name="lastName" />
            <Entry label="Email" type="email" name="email" />
            <Entry label="Phone Number" type="tel" name="phoneNumber" />

            <ResetButton onReset={onReset} />
        </fieldset>
    )
}