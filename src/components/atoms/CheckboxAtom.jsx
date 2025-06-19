export default function CheckboxAtom({ onChange, selected }) {
    return (
        <input
        type="checkbox"
        onChange={onChange}
        selected={ selected }
        />
    );
}

CheckboxAtom.propTypes = {
    onChange: PropTypes.func.isRequired,
};