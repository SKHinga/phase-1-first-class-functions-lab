// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (){
  return drivers.slice(0,2);
  }
returnFirstTwoDrivers();

const returnLastTwoDrivers = function (){
  return drivers.slice(2);
}
returnLastTwoDrivers();
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(amount){
  return function (){
    return amount**2
  }
}
createFareMultiplier(4);
const fareQuintupler = createFareMultiplier(5);
function fareDoubler(money){
  return money*2
}
fareDoubler(10);
function fareTripler (nauli){
  return nauli*3
}
fareTripler(12);
function selectDifferentDrivers (){
  return returnFirstTwoDrivers();
  return returnLastTwoDrivers();
};
function selectDifferentDrivers(drivers, returnDriver){
  return returnDriver(drivers);
};