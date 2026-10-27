import Entry from './Entry.jsx';
import ResetButton from './ResetButton.jsx';
import '../../styles/FormSection.css';

export default function PersonalFormSection({ onReset }) {
    return (
        <fieldset>
            <legend>Personal Information</legend>

            <Entry label="First Name" name="firstName" autoComplete="given-name" />
            <Entry label="Last Name" name="lastName" autoComplete="family-name" />
            <Entry label="Email" type="email" name="email" autoComplete="email" />
            <Entry label="Phone Number" type="tel" name="phoneNumber" autoComplete="tel" />

            <ResetButton onReset={onReset} />
        </fieldset>
    )
}