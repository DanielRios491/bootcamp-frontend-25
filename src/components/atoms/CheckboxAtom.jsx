export default function CheckboxAtom({ onChange, selected }) {
    return (
        <input
            type="checkbox"
            onChange={ onChange }
            checked={ selected }
        />
    );
}