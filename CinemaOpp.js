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
            this.seats[row][seat] = "unavailable"
            console.log(`Row ${row} and seat ${seat} held`);
        }else{
            console.log(`Row ${row} and seat ${seat} unavailable`);
        }
    };
}

class Seat {
    row = ["AA","AB","AC","A","B","C","D"];
    seat;
    state;
    

}

const cinema = new Cinema(5, 10);

cinema.showSeatStatus();

cinema.reserveSeat(3,5);

cinema.showSeatStatus();

cinema.reserveSeat(3,5);
