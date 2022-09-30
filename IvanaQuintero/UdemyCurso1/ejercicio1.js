function saludar () {
    console.log('saludo')
}
saludar()
const saludo = () => console.log('Saludar desde Arrow Functions')
saludo()

const saludar = (a,b,c) => {
    console.log(a)
    console.log(b)
    console.log(c)

}
saludar (3,'ivana', true)
const func1=(dato) => {
    return dato
}
const func2 = (d) => {
    console.log(d)
}
func2 (func1('ivana'))
// saludo
// Saludar desde Arrow Functions