function distanceFromHqInBlocks(someValue) {
    return Math.abs(42 - someValue);
}
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue)
    const feet = blocks * 264;
    return feet;
}
function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination )
    const feet = blocks * 264
    return feet
}
function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination);
    if (feet > 2500) {
        return 'cannot travel that far';
    } else if (feet > 2000) {
        return 25;
    } else if (feet > 400) {
        const price = (feet - 400) * 0.02;
        return parseFloat(price.toFixed(2))
    } else {
        return 0;
    }
    
}