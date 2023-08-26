
  
//   const cities = [
//     { city: 'New York', offset: -7 },
//     { city: 'London', offset: -2 },
//     { city: 'Frankfurt', offset: -1 },
//     { city: 'Riga', offset: 0 },
//     { city: 'Tokyo', offset: 9 }
//   ];
  

function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    let currentTime = new Date();
    currentTime.setHours(currentTime.getHours() - 7);

    let nyh = currentTime.getHours();
    let nym = currentTime.getMinutes();
    let nys = currentTime.getSeconds();
  
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    let nytime = padZero(nyh) + ":" + padZero(nym) + ":" + padZero(nys);
  
    document.getElementById('clock').textContent = `Время UTC+3: ${formattedTime}`;
    document.getElementById('clock-1').textContent = `NY: ${nytime}`;

  }
  

  setInterval(updateClock, 1000);

  function padZero(num) {
    return (num < 10 ? "0" : "") + num;
  }