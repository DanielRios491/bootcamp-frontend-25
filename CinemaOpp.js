class Cinema {
    seats;

    constructor(rowN, seatN) {
        // this.seats = Array.from(Array(rowN), (x) => x = new Array(seatN).fill(new Seat(rowN, seatN, "available")));
        this.seats = Array.from(Array(rowN), (rowElement, rowIndex) =>
            Array.from(Array(seatN), (seatElement, seatIndex) =>
                new Seat(rowIndex, seatIndex, "available")
            )
        );
    }


    showSeatStatus() {
        console.table( this.seats.map((row, index) => {
            return row.map((seat, i) => {
                return seat.state;
            });
        }))
    };

    reserveSeat(row, seat) {
        if (this.seats[row][seat].state === "available") {
            this.seats[row][seat].state = "held"
            console.log(`Row ${row} and seat ${seat} reserved`);
        }else{
            console.log(`NOT AVAILABLE! Reserving was not possible in row ${row} and seat ${seat}`);
        }
    };

}

class Seat {
    row;
    seat;
    state;
    
    constructor(row, seat, state) {
        this.row = row;
        this.seat = seat;
        this.state = state;
    }
}


function cinemaTestFunction() {
    const cinema = new Cinema(5, 10);

    cinema.showSeatStatus();

    cinema.reserveSeat(4,6);

    cinema.showSeatStatus();

    cinema.reserveSeat(4,6);
}

cinemaTestFunction()
