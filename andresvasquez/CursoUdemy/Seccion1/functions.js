function NombreFunction(){
    console.log('Saludo')
};
NombreFunction();

const saludo = () => {
    console.log('Saludar desde arrow functions.')};
saludo();

const saludar = (a,b,c) =>{
    console.log(a)
    console.log(b)
    console.log(c)
    return a + b + c
}
saludar(3,'Manuel', true)
console.log(saludar(3,4,2))

const func1 = (dato) =>{
    return dato
}
const func2 = (d) => {
    console.log(d)
}
func2(func1('Nicolas'))