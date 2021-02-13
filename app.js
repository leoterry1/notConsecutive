let numeros = [1,2,3,5,4]


let notConsecutive = (array) =>{
    for (let i = 0; i < array.length - 1; i++) {
        let element = array[i]
        let next = array[i +1]
        if (next - element != 1){
            return element
        }
}
}
console.log(notConsecutive(numeros))

