const inputElement = document.querySelector('#input')
const fromElement = document.querySelector('#from')
const toElement = document.querySelector('#to')
const buttonElement = document.querySelector('#convert-btn')
const outputElement = document.querySelector('#output')
const messageElement = document.querySelector('#message')

function convert(){
    const fromOption = fromElement.value
    const toOption = toElement.value

    if(fromOption === toOption){
        messageElement.innerHTML = 'Não há conversão! Comparação entre dados iguais.'
        return
    }

    let fromData = 0

    //Daniel: Neste primeiro caso, converti todo os dados da variável toData para metros, para cálcular o resultado com a mesma unidade de medida.
    switch (fromOption) {
        case "m":
            fromData = parseFloat(inputElement.value)
            break
        case "km":
            fromData = parseFloat(inputElement.value) * 1000
            break
        case "cm":
            fromData = parseFloat(inputElement.value)/100
        case "mm":
            fromData = parseFloat(inputElement.value)/1000
            break
    }

    let toData
    switch (toOption) {
        case "m":
            toData = fromData
            break
        case "km":
            toData = fromData/1000
            break
        case "cm":
            toData = fromData*100
            break
        case "mm":
            toData = fromData*1000
            break
    }

    outputElement.value = toData
    const fromLabel = fromElement.options[fromElement.selectedIndex].text
    const toLabel = toElement.options[toElement.selectedIndex].text
    const message = `${inputElement.value} ${fromLabel} equivalem a ${toData} ${toLabel}`
    messageElement.textContent = message
    return
}

buttonElement.addEventListener('click',convert)