const userLanguage = navigator.language || navigator.userLanguage;
if (userLanguage.startsWith("ru")) {
  window.location.href = "ru.html";
}

function calculatePL() {
    var asset = document.getElementById('asset').value;
    var position = document.getElementById('position').value;
    var entryPrice = parseFloat(document.getElementById('entry-price').value);
    var exitPrice = parseFloat(document.getElementById('exit-price').value);
    var quantityUSD = parseFloat(document.getElementById('quantity').value);
    var leverage = parseFloat(document.getElementById('leverage-input').value);
  
    // Проверка выбранного актива и расчет количества
    var quantity;
    if (position === 'long') {
      quantity = (quantityUSD * leverage) / entryPrice;
    } else if (position === 'short') {
      quantity = -(quantityUSD * leverage) / entryPrice; // для позиции Short используется отрицательное количество
    }
  
    // Расчет P%L
    var pl = (exitPrice - entryPrice) * quantity;
  
    document.getElementById('result').innerHTML = "P%L: " + pl.toFixed(2);
  }
  
  function updateLeverageInput() {
    var sliderValue = document.getElementById('leverage-slider').value;
    document.getElementById('leverage-input').value = sliderValue;
    calculateQuantityTimesLeverage();
  }
  
  function updateLeverageSlider() {
    var inputValue = document.getElementById('leverage-input').value;
    document.getElementById('leverage-slider').value = inputValue;
    calculateQuantityTimesLeverage();
  }
  
  function updateLeverageResult() {
    const leverageValue = document.getElementById('leverage-input').value;
    const quantityValue = document.getElementById('quantity').value;
    const leverageResultElement = document.getElementById('leverage-result');
    const result = leverageValue * quantityValue;
    leverageResultElement.value = "$" + result.toFixed(2);
  }
  
  