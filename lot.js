// document.addEventListener("DOMContentLoaded", function () {
//     const calculateButton = document.getElementById("calculateButton");
//     const accountBalanceInput = document.getElementById("accountBalance");
//     const riskPercentageInput = document.getElementById("riskPercentage");
//     const stopLossPipsInput = document.getElementById("stopLossPips");
//     const lotSizeSpan = document.getElementById("lotSize");

//     calculateButton.addEventListener("click", function () {
//         const accountBalance = parseFloat(accountBalanceInput.value);
//         const riskPercentage = parseFloat(riskPercentageInput.value) / 100;
//         const stopLossPips = parseFloat(stopLossPipsInput.value);
        
//         if (!isNaN(accountBalance) && !isNaN(riskPercentage) && !isNaN(stopLossPips)) {
//             const lotSize = (accountBalance * riskPercentage) / (stopLossPips * 10);
//             lotSizeSpan.textContent = lotSize.toFixed(2);
//         } else {
//             alert("Please enter valid numbers.");
//         }
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const calculateButton = document.getElementById("calculateButton");
//     const accountBalanceInput = document.getElementById("accountBalance");
//     const riskPercentageInput = document.getElementById("riskPercentage");
//     const stopLossPipsInput = document.getElementById("stopLossPips");
//     const lotSizeSpan = document.getElementById("lotSize");
//     const moneyAmountSpan = document.getElementById("moneyAmount");
//     const moneyEur = document.getElementById("moneyEur");

//     calculateButton.addEventListener("click", function () {
//         const accountBalance = parseFloat(accountBalanceInput.value);
//         const riskPercentage = parseFloat(riskPercentageInput.value) / 100;
//         const stopLossPips = parseFloat(stopLossPipsInput.value);

//         if (!isNaN(accountBalance) && !isNaN(riskPercentage) && !isNaN(stopLossPips)) {
//             const lotSize = (accountBalance * riskPercentage) / (stopLossPips * 10);
//             const moneyAmount = lotSize * stopLossPips * 10;
//             lotSizeSpan.textContent = lotSize.toFixed(2);
//             moneyAmountSpan.textContent = moneyAmount.toFixed(2);
//         } else {
//             alert("Please enter valid numbers.");
//         }
//     });

//     moneyEur = moneyAmount * 1.05;
//     console.log(moneyEur);
// });

document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");
    const accountBalanceInput = document.getElementById("accountBalance");
    const riskPercentageInput = document.getElementById("riskPercentage");
    const stopLossPipsInput = document.getElementById("stopLossPips");
    const lotSizeSpan = document.getElementById("lotSize");
    const moneyAmountSpan = document.getElementById("moneyAmount");
    const moneyAmountEuroSpan = document.getElementById("moneyAmountEuro");
    
    const exchangeRate = 1.05; // 1 us = 1.05 eu

    calculateButton.addEventListener("click", function () {
        const accountBalance = parseFloat(accountBalanceInput.value);
        const riskPercentage = parseFloat(riskPercentageInput.value) / 100;
        const stopLossPips = parseFloat(stopLossPipsInput.value);

        if (!isNaN(accountBalance) && !isNaN(riskPercentage) && !isNaN(stopLossPips)) {
            const lotSize = (accountBalance * riskPercentage) / (stopLossPips * 10);
            const moneyAmount = lotSize * stopLossPips * 10;
            const moneyAmountEuro = moneyAmount / exchangeRate;
            
            lotSizeSpan.textContent = lotSize.toFixed(2);
            moneyAmountSpan.textContent = moneyAmount.toFixed(2);
            moneyAmountEuroSpan.textContent = moneyAmountEuro.toFixed(2);
        } else {
            alert("Please enter valid numbers.");
        }
    });
});

