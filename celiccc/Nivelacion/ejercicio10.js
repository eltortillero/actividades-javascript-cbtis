function ordenNum(valor){
    if(valor < 5) {
        return "Menor que 5";
    
    } else if( valor < 10){
        return "Menor que 10";
    }else{
        return "Es mayor o igual a 10";
    }
}

console.log(ordenNum(7));