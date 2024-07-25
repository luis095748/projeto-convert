// Cotação de moedas do dia.
const USD = 5.66
const EUR = 6.13
const GBP = 7.29

// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")
const footer = document.querySelector("main footer")
const description = document.getElementById("description")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
    console.log(amount.value);
    const hasCharactersRegex = /\D+/g

    amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Captando o evento de submite (enviar) do formulário.
form.onsubmit = (event) => {
    event.preventDefault()

  switch (currency.value) {
    case "USD":
        convertCurrency(amount.value, USD, "US$"); 
        break;
    case "EUR":
        convertCurrency(amount.value, EUR, "€")
        break;
    case "GBP":
        convertCurrency(amount.value, GBP, "£")
        break
  }
}

// Função para converter a moeda.
function convertCurrency(amount, price, symbol) {
    try {
        console.log(amount, price, symbol);
    } catch (error) {
        console.log(error)
    }
}

// Função paraq converter moeda.
function convertCurrency(amount, price, symbol) {
    try {
        // Exibe a cotação da moeda selicionado.]
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Aplica a classe que existe o footer para mostrar resultado.
        footer.classList.add("show-result")
    } catch (error) {
        console.log(error);
    } 
}

// Foramta a moeda em real Brasileiro   
function formatCurrencyBRL(value) {
    // Converte para número para utilizar toLocalString para formatar no padrão BRL
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    } )
}