function verificar(texto) {

    if (texto.trim() === '') {

        alert("XXX")

        return false;
        
    }

    const soloLetras = /^[a-z \s\n]+$/; // Expresión regular para aceptar solo letras

    if (soloLetras.test(texto)) { // Verificar si la cadena solo contiene letras
        
        return true;
        
    }else{

        alert("XXX")

        return false;

    }

}

function cambiarClaseDiv() {

    var div = document.getElementById("copiar")
    div.classList.add("copiar-on"); // Agrega la nueva clase

}

function encrypt(){

    let text=document.getElementById("texto").value;

    if(verificar(text)==true){    

        const replacements = {
        
            a: "ai",
            e: "enter",
            i: "imes",
            o: "ober",
            u: "ufat"
    
        };
          
        const regex = new RegExp(Object.keys(replacements).join("|"), "g");
        
        const resultado = text.replace(regex, match => replacements[match]);
        cambiarClaseDiv();
        console.log(resultado);
        document.getElementById("display").innerHTML=`<textarea id="texto-a-copiar" class="texto-a-copiar" readonly>${resultado}</textarea>`;
        document.getElementById("copiar").innerHTML=`<button class="btn-copiar" onclick="copiarAlPortapapeles('texto-a-copiar')">Copiar</button>`;
    
    }

}  

function decrypt(){

    let text=document.getElementById("texto").value;

    if(verificar(text)==true){
        
        const replacements = {
        
            ai: "a",
            enter: "e",
            imes: "i",
            ober: "o",
            ufat: "u"
    
        };
          
        const regex = new RegExp(Object.keys(replacements).join("|"), "g");
        
        const resultado = text.replace(regex, match => replacements[match]);
        cambiarClaseDiv();
        document.getElementById("display").innerHTML=`<textarea id="texto-a-copiar" class="texto-a-copiar" readonly>${resultado}</textarea>`;
        document.getElementById("copiar").innerHTML=`<button class="btn-copiar" onclick="copiarAlPortapapeles('texto-a-copiar')">Copiar</button>`;
    
    }

}  

function copiarAlPortapapeles(id) {

    const elemento = document.getElementById(id);
    const contenido = elemento.value;
    const temporal = document.createElement('textarea');
    temporal.value = contenido;
    document.body.appendChild(temporal);
    temporal.select();
    document.execCommand('copy');
    document.body.removeChild(temporal);

}

const btnSwitch = document.querySelector('#switch');

    btnSwitch.addEventListener('click', () => {

        document.body.classList.toggle('dark');
        btnSwitch.classList.toggle('active');
    
    }
);