import { formatDate } from "../helpers/formatDate";
import '../../styles/ResumeSection.css';

export default function ExperienceResumeSection({ company, position, responsibilities, start, end }) {
    if (!company) return null;

    return (
        <section className="resume-section" aria-labelledby="experience-title">
            <h3 id="experience-title" className="section-title">Experience</h3>

            <article className="entry">
                <header className="entry-header">
                    {position && <h4 className="entry-title">{position}</h4>}
                    <p className="entry-subtitle">{company}</p>
                    {start && (
                        <p className="entry-dates">
                            <time dateTime={start}>{formatDate(start)}</time>
                            {" — "}
                            {end ? 
                                <time dateTime={end}>{formatDate(end)}</time>  :
                                <span>Present</span>}
                        </p>
                    )}
                    <p className="entry-responsibilities">{responsibilities}</p>
                </header>
            </article>
        </section>
    );
}