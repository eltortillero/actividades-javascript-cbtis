function wordBlanks (myNoun, myAdjective, myVerb, myadverb){
    var result ="";
    result += "the " + myAdjective + myNoun + myVerb +"to the store" + myadverb +".";
    return result;
    console.log (wordBlanks ("dog", "big", "ran", "quickly"));
}