function countdown(callback){
window.setTimeout(callback, 2)
}

function createMultiplier(multiplierValue){
return function(x){ return multiplierValue * x}

}

var doubler = createMultiplier(2)

var tripler = createMultiplier(3)

function multiplier(num1, num2){
return (num1 * num2)

}
function doublerWithBind(){
  return multiplier(2, num2.bind())

}

function triplerWithBind(){
  return multiplier(3, num2.bind())

}