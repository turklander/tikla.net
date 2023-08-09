window.onload = function () {
    const button = document.getElementById("button1");
    const numberTitle = document.getElementById("number");
    var number = 10;
    numberTitle.innerHTML = number;
    button.addEventListener("click", myFunction);

    function myFunction() {
        if (number == 0) {
            numberTitle.innerHTML = "TEBRIK EDERIM KAZANDINIZ"
        } else if (number == -1) {
            return
        } else {
            number--;
            numberTitle.innerHTML = number;
        }
    }
}