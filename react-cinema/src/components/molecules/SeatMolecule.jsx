import LabelAtom from "../atoms/LabelAtom";
import SeatIcon from "../../assets/chair_icon.png";
import "../styles/MoleculeStyles.css"

export default function SeatMolecule({ label }) {
    return (
        <div className="seat-molecule">
            <LabelAtom label={label} />
            <img src={SeatIcon} alt="SeatIcon" className="image-style"/>
        </div>
    );
}