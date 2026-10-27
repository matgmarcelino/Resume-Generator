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

    console.log(data);

    function handleChange(e) {
        e.preventDefault();

        const form = e.target.closest('form');
        const formData = Object.fromEntries(new FormData(form).entries());
        
        const newData = {};

        for (const key in formData) {
            newData[key] = formData[key]
        }

        setData(newData);
    }

    return (
        <div className='container'>
            <aside className='editor'>
                <Form onChange={handleChange} />
            </aside>
            <main className='preview'>
                <Display data={data} />
            </main>
        </div>
    );
}