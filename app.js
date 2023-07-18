// let gif = document.getElementById("gif");


// gif.onclick = function () {
//     scrollTo(0, 1100);
//     alert("Src - TG: @arnolds_timofei4ik");
// }


let clck = document.getElementById('clck');
let hide = document.getElementById('hide');
let isVisible = false;


clck.addEventListener('click', function() {

    if (isVisible) {
        hide.style.display = 'none';

        isVisible = false;
    } else {
        hide.style.display = 'block';

        isVisible = true;
    }
});