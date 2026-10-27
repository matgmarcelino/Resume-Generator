import { useState } from 'react';
import Form from './components/form/Form.jsx';
import './styles/App.css';
import Display from './components/preview/Display.jsx';

export default function App() {

    const [data, setData] = useState({
        company: "",
        educationEnd: "",
        educationStart: "",
        email: "",
        experienceEnd: "",
        experienceStart: "",
        firstName: "",
        lastName: "",
        phoneNumber: "",
        position: "",
        responsibilities: "",
        school: "",
        degree: "",
        titleOfStudy: "",
    });

    // Mobile only: which panel is showing, and whether the preview changed while hidden
    const [view, setView] = useState('edit');
    const [hasUnseenChanges, setHasUnseenChanges] = useState(false);

    function showView(nextView) {
        setView(nextView);
        if (nextView === 'preview') setHasUnseenChanges(false);
    }

    function handleChange(e) {
        e.preventDefault();

        const form = e.target.closest('form');
        const formData = Object.fromEntries(new FormData(form).entries());
        
        const newData = {};

        for (const key in formData) {
            newData[key] = formData[key]
        }

        setData(newData);
        if (view === 'edit') setHasUnseenChanges(true);
    }

    return (
        <div className='container' data-view={view}>
            <aside className='editor'>
                <Form onChange={handleChange} />
            </aside>
            <main className='preview'>
                <Display data={data} />
            </main>
            <nav className='view-switch' aria-label='Switch view'>
                <button type='button' aria-pressed={view === 'edit'} onClick={() => showView('edit')}>
                    Edit
                </button>
                <button type='button' aria-pressed={view === 'preview'} onClick={() => showView('preview')}>
                    Preview
                    {hasUnseenChanges && <span className='update-dot' aria-label='(updated)' />}
                </button>
            </nav>
        </div>
    );
}