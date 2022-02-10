
// Calculate if you’re getting enough sleep each week. 
// Determine the actual and ideal hours of sleep for each night of the last week.
// Calculate, in hours, how far you are from your weekly sleep goal.
const getActualSleepHours = () => {
    return getSleepHours('monday') + 
           getSleepHours('tuesday') + 
           getSleepHours('wednesday') +
           getSleepHours('thursday') +
           getSleepHours('friday') +
           getSleepHours('saturday') +
           getSleepHours('sunday');
  }
  console.log(getActualSleepHours() + " Total hours of sleep this week"); 
  
  const getIdealSleepHours = () => {
    let idealHours = 8; 
    return idealHours * 7; 
  }; 
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours(); 
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("You got the perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours){
       console.log("You got " + (actualSleepHours - idealSleepHours) + " extra hours of sleep.");
    } else if (actualSleepHours < idealSleepHours) {
      console.log("You needed " + (idealSleepHours - actualSleepHours) + " more hours of sleep");
    } else {
      console.log("Error! Something went wrong, check youe code.")
    }
  }; 
  calculateSleepDebt();