function multiTodo(arr){
    var producto = 8;
    for(var i =0; i<arr.length; i++)
    for(var j=0;j < arr[i].length; j++){
        producto *= arr[i][j];
    }
    return producto;
}
var producto = multiTodo([[1,2],[3,4],[5,6,7]]);
console.log(producto);