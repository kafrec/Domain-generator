/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let nombres = ["freya", "luna", "yinyang", "zayen", "tutu", "stich"];
  let adjetivos = ["genial", "linda", "lindo", "fuerte", "grande", "regalon"];
  let otros = [".com", ".cl", ".es", ".org", ".arg", ".col"];

  let nuevoDominio = "";
  for (let i = 0; i < nombres.length; i++) {
    for (let j = 0; j < adjetivos.length; j++) {
      for (let k = 0; k < otros.length; k++) {
        //console.log(nombres[i] + adjetivos[j] + otros[k]);
        nuevoDominio = nombres[i] + adjetivos[j] + otros[j];
      }
    }
  }

  document.getElementById("respuesta").innerHTML = nuevoDominio;

  console.log("Hello Rigo from the console!");
};
