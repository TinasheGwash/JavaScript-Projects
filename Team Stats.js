// We want a data structure to store the information about our team. Create an empty team object.
const team = {
    _players: [
        { firstName: "John", lastName: "Smith", age: 25 },
        { firstName: "James", lastName: "Williams", age: 20 },
        { firstName: "Chris", lastName: "Wilson", age: 19 }
    ],
    _games: [
        { opponent: "Broncos", teamPoints: 42, opponentPoints: 27 },
        { opponent: "Wolves", teamPoints: 23, opponentPoints: 20 },
        { opponent: "Lions", teamPoints: 15, opponentPoints: 18 },
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },
    /*
    Add a similar method for recording game results called addGame that:
    takes in an opponent’s name,
    your team’s points,
    the opponent’s points,
    creates a game object,
    adds the game object to your team‘s games array.
    */
    addGame(oppName, points, oppPoints) {
        const game = {
            opponent: oppName,
            points: points,
            opponentPoints: oppPoints
        }
        this.games.push(game);
    }
};
/*
Below your team object, invoke your addPlayer method on the following players: Steph Curry Age 28,Lisa Leslie Age 44, and Bugs Bunny Age 76.
*/
team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);
// Print out the team‘s players to check they were all properly added.
console.log(team.players);
/*
Invoke your addGame method on three games. 
*/
team.addGame("Sea Lions", 100, 50);
team.addGame("Wolves", 56, 90);
team.addGame("Tigers", 30, 47);
// print the team‘s updated games array
console.log(team.games);