// Code your solution in this file!
function distanceFromHqInBlocks(block){
    return (block >= 42) ? block - 42 : 42 - block;
}
function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
}
function distanceTravelledInFeet(start, end){
    return (start >= end) ? (start-end) * 264 : (end-start) * 264
}
function calculatesFarePrice(start, destination){
    let distance = (start >= destination) ? ( start - destination) * 264 : (destination - start) * 264
    debugger
    if(distance < 400){
        return 0
    } else if(distance >= 400 && distance < 2000){
        return (distance - 400) * 0.2 / 10
    } else if(distance >= 2000 && distance < 2500){
        return 25
    }
    return 'cannot travel that far'
}
