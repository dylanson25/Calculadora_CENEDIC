var inpP01 = document.querySelector('#inpPantalla')
class   Operacion{
    constructor(){
        this._operacion = null
        this._siguiente = null
        this._anterior = null
    }
    operacion(){
        return this._operacion
    }
    getOperacion(oper){
        this._operacion = oper
    }
    siguiente(){
        return this._siguiente
    }
    reset(){
        this._operacion = null
        this._anterior = null
        this._siguiente = null
        inpP01.value = 0
    }
    cifra(numero, objeto){
        if(calcu.inicioM() === null){
            calcu.inicioA(objeto)
        }
        else if(this._siguiente === null && numero != 'X' && numero != '/'&& numero != '+'&& numero != '-'){
            let y=calcu.inicioM(), x = y.operacion() + numero
            y.operacion(x)
        }
        else{
            let x = new Operacion()
            x.getOperacion(x)
             let aux = this._siguiente
             while(aux != null){
                aux = aux._siguiente
             }
             aux = x
             aux._anterior = aux
        }
        this.mostrar()
     }
     mostrar(){
        /*  inpP01.value = calcu.inicioM().operacion()
          let aux = this._siguiente
         do{
                inpP01.value+= aux.operacion()
                aux = aux._siguiente
             }while(aux != null)*/
    }
}
class Calculadora {
    constructor() {
        this._inicio = null
    }
    reset(){
        this._inicio = null
    }
    inicioA(first){
        this._inicio = first
    }
    inicioM(){
        return this._inicio
    }
    sumar() {

    }
    restar() {

    }
    multiplicar() {

    }
    dividir() {

    }
}
var calcu = new Calculadora()
var ope = new Operacion()
btn01.addEventListener("click", () => {
    ope.cifra("1")
})
btn02.addEventListener("click", () => {
    ope.cifra("2")
})
btn03.addEventListener("click", () => {
    ope.cifra("3")
})
btn04.addEventListener("click", () => {
    ope.cifra("4")
})
btn05.addEventListener("click", () => {
    ope.cifra("5")
})
btn06.addEventListener("click", () => {
    ope.cifra("6")
})

btn07.addEventListener("click", () => {
    ope.cifra("7")
})

btn08.addEventListener("click", () => {
    ope.cifra("8")
})

btn09.addEventListener("click", () => {
    ope.cifra("9")
})
btn00.addEventListener("click", () => {
    ope.cifra("0")
})
btnC.addEventListener("click", () => {
    ope.reset()
    calcu.reset()
})
btnMas.addEventListener("click", ()=>{
    ope.cifra("+", ope)
})