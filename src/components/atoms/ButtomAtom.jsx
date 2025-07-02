import "./Atoms.css";

export default function ButtomAtom({color, onClick, children}) {
    return (
        <button className={`button-atom ${color}`} onClick={onClick}>
            {children}
        </button>
    );
}