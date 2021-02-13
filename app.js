let numeros = [1,2,3,4,5,6,7,8,9,10,11,15]


let notConsecutive = (array) =>{
    for (let i = 0; i < array.length; i++) {
        let element = array[i]
        if (array[i+1] - element != 1){
            return element
        }
        
    }
}

console.log(notConsecutive(numeros))