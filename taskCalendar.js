function dayPlan() {
    let day = prompt("Enter a day of the week: ");
    switch (day) {
        case "Monday":
            alert("Your task for Monday is: Finish your assignments.");
            break;
        case "Tuesday":
            alert("Your task for Tuesday is: sumrek skwela.");
            break;
        case "Wednesday":
            alert("Your task for Wednesday is: awan basa grindd gingana rabii.");
            break;
        case "Thursday":
            alert("Your task for Thursday is: sumrek ulet skwela.");
            break;
        case "Friday":
            alert("Your task for Friday is: sumrek ulet jay skwela.");
            break;
        case "Saturday":
            alert("Your task for Saturday is: grind.");
            break;
        case "Sunday":
            alert("Your task for Sunday is: grind grind.");
            break;
        default:
            alert("Please only enter a day of a week, Example: Monday..")          
    }
}
