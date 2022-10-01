function ourRandomRange(ourMin, ourMax){

    return Math.floor(Math.random()*(ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1,9);

function ourRandomRange(myMin, myMax){

    return Math.floor(Math.random()* (myMax - myMin +1)) + myMin;
}

var myRandom = randomRange(5,15);

console.log(myRandom)