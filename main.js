const inputvak = document.getElementById("inputvak");
let NetUitGerekent = false;

function voegAanDisplay(input) {
  if (NetUitGerekent == true) {
    inputvak.value = "";
    inputvak.value += input;
    NetUitGerekent = false;
  } else {
    inputvak.value += input;
  }
}

function clearDisplay() {
  inputvak.value = "";
}

function uitrekenen() {
  try {
    inputvak.value = "Ant: " + eval(inputvak.value);
    NetUitGerekent = true;
  } catch (error) {
    inputvak.value = "Error";
    NetUitGerekent = true;
  }
}
