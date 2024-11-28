// Cotação de moedas atual
const USD = 5.99
const EUR = 6.32
const GBP = 7.59

// Obtendo os elementos
const form = document.querySelector('form')
const amount = document.querySelector('#amount')
const currency = document.getElementById('currency')
const footer = document.querySelector('main footer')
const description = document.getElementById('description')

// Manipulando o input amount para receber apenas números
amount.addEventListener('input', () => {
  const hasCharacterRegex = /\D+/g
  amount.value = amount.value.replace(hasCharacterRegex, '')
})

// Captando o evento de submit do formulário
form.onsubmit = (event) => {
  event.preventDefault()

  switch (currency.value){
    case "USD":
      convertCurrency(amount.value, USD, 'US$')
      break
    case "EUR":
      convertCurrency(amount.value, EUR, '€')
      break
    case "GBP":
      convertCurrency(amount.value, GBP, '£')
  }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
  try {
    description.textContent = `${symbol} 1 = ${price}`

    // Aplica a classe que exibe o resultado no footer
    footer.classList.add("show-result")
  } catch (error) {
    // Remove a classe que exibe o resultado no footer
    footer.classList.remove("sjow-result")

    console.log(error)
    alert("Não foi possível realizar a conversão.")
  }
}
