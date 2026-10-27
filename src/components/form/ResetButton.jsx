import '../../styles/ResetButton.css';

export default function ResetButton({ onReset }) {
    function handleClick(e) {
        const fieldset = e.target.closest('fieldset');

        fieldset.querySelectorAll('input, select, textarea').forEach(field => {
            field.value = '';
        });

        onReset(e);
    }

    return (
        <button type="button" className="reset-button" onClick={handleClick}>
            Reset
        </button>
    );
}