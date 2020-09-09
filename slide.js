function preload(){
    imgs=Array('f1.png','f2.png','f3.png','f4.png','f5.png');
    imgQtde=imgs.length;
    for (i = 0; i<imgQtde;i++) {
        var preloadimg=new Image();
        preloadimg.src=imgs[i];
    }
}
function iniciaSlider(){
    preload();
    max=5;
    min=1;
    fotoIndice=min;
    trans=true;
    carregaFoto("f1.png");
    document.getElementById("moldura").addEventListener("transitionend",fimTrans);
    timer=setInterval(trocaFoto, 5000);
}
function trocaFoto(){
    trans=false;
    fotoIndice++;
    if(fotoIndice>max) {
        fotoIndice=min;
    }
    carregaFoto("f"+fotoIndice+".png");
}
function fimTrans(){
    trans=true;
}
function carregaFoto (foto){
    document.getElementById("moldura").style.backgroundImage="URL("+foto+")";
}
function muda(direcao){
    clearInterval(timer);
    if(trans){
        trans=false;
        fotoIndice+=direcao;
        if(fotoIndice>max){
        fotoIndice=min;
        }
        if(fotoIndice<min){
            fotoIndice=max;
        }
    carregaFoto("f"+fotoIndice+".png");
    }
    timer=setInterval(trocaFoto, 5000);
}
