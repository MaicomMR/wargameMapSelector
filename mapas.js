function colorador() {


    if (estado == false) {
        mapa.style.backgroundColor = "#e84040";
        mapa.style.color = "#fca4a4";
        estado = true;

    }
    else {
        mapa.style.backgroundColor = "#a2e293";
        mapa.style.color = "#000000";
        estado = false;

    }
    return estado;
}

var mapaDeathRow = document.getElementById('DeathRow');
var DeathRowClicado = false;
mapaDeathRow.onclick = function(){
    colorador(mapa = mapaDeathRow, estado = DeathRowClicado);
    DeathRowClicado = estado;
}

var HellSmallPlace = document.getElementById('HellSmallPlace');
var HellSmallPlaceCLicado = false;
HellSmallPlace.onclick = function(){
    colorador(mapa = HellSmallPlace, estado = HellSmallPlaceCLicado);
    HellSmallPlaceCLicado = estado;
}

var mudFight = document.getElementById('mudFight');
var mudFightClicado = false;
mudFight.onclick = function(){
    colorador(mapa = mudFight, estado = mudFightClicado);
    mudFightClicado = estado;
}

var nuclearWinter = document.getElementById('nuclearWinter');
var nuclearWinterClicado = false;
nuclearWinter.onclick = function(){
    colorador(mapa = nuclearWinter, estado = nuclearWinterClicado);
    nuclearWinterClicado = estado;
}

var paddyField = document.getElementById('paddyField');
var paddyFieldClicado = false;
paddyField.onclick = function(){
    colorador(mapa = paddyField, estado = paddyFieldClicado);
    paddyFieldClicado = estado;
}

var plunjingValley = document.getElementById('plunjingValley');
var plunjingValleyClicado = false;
plunjingValley.onclick = function(){
    colorador(mapa = plunjingValley, estado = plunjingValleyClicado);
    plunjingValleyClicado = estado;
}

var punchbowl = document.getElementById('punchbowl');
var punchbowlClicado = false;
punchbowl.onclick = function(){
    colorador(mapa = punchbowl, estado = punchbowlClicado);
    punchbowlClicado = estado;
}

var strait = document.getElementById('strait');
var straitClicado = false;
strait.onclick = function(){
    colorador(mapa = strait, estado = straitClicado);
    straitClicado = estado;
}

var wonsanHarbourNav = document.getElementById('wonsanHarbourNav');
var wonsanHarbourNavClicado = false;
wonsanHarbourNav.onclick = function(){
    colorador(mapa = wonsanHarbourNav, estado = wonsanHarbourNavClicado);
    wonsanHarbourNavClicado = estado;
}

var wonsanHarbour = document.getElementById('wonsanHarbour');
var wonsanHarbourClicado = false;
wonsanHarbour.onclick = function(){
    colorador(mapa = wonsanHarbour, estado = wonsanHarbourClicado);
    wonsanHarbourClicado = estado;
}

var tropicThunder = document.getElementById('tropicThunder');
var tropicThunderClicado = false;
tropicThunder.onclick = function(){
    colorador(mapa = tropicThunder, estado = tropicThunderClicado);
    tropicThunderClicado = estado;
}