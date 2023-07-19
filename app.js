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
const overlay = document.getElementById('overlay');
let nightClck = document.querySelector('img.night');
let sunClck = document.querySelector('img.sun');
sunClck.style.visibility = 'hidden';
nightClck.style.visibility = 'visible';

function showOverlay() {
  overlay.style.display = 'block';
}

function hideOverlay() {
  overlay.style.display = 'none';
}

nightClck.addEventListener("click", function () {
    overlay.style.display = 'block';
    sunClck.style.visibility = 'visible';
    nightClck.style.visibility = 'hidden';
    sunClck.style.zIndex = '1';
    
    // nightClck.src = 'sun.png';
    // nightClck.alt = 'Sun';
})

sunClck.addEventListener("click", function () {
    overlay.style.display = 'none';
    sunClck.style.visibility = 'hidden';
    
    nightClck.style.visibility = 'visible';

    // sunClck.src = 'night.png';
    // sunClck.alt = 'Night';
})