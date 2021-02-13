let numeros = [1,2]


let notConsecutive = (array) =>{
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (array[i+1] - element != 1){
            return element
        }
        else{
            return false
        }
    }
}

console.log(notConsecutive(numeros))