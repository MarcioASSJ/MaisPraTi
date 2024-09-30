let numEst =10

if (numEst <= 0) {
    console.log("Informe um número positivo maior que zero.")
} else {
    let i = numEst

    do {
        let j = 0;
        
        while (j < i) {
            console.log('*')
            j++
        }
        
        console.log()
        i--

    } while (i > 0)
}