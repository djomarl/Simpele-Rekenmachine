const inputvak = document.getElementById("inputvak");
let NetUitGerekent = false;

function voegAanDisplay(input) {
  if (NetUitGerekent == true) {
    inputvak.value = "";
    inputvak.value += input;
    localStorage.setItem("opgeslagenInputValue", inputvak.value);
    NetUitGerekent = false;
  } else {
    inputvak.value += input;
    localStorage.setItem("opgeslagenInputValue", inputvak.value);
  }
}

function clearDisplay() {
  inputvak.value = "";
  localStorage.clear();
}

function uitrekenen() {
  try {
    inputvak.value = "Ant: " + eval(inputvak.value);
    localStorage.setItem("opgeslagenInputValue", inputvak.value);
    NetUitGerekent = true;
  } catch (error) {
    alert(error);
    inputvak.value = "Error";
    NetUitGerekent = true;
    localStorage.clear();
  }
}

window.onload = function () {
  if (localStorage.getItem("opgeslagenInputValue") != null) {
    inputvak.value = localStorage.getItem("opgeslagenInputValue");
  }
}