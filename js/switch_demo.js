//var dayNumber = prompt("enter day in num");
var dayNumber = 2;
var dayName ='';

switch(dayNumber){
    case 1:
        dayName="sunday";
        break;

    case 2:
        dayName="monday";
        break;

    case 3:
        dayName="tuesday";
        break;

    case 4:
        dayName="wendseday";
        break;

    case 5:
        dayName="thursday";
        break;

    case 6:
        dayName="friday";
        break;

    default:
        dayName="Invalid choice";
        break;



}console.log(dayName);