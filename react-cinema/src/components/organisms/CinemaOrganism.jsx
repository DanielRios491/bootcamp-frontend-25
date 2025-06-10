import SeatMolecule from "../molecules/SeatMolecule";
import { useState, Fragment } from 'react';
import '../styles/OrganismStyles.css';

const ROWS = ['A','B','C','D','E'];
const COLS = [0,1,2,3,4];

export default function SeatGrid() {
    const [selected, setSelected] = useState(new Set());

    return (
        <div className="organism-style">
        {ROWS.map(row => (
            <Fragment key={row}>
                {COLS.map(col => {
                    const id = `${row}${col}`;
                    return (
                    <SeatMolecule
                        key={id}
                        label={id}
                    />
                    );
                })}
            </Fragment>
        ))}
        </div>
    );
}
