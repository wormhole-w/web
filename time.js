
  
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
  
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
    document.getElementById('clock').textContent = `Настоящее время: ${formattedTime}`;

  }
  

  setInterval(updateClock, 1000);
  

  