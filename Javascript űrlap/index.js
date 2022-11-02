function kattintas() {
    document.getElementById("neve2").value = document.getElementById("neve").value;
    document.getElementById("cime2").value = document.getElementById("cime").value;
    document.getElementById("telefonszama2").value = document.getElementById("telefonszama").value;
}

function focusFunction1() {
    document.getElementById("neve").style.background = "blue";
}
  
function blurFunction1() {
    document.getElementById("neve").style.background = "white";
}

function focusFunction2() {
    document.getElementById("cime").style.background = "blue";
}

function blurFunction2() {
    document.getElementById("cime").style.background = "white";
}

function focusFunction3() {
    document.getElementById("telefonszama").style.background = "blue";
}

function blurFunction3() {
    document.getElementById("telefonszama").style.background = "white";
}