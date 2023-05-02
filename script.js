//BOTONES
const botonEncriptar = document.getElementById("encriptarbtn");
const botonDesencriptar = document.getElementById("desencriptarbtn");
const botonCopiar = document.getElementById("copiarbtn");

//RESULTADO
var imgExiste = true;
const cajaResultado = document.getElementById("resultado");
const cajaResultadoImg = cajaResultado.querySelector("div");
const imagen = document.getElementById("imagen");
var texto = document.getElementById("texto-principal-resultado");
var texto2 = document.getElementById("texto-secundario-resultado");

botonEncriptar.addEventListener('click', () => {
    var textoInput = document.getElementById("textoinput");

    if(textoInput.value.length <= 0){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Ingrese el texto a encriptar',            
            showConfirmButton: false,
            toast: true,
            timer: 1500,
            timerProgressBar: true
          }); 
    }else{
        estilosResultado();    
        imgExiste = false;
        texto.textContent = encriptar(textoInput);
    }
});

botonDesencriptar.addEventListener('click', () => {
    var textoInput = document.getElementById("textoinput");

    if(textoInput.value.length <= 0){
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: 'Ingrese el texto a desencriptar',            
            showConfirmButton: false,
            toast: true,
            timer: 1500,
            timerProgressBar: true
          }); 
    }else{
        estilosResultado();    
        imgExiste = false;
        texto.textContent = desencriptar(textoInput);
    }
});

botonCopiar.addEventListener('click', () => {
    copiar();
})

function encriptar(textoInput){
    const texto = textoInput.value;
    var textoResultado = "";
    //a -> ai
    //e -> enter
    //i -> imes
    //o -> ober
    //u -> ufat

    for(i = 0; i<texto.length; i++){
        switch(texto[i]){
            case "a":
                textoResultado = textoResultado + "ai";
                break;
            case "e":
                textoResultado = textoResultado + "enter";
                break;
            case "i":
                textoResultado = textoResultado + "imes";
                break;
            case "o":
                textoResultado = textoResultado + "ober";
                break;
            case "u":
                textoResultado = textoResultado + "ufat";
                break;
            default:
                textoResultado = textoResultado + texto[i];
        }
    }

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se encriptó correctamente',        
        showConfirmButton: false,
        toast: true,
        timer: 1000,
        timerProgressBar: true
      }); 


    return textoResultado;
}

function desencriptar(textoInput){    
    const texto = textoInput.value;    
    var textoResultado = "";
    //ai -> a
    //enter -> e
    //imes -> i
    //ober -> o
    //ufat -> u

    //gaitober

    for(i = 0; i<texto.length; i++){
        switch(texto[i]){
            case "a":
                if(texto[i+1] == "i"){
                    textoResultado = textoResultado + "a";    
                    i = i + 1;                    
                    break;
                }else{
                    textoResultado = textoResultado + texto[i];
                    break;
                }                
            case "e":
                if(texto.substring(i, i+5) == "enter"){
                    textoResultado = textoResultado + "e";
                    i = i + 4;    
                    break;
                }else{
                    textoResultado = textoResultado + texto[i];
                    break;
                }
            case "i":
                if(texto.substring(i, i+4) == "imes"){
                    textoResultado = textoResultado + "i";
                    i = i + 3;    
                    break;
                }else{
                    textoResultado = textoResultado + texto[i];
                    break;
                }
            case "o":
                if(texto.substring(i, i+4) == "ober"){
                    textoResultado = textoResultado + "o";
                    i = i + 3;    
                    break;
                }else{
                    textoResultado = textoResultado + texto[i];
                    break;
                }
            case "u":
                if(texto.substring(i, i+4) == "ufat"){
                    textoResultado = textoResultado + "u";
                    i = i + 3;    
                    break;
                }else{
                    textoResultado = textoResultado + texto[i];
                    break;
                }
            default:
                textoResultado = textoResultado + texto[i];
        }
    }

    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se desencriptó correctamente',        
        showConfirmButton: false,
        toast: true,
        timer: 1000,
        timerProgressBar: true
      }); 

    return textoResultado;
}

function copiar(){
    const textoResultado = texto.textContent;
    navigator.clipboard.writeText(textoResultado); 
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se copio correctamente',        
        showConfirmButton: false,
        toast: true,
        timer: 1500,
        timerProgressBar: true
      }); 
}

function estilosResultado(){        
    cajaResultado.style.justifyContent = "space-between"
    cajaResultado.style.textAlign = "center";
    if(imgExiste){
        cajaResultado.removeChild(cajaResultadoImg);    
    }
    texto2.style.display = "none";
    texto.style.textAlign = "start";
    botonCopiar.style.display = "inline";
}

