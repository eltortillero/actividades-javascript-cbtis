function orderMyLogic(val){
    if (val < 10){
        return "Menor que 10";
    }else if (val < 5){
        return "Menor que 5";
    }else{
        return "Mas grande o igual a 10";
    }
}
console.log(orderMyLogic(7));