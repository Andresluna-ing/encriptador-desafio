let textoEncriptado = false;
let textoOriginal = "";

function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let duda = document.getElementById("duda");

  if (texto.length < 3) {
      duda.src = "./img/duda.jpeg";
      tituloMensaje.textContent = "Texto demasiado corto";
      parrafo.textContent = "Por favor, ingresa un texto con al menos 3 caracteres.";
      swal("Ooops!", "El texto es demasiado corto", "warning");
      return;
  }

  if (/[^a-zA-Z\s]/.test(texto)) {
      duda.src = "./img/duda.jpeg";
      tituloMensaje.textContent = "Caracteres no permitidos";
      parrafo.textContent = "El texto solo debe contener letras y espacios.";
      swal("Ooops!", "Caracteres no permitidos en el texto", "warning");
      return;
  }

  if (textoEncriptado && texto === textoOriginal) {
      duda.src = "./img/duda.jpeg";
      tituloMensaje.textContent = "Texto ya encriptado";
      parrafo.textContent = "El texto ya ha sido encriptado. Intente con otro texto.";
      swal("Ooops!", "El texto ya ha sido encriptado", "warning");
      return;
  }

  let textoCifrado = texto
    .replace(/e/gi, "012331")
    .replace(/i/gi, "999232")
    .replace(/a/gi, "193042")
    .replace(/o/gi, "194942")
    .replace(/u/gi, "0009420");

  if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
      parrafo.textContent = "";
      duda.src = "./img/encriptado.png";
      textoEncriptado = true;
      textoOriginal = texto;
  } else {
      duda.src = "./img/desencriptado.jpg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  let parrafo = document.getElementById("parrafo");
  let duda = document.getElementById("duda");

  let textoDescifrado = texto
    .replace(/012331/gi, "e")
    .replace(/999232/gi, "i")
    .replace(/193042/gi, "a")
    .replace(/194942/gi, "o")
    .replace(/0009420/gi, "u");

  if (texto.length != 0) {
      document.getElementById("texto").value = textoDescifrado;
      tituloMensaje.textContent = "Texto desencriptado con éxito";
      parrafo.textContent = "";
      duda.src = "./img/desencriptado.jpg";
      textoEncriptado = false;
      textoOriginal = "";
  } else {
      duda.src = "./img/duda.jpeg";
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      swal("Ooops!", "Debes ingresar un texto", "warning");
  }
}
