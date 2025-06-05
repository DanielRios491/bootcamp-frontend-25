import SeatMolecule from "../molecules/SeatMolecule";

export default function CinemaOrganism() {
    const Seat = ["A1","A2","A3","A4"]

    return(
        <div className="organism-style">
            {Seat.map((element, index) => <SeatMolecule label={element} key={index}/>)}
        </div>
    );
}