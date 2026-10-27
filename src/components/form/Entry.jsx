import '../../styles/Entry.css';

export default function Entry({ label, name, type = "text", required }) {
    if (!label) {
        throw new Error('No Label given');
    }

    return (
        <label>
            {required ? label + '*' : label}
            {   type === 'month' ? <DateInput name={name} /> : 
                type === 'textarea' ? <TextAreaInput name={name} /> :
                <input type={type} name={name} />}
        </label>
    );
}

function DateInput({ name }) {
    return (
        <div className="date-input">
            <select name={name} defaultValue="" >
                <option value="" disabled={true} >Month</option>
                <option value="01">Jan</option>
                <option value="02">Feb</option>
                <option value="03">Mar</option>
                <option value="04">Apr</option>
                <option value="05">May</option>
                <option value="06">Jun</option>
                <option value="07">Jul</option>
                <option value="08">Aug</option>
                <option value="09">Sep</option>
                <option value="10">Oct</option>
                <option value="11">Nov</option>
                <option value="12">Dec</option>
            </select>
            <input type="number" name={name + 'Year'} placeholder="Year" min="1950" max="2030" />
        </div>
    );
}

function TextAreaInput({ name }) {
    return (
        <textarea
            name={name}
            rows="10"
            cols="50">
        </textarea>
    );
}