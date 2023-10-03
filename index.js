// Code your solution in this file!
const returnFirstTwoDrivers = (arr) => {
    return arr.slice(0,2);
}
//console.log(returnFirstTwoDrivers(["kate","joe","bob"]))
const returnLastTwoDrivers = (arr) => {
    return arr.slice(-2);
}
//console.log(returnLastTwoDrivers(["kate","joe","bob","jenny","dave"]))
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];
function createFareMultiplier(num){
    return (fare)=>fare*num
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(names,selector){
    return selector(names);
}