const textArea = document.querySelector(".text-area");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const mensaje = document.querySelector(".mensaje");
const ningun = document.querySelector(".ningun");
const ningunTexto = document.querySelector(".ningun-texto");
const copiar = document.querySelector(".copiar");
const informacion = document.querySelector(".informacion");

function resetearElementos() {
  mensaje.value = "";
  ningun.style.display = "block";
  ningunTexto.style.display = "block";
  copiar.style.display = "none";
  mensaje.style.backgroundImage = "url('imagenes/Muñeco.png')";
}
function resetearElementosResponsive(){
  mensaje.value = "";
  mensaje.style.marginBottom = "0px";
  mensaje.style.backgroundImage = "none";
  copiar.style.display = "none";
  ningun.style.display = "block";
  ningunTexto.style.display = "block";
}
function quitarElementos() {
  ningun.style.display = "none";
  ningunTexto.style.display = "none";
  copiar.style.display = "block";
  mensaje.style.backgroundImage = "none";
  informacion.style.color = "#495057";
}
function quitarElementosResponsive(){
  ningun.style.display = "none";
  ningunTexto.style.display = "none";
  mensaje.style.backgroundImage = "none";
  copiar.style.display = "block";
}
function conditionReset(){
  if (window.matchMedia("(max-width: 412px)").matches) {
    resetearElementosResponsive()
    mensaje.style.height = "140px";
  }else if (window.matchMedia("(max-width: 768px)").matches) {
    resetearElementosResponsive();
    mensaje.style.height = "103px";
  }else{
    resetearElementos();
  }
}
function conditionRemove(){
  if (window.matchMedia("(max-width: 412px)").matches) {
    quitarElementosResponsive();
    mensaje.style.height = "300px";
    mensaje.style.marginBottom = "20px";
  }else if (window.matchMedia("(max-width: 768px)").matches) {
    quitarElementosResponsive();
    mensaje.style.height = "343px";
    mensaje.style.marginBottom = "40px";
  }
  else{
    quitarElementos();
  }
}

btnEncriptar.addEventListener("click", () => {
  if (textArea.value === "") {
    informacion.style.color = "#495057";
    conditionReset();
    
  } else if (!/^([a-z\s,\+ñd$@$!%*?&])+$/.test(textArea.value)) {
    informacion.style.color = "red";
    conditionReset();
    
  } else {
    informacion.style.color = "#495057";
    const text = textArea.value;
    const mapa = {a:"ai",e:"enter",i:"imes",o:"ober",u:"ufat"};
    resultado = text.replace(/a|e|i|o|u/gm,(matched)=> {return mapa[matched];}); 
    mensaje.value = resultado;
    conditionRemove();
  }
});

btnDesencriptar.addEventListener("click", () => {
  if (textArea.value === "") {
    informacion.style.color = "#495057";
    conditionReset();
  }else if (!/^([a-z\s,\ñd$@$!%*?&])+$/.test(textArea.value)) {
      informacion.style.color = "red";
      conditionReset();
  } else {
    informacion.style.color = "#495057";
    const text = textArea.value;
    const mapa = {ai:"a",enter:"e",imes:"i",ober:"o",ufat:"u"}; 
    respuesta = text.replace(/enter|imes|ai|ober|ufat/gm,(matched) => {return mapa[matched];});
    mensaje.value = respuesta;
    conditionRemove();
  }
});

const copyButton = document.querySelector(".copiar");
copyButton.addEventListener("click", () => {
  mensaje.select();
  document.execCommand("copy");
  console.log("Texto copiado al portapapeles");
});




