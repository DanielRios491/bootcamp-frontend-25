export default function CheckboxAtom({ onChange }) {
    return (
        <input
        type="checkbox"
        onChange={onChange}
        />
    );
}

CheckboxAtom.propTypes = {
    onChange: PropTypes.func.isRequired,
};