window.onload = function () {
    const button = document.getElementById("button1");
    const numberTitle = document.getElementById("number");
    var number = 100;
    numberTitle.innerHTML = number;
    button.addEventListener("click", myFunction);

    function myFunction() {
        number--;
        numberTitle.innerHTML = number;

    }
}