let num1=30
let num2=5
document.getElementById("num1-el").textContent= num1
document.getElementById("num2-el").textContent=num2
sumEl=document.getElementById("sum-el")
function add(){
    let addition= num1 + num2
sumEl.textContent="sum: " +addition
}
function subtract(){
    let subtraction= num1 - num2
    sumEl.textContent="sum: " + subtraction
}
function multiply(){
    let multiplication= num1 * num2
    sumEl.textContent= "sum: " +multiplication
}
function divide(){
    let division= num1/num2
    sumEl.textContent= "sum: " +division
}
