let day=prompt("enter the day");

switch(day)
{
  case "sunday":
  case "saturday":
  console.log("Weekend");
  break;
  
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
  console.log("Working Day");
  break;
  
  default:
  console.log("not a day");
}