import EducationResumeSection from './EducationResumeSection.jsx';
import ExperienceResumeSection from './ExperienceResumeSection.jsx';
import PersonalResumeSection from './PersonalResumeSection.jsx';
import { joinDate } from '../helpers/formatDate.js';
import '../../styles/Display.css';

export default function Display({ data }) {

    if (!data) {
        throw new Error('No data passed');
    }

    const PersonalData = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber
    }

    const EducationData = {
        school: data.school,
        title: data.titleOfStudy,
        degree: data.degree,
        start: joinDate(data.educationStartYear, data.educationStart),
        end: joinDate(data.educationEndYear, data.educationEnd)
    }

    const ExperienceData = {
        company: data.company,
        position: data.position,
        responsibilities: data.responsibilities,
        start: joinDate(data.experienceStartYear, data.experienceStart),
        end: joinDate(data.experienceEndYear, data.experienceEnd)
    };

    return (
        <>
            <PersonalResumeSection { ...PersonalData } />
            <EducationResumeSection { ...EducationData } />
            <ExperienceResumeSection { ...ExperienceData } />
        </>
    );
}