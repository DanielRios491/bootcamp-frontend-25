export default function ButtonAtom({ onClick, children }) {
    return (
        <button onClick={onClick}>
            {children}
        </button>
    );
}