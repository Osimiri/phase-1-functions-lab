// Code your solution in this file!
// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    let blocksAway = Math.abs(42-someValue)
   return blocksAway;
}

function distanceFromHqInFeet(someValue){
   let distance = distanceFromHqInBlocks(someValue);
    return distance * 264;
}

function distanceTravelledInFeet(start, destination) {
    let feetTravel = Math.abs(start-destination);
    let feetDistance = feetTravel * 264;
    return feetDistance;
  }

function calculatesFarePrice(start, destination) {
    let farePriceMultiplier = distanceTravelledInFeet(start, destination)
    if (farePriceMultiplier < 400){
       let farePrice = 0;
       return farePrice;
    }     
    else if (farePriceMultiplier >= 400 && farePriceMultiplier <= 2000){
       let farePrice = (farePriceMultiplier - 400) * .02;
       return farePrice;
    }
    else if (farePriceMultiplier >= 2000 && farePriceMultiplier <= 2500){
        let farePrice = 25;
        return farePrice;
    } 
    else if (farePriceMultiplier >= 2500){
        return "cannot travel that far"
    }

}
