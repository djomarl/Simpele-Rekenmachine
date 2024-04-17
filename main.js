const inputvak = document.getElementById("inputvak");
const checkLightOfDark = document.getElementById("checkLightOfDark");
var thema = "";

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
  localStorage.removeItem("opgeslagenInputValue");
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
    localStorage.removeItem("opgeslagenInputValue");
  }
}

// Wanneer de pagina opnieuw word geladen of word geladen.
window.onload = function () {
  if (localStorage.getItem("opgeslagenInputValue") != null) {
    inputvak.value = localStorage.getItem("opgeslagenInputValue");
  }
  
  if (localStorage.getItem("thema") == "dark") {
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("darkmodeText").style.color = "white";
    document.getElementById("checkLightOfDark").checked = true;
  }
  else {
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("darkmodeText").style.color = "black";
    document.getElementById("checkLightOfDark").checked = false;
  }
}

function checkboxChanged(v) {
    if (v.checked == true) {
      console.log(v.checked);
      document.getElementById("body").style.backgroundColor = "black";
      document.getElementById("darkmodeText").style.color = "white";
      thema = "dark";
      localStorage.setItem("thema", thema)
    }
    else {
      console.log(v.checked);
      document.getElementById("body").style.backgroundColor = "white";
      document.getElementById("darkmodeText").style.color = "black";
      thema = "light";
      localStorage.setItem("thema", thema)
    }
}