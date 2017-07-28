console.log("yo");

let button = document.getElementById("calculate");
button.addEventListener("click", coinCounter);
// console.log("button");


let coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,
}

let quarters = 25;
let dimes = 10;
let nickels = 5;
let pennies = 1;

function coinCounter(value) {
    let input = document.getElementById("dolla-amount").value * 100;
    let currentAmount = input;
    let quarterAmount = currentAmount / quarters;
    coinPurse.quarters += Math.floor(quarterAmount);
    currentAmount = currentAmount - (quarters * coinPurse.quarters);
    console.log(quarterAmount);

    let dimeAmount = currentAmount / dimes;
    coinPurse.dimes += Math.floor(dimeAmount);
    currentAmount = currentAmount - (dimes * coinPurse.dimes);
    console.log(dimeAmount);

    let nickelAmount = currentAmount / nickels;
    coinPurse.nickels += Math.floor(nickelAmount);
    currentAmount = currentAmount - (nickels * coinPurse.nickels);
    console.log(nickelAmount);

    let pennyAmount = currentAmount / pennies;
    coinPurse.pennies += Math.floor(pennies * coinPurse.dimes);
    currentAmount = currentAmount - (pennies * coinPurse.pennies);
    console.log(pennyAmount);

    console.log(coinPurse);

    // return (coinCounter);

    // let output = coinPurse;



};
document.getElementById("output").innerHTML = coinPurse.quarters;
document.getElementById("output").innerHTML = coinPurse.dimes;
document.getElementById("output").innerHTML = coinPurse.nickels;
document.getElementById("output").innerHTML = coinPurse.pennies;