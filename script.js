// identificação das variaveis pro JS das clasess, ids entre outros do html
const convertButton = document.querySelector(".converter")
const currencyValueToCovert = document.querySelector(".value-convert")
const currencyValueToCoverted = document.querySelector(".value-converted")
const currencySelect = document.querySelector(".converter-para")
const currencyName = document.querySelector("#currency-value")
const currencyImage = document.querySelector(".currency-img")

//adicionei um evento de cklique no botao de converter
convertButton.addEventListener("click", convertValues)

// função que executa ao decectar o cliquei no botao
function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const dolarToday = 4.80
    const euroToday = 5.20
    const libraToday = 6.10
    const biticoinToday = 150000.00

    currencyValueToCovert.innerHTML = new Intl.NumberFormat("pt-BR", { //formatando moedas
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

    if (currencySelect.value == "dolar") { // se o select estiver selecionado dolar entra aqui.
        currencyValueToCoverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }

    if (currencySelect.value == "euro") { // se o select estiver selecionado dolar entra aqui.
        currencyValueToCoverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (currencySelect.value == "libra") { // se o select estiver selecionado dolar entra aqui.
        currencyValueToCoverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }

    if (currencySelect.value == "biticoin") { // se o select estiver selecionado dolar entra aqui.
        currencyValueToCoverted.innerHTML = new Intl.NumberFormat("en-US", {
            maximumFractionDigits: 5,
            style: "currency",
            currency: "BTC"
        }).format(inputValue / biticoinToday)
    }

}


currencySelect.addEventListener("change", changeCurrency)


function changeCurrency(){
    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/Libra.png"
    }

    if (currencySelect.value == "biticoin") {
        currencyName.innerHTML = "Biticoin"
        currencyImage.src = "./assets/biticoin.png"
    }
    convertValues()

}























