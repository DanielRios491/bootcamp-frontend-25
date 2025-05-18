class Cinema {
    seats;

    constructor(rowN, seatN) {
        this.seats = Array.from(Array(rowN), (x) => x = new Array(seatN).fill("available"));
    }


    showSeatStatus() {
        console.table(this.seats)
    };

    reserveSeat(row, seat) {
        if (this.seats[row][seat] === "available") {
            this.seats[row][seat] = "held"
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
}


function cinemaTestFunction() {
    const cinema = new Cinema(5, 10);

    cinema.showSeatStatus();

    cinema.reserveSeat(3,5);

    cinema.showSeatStatus();

    cinema.reserveSeat(3,5);
}

cinemaTestFunction()
