var display = document.getElementById('display')
var clearDisplay = false;
var firstNumber = 0;
var secondNumber = 0;
var symbol ='';
var previousSymbol;
var lastPressedNotSymbol = false ;
var afterDecimals = false;
var displayNotADot = true

function getNumber(value) {
  if (afterDecimals){
    if(Number(display.innerHTML + value) !== parseInt(display.innerHTML + value) && value !== 0){
      firstNumber = display.innerHTML + value
      display.innerHTML += value
      afterDecimals = false;
      lastPressedNotSymbol = true 
    }else{display.innerHTML += value}
  }else {  
      if (Number(display.innerHTML + value) === parseInt(display.innerHTML + value)) displayNotADot = true
      if(display.innerHTML == "0" || clearDisplay) {
          display.innerHTML = value.toString()
          firstNumber = Number(value)
          clearDisplay = false
          lastPressedNotSymbol = true
        } 
        else {
          display.innerHTML += value.toString()
          firstNumber = Number(display.innerHTML)
          lastPressedNotSymbol = true
      }
    
    }
    console.log(firstNumber)
console.log(secondNumber)
  }



function getSymbol(value) {
  if (lastPressedNotSymbol){
if (symbol !== ""){
  calculate()
  clearDisplay = true;
}}
  symbol = value
  previousSymbol = value
  console.log(symbol)
  secondNumber = Number(display.innerHTML)
  firstNumber = 0
  clearDisplay = true;
  lastPressedNotSymbol = false
  displayNotADot = true;

}

function calculate() {
if(firstNumber == 0){
  firstNumber = Number(display.innerHTML)
  symbol = previousSymbol
}
switch(symbol) {
  case '+': 
    display.innerHTML = ( Number(secondNumber) + Number(firstNumber) ).toString()
    break
  case '-':
    display.innerHTML = ( Number(secondNumber) - Number(firstNumber) ).toString()
    break
  case '*':
    display.innerHTML = ( Number(secondNumber) * Number(firstNumber) ).toString()
    break
  case '/':
  display.innerHTML = ( Number(secondNumber) / Number(firstNumber) ).toString()
    break
  case '%':
  display.innerHTML = ( Number(secondNumber) / Number(firstNumber) ).toString()
    break
}

firstNumber = 0
previousSymbol = symbol
symbol = ""
}

function AC(){
firstNumber = 0
secondNumber = 0
display.innerHTML= '0'
symbol = ""
displayNotADot = true
afterDecimals = false;
previousSymbol = symbol;
}

function decimals(){
  if(displayNotADot){
    afterDecimals = true
    display.innerHTML = `${firstNumber}.`
    displayNotADot = false
  }
}

function plusMinus (){
  let x = Number(display.innerHTML)
  if ( x> 0){
    x= x - x*2
    display.innerHTML = x.toString()
    firstNumber = display.innerHTML
  }else if (x < 0 ){
    x= x + Math.abs(x)*2
    display.innerHTML = x.toString()
    firstNumber = display.innerHTML
  }else{
    display.innerHTML = "0";
  }
}

function percentage() {
  firstNumber = (secondNumber * firstNumber)/100 
  calculate()
}