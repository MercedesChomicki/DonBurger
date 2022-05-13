const texto = document.querySelector('.actualizar-texto');
const code = document.querySelector('#code');
const input = document.querySelector('.userInput input');
const btnValidar = document.querySelector('#btn-validar');

texto.addEventListener('click', ()=>{
    code.textContent = createCaptcha();
});
window.addEventListener('load', ()=>{
    code.textContent = createCaptcha();
});
function createCaptcha() {
    let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 
    'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', 
    '3', '4', '5', '6', '7', '8', '9'];
    let a = letras[Math.floor(Math.random() * letras.length)];
    let b = letras[Math.floor(Math.random() * letras.length)];
    let c = letras[Math.floor(Math.random() * letras.length)];
    let d = letras[Math.floor(Math.random() * letras.length)];
    let e = letras[Math.floor(Math.random() * letras.length)];
    let f = letras[Math.floor(Math.random() * letras.length)];
    let g = letras[Math.floor(Math.random() * letras.length)];
    let code = a + b + c + d + e + f + g ;
    return code;
}

btnValidar.addEventListener('click', () => {
    let validar = input.value;
    if(validar == ''){
        document.getElementById("vacio").style.display = 'block';
        document.getElementById("validado").style.display = 'none';
        document.getElementById("invalido").style.display = 'none';
    }
    else if(validar === code.textContent){
        document.getElementById("vacio").style.display = 'none';
        document.getElementById("validado").style.display = 'block';
        document.getElementById("invalido").style.display = 'none';
    }
    else{
        document.getElementById("vacio").style.display = 'none';
        document.getElementById("validado").style.display = 'none';
        document.getElementById("invalido").style.display = 'block';
    }
})