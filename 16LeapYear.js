// 16Th Question
// Write a JavaScript program to find the leap years in a given range of years.

function leapYear(year)
{
  if((year % 4 ===0) && (year % 100 !==0) || (year % 400 === 0))

{
    return true
}
else {
    return false;
}
}
console.log(leapYear(2000));