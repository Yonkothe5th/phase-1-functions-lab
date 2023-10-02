// Code your solution in this file!
function distanceFromHqInBlocks (steetNo){
    const HQ = 42
    let math = Math.abs(steetNo-HQ);
    return math;
}

distanceFromHqInBlocks(43)

function distanceFromHqInFeet (streetNo) {
    distanceFromHqInBlocks (streetNo);
    const feetPerBlock = 264;
    let NaN = distanceFromHqInBlocks (streetNo) * feetPerBlock;
    return NaN  ;
}
distanceFromHqInFeet(48)

function distanceTravelledInFeet (start,destination) {
    const feet = 264;
    let NaN = Math.abs(destination - start) * 264;
    return NaN
}
distanceTravelledInFeet(43,50)

function calculatesFarePrice (start,destination){
    const travelDist = distanceTravelledInFeet(start,destination);
    const free = 400
    const extra = 2000
    const excess = 2500
    if (travelDist <= 400){
        return 0 ;
        } else if (travelDist > 400 && travelDist <= 2000) { 
          let rate = 0.02;
             let fare = (rate * (travelDist- free))         
              return fare;
        } else if (travelDist > extra && travelDist < excess) {
            let rate = 25;
             let fare = rate;
            return fare ;
     } else if(travelDist > excess) {
        return "cannot travel that far";
 }
}
calculatesFarePrice(34,32)