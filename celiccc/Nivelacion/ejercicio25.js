function randomRange (ourMin, ourMax){
    return Math.floor(Math.random() * (ourMax - ourMin + 1))+ ourMin;
}

var myRandom = randomRange(5,15);
console.log(myRandom);

