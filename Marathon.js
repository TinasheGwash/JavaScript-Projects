let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber);

const registeredEarly = true;

const age = 33;

if (age > 18 && registeredEarly === true) {
    raceNumber += 1000;
    console.log(`You will race at 9:30 am. Race Number: ${raceNumber}`);
} else if (age > 18 && registeredEarly === false) {
    raceNumber += 1000;
    console.log(`You will race at 11:00 am. Race Number: ${raceNumber}`);
} else if (age < 18) {
    raceNumber += 1000;
    console.log(`You will race at 12:30 am. Race Number: ${raceNumber}`);
} else {
    raceNumber += 1000;
    console.log(`Please visit the registration desk. Race Number: ${raceNumber}`);
}