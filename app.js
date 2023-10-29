// let gif = document.getElementById("gif");


// gif.onclick = function () {
//     scrollTo(0, 1100);
//     alert("Src - TG: @arnolds_timofei4ik");
// }


// let clck = document.getElementById('clck');
// let hide = document.getElementById('hide');
// let isVisible = false;


// clck.addEventListener('click', function() {

//     if (isVisible) {
//         hide.style.display = 'none';

//         isVisible = false;
//     } else {
//         hide.style.display = 'block';

//         isVisible = true;
//     }
// });
// const overlay = document.getElementById('overlay');
// let nightClck = document.querySelector('img.night');
// let sunClck = document.querySelector('img.sun');
// sunClck.style.visibility = 'hidden';
// nightClck.style.visibility = 'visible';

// function showOverlay() {
//   overlay.style.display = 'block';
// }

// function hideOverlay() {
//   overlay.style.display = 'none';
// }

// nightClck.addEventListener("click", function () {
//     overlay.style.display = 'block';
//     sunClck.style.visibility = 'visible';
//     nightClck.style.visibility = 'hidden';
//     sunClck.style.zIndex = '1';
    
//     nightClck.src = 'sun.png';
//     nightClck.alt = 'Sun';
// })

// sunClck.addEventListener("click", function () {
//     overlay.style.display = 'none';
//     sunClck.style.visibility = 'hidden';
    
//     nightClck.style.visibility = 'visible';

//     sunClck.src = 'night.png';
//     sunClck.alt = 'Night';
// })

//backtest
let textElement = document.getElementById('backtest');
let textArray = ['Bruh', 'Bro, ur slow', 'Bruh what the hell bruh', 'Vanco Vanco', 'Arnolds Timofei4ik'];
let currentIndex = 0;

function changeText() {
  textElement.textContent = textArray[currentIndex];
  currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 1000);


//modal-fa
var modal = document.getElementById("mymodal");
var btn = document.getElementById("btn_modal_window");
var close = document.getElementsByClassName("close_modal")[0];

btn.onclick = function () {
  modal.style.display = "block";
}

close.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}