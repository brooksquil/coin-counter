// let coinPurse = document.getElementById("output");

let input = 2.50;

function coinCounter(dollarAmount) {

    // let input = document.getElementById("dolla");
    let input = dollarAmount;
    dollarAmount *= 100;

    // let quarters = parseInt(dollarAmount / 25);
    // dollarAmount = dollarAmount % 25
    // let dimes = parseInt(dollarAmount / 10);
    // dollarAmount = dollarAmount % 10;
    // let nickels = parseInt(dollarAmount / 5);
    // dollarAmount = dollarAmount % 5;
    // let pennies = dollarAmount;

    let coinPurse;
    coinPurse.quarters = parseInt(dollarAmount / 25);
    dollarAmount = dollarAmount % 25
    coinPurse.dimes = parseInt(dollarAmount / 10);
    dollarAmount = dollarAmount % 10;
    coinPurse.nickles = parseInt(dollarAmount / 5);
    dollarAmount = dollarAmount % 5;
    coinPurse.pennies = dollarAmount;


    return coinPurse;
}

let change = coinCounter();
console.log(change);