import '../../styles/PersonalResumeSection.css';

export default function PersonalResumeSection({ firstName, lastName, email, phoneNumber }) {
    if (!firstName && !lastName && !email && !phoneNumber) return null;

    return (
        <header className="resume-header">
            <h3 className="resume-name">{firstName} {lastName}</h3>
            <Contacts email={email} phoneNumber={phoneNumber} />
        </header>
    );

}

function Contacts({ email, phoneNumber }) {
    if (!email && !phoneNumber) return null;
    return (
        <ul className="resume-contact">
            {email && <li>{email}</li>}
            {phoneNumber && <li>{phoneNumber}</li>}
        </ul>
    );
}