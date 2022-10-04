var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};
function checkObj(checkProp){
    if(myObj.hasOwnProperty(checkProp)){
        return myObj[checkProp]
    } else {
        return "Not found"
    }
}
console.log(checkObj("gift"))