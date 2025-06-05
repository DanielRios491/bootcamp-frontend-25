import LabelAtom from "../atoms/LabelAtom";
import SeatIcon from "../../assets/chair_icon.png";
import "../styles/MoleculeStyles.css";
import { useState } from "react";

export default function SeatMolecule({ label }) {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked((lastState) => !lastState);
    };

    return (
        <div
        className="seat-molecule"
        onClick={handleClick}
        style={{ background: clicked ? "orange" : "green" }}
        >
        <LabelAtom label={label} />
        <img src={SeatIcon} alt="SeatIcon" className="image-style" />
        </div>
    );
}
