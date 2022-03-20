// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    let firstTwo = [drivers[0],drivers[1]];
    return firstTwo;
};

const returnLastTwoDrivers = function(drivers){
    let lastTwo = [drivers[drivers.length-2],drivers[drivers.length-1]];
    return lastTwo;
};

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers];

function createFareMultiplier(multiplier){
    return function(fare){
        let newfare = fare*multiplier;
        return newfare;
    }
};

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, choice){
    return choice(arrayOfDrivers);
}