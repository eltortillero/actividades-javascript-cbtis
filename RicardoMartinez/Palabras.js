function wordBlanks (myNoun, myAdjective, myVerb, myAdverb){
    var result = "";
    result += "El " + myNoun + myAdjective + myVerb + " a la tienda " + myAdverb
    return result;
}
console.log(wordBlanks("perro ", "grande ", "corria", "rapido"));