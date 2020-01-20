const home = document.querySelector('#ho');
const whatzapp = document.querySelector('#wa');
const zpotify = document.querySelector('#zpo');

home.addEventListener('click', cargahome);
whatzapp.addEventListener('click', cargawhatzapp);
zpotify.addEventListener('click', cargazpotify);

function cargahome (){
    const pagDinamica = document.querySelector('#pagina-dinamica');
    pagDinamica.setAttribute('src','./zafary.png');
    
}

function cargawhatzapp (){
    const pagDinamica = document.querySelector('#pagina-dinamica');
    pagDinamica.setAttribute('src','./indexwa.html');
    
}

function cargazpotify (){
    const pagDinamica = document.querySelector('#pagina-dinamica');
    pagDinamica.setAttribute('src','./zpotify.html');
    
}