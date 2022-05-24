'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  
  let decimal = 0
  let binaryArray = String(num).split("").map((num)=>{
    return Number(num)
  })
  for(let i = 0; i< binaryArray.length; i++){
  decimal = decimal + binaryArray[i] * 2 ** (binaryArray.length - 1 - i)
  }
  return decimal
  
  
}

function DecimalABinario(num) {
  // tu codigo aca

  let binario = []
  while(num>=1){
    if(num % 2 == 0){
      binario.unshift("0")
    } else {
        binario.unshift("1")
    }
    num = num / 2
  }
  return binario.join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}