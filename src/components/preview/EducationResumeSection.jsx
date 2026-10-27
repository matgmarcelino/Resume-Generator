import { formatDate } from "../helpers/formatDate";
import '../../styles/ResumeSection.css';

export default function EducationResumeSection({ school, title, degree, start, end }) {

    if (!school) return null;

    return (
        <section className="resume-section" aria-labelledby="education-title">
            <h3 id="education-title" className="section-title">Education</h3>

            <article className="entry">
                <header className="entry-header">
                    {(degree || title) && (
                        <h4 className="entry-title">
                            {[degree, title].filter(Boolean).join(' — ')}
                        </h4>
                    )}
                    {school && <p className="entry-subtitle">{school}</p>}
                    {start && (
                        <p className="entry-dates">
                            <time dateTime={start}>{formatDate(start)}</time>
                            {" — "}
                            {end ? 
                                <time dateTime={end}>{formatDate(end)}</time>  :
                                <span>Present</span>}
                        </p>
                    )}
                </header>
            </article>
        </section>
    );
}
