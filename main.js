let url = "https://fly.sportsdata.io/v3/mma/scores/json/";
let key = "?key=a422a6ac8b9e40268d59c9fd08a10fdb";

function obtenerPeleas() {
    let urlPelea = url + "Schedule/UFC/2021";
    return new Promise(function (resolve, reject) {
        $.get(urlPelea + key, { crossDomain: true }, function (data) {
            resolve(data);
        }).fail(function (error) {
            reject(error);
        });

    });
}

function obtenerPeleador(id) {
    let urlPeleador = url + "Fighter/";
    return new Promise(function (resolve, reject) {
        $.get(urlPeleador + id + key, { crossDomain: true }, function (data) {
            resolve(data);
        }).fail(function (error) {
            reject(error);
        });

    });
}

const pesado1 = document.getElementById("pesado1");
const pesado2 = document.getElementById("pesado2");
const pesado3 = document.getElementById("pesado3");
const pesado4 = document.getElementById("pesado4");
const pesado5 = document.getElementById("pesado5");
const pesado6 = document.getElementById("pesado6");
const pesado7 = document.getElementById("pesado7");
const pesado8 = document.getElementById("pesado8");
const pesado9 = document.getElementById("pesado9");
const pesado10 = document.getElementById("pesado10");

const semi1 = document.getElementById("semi1");
const semi2 = document.getElementById("semi2");
const semi3 = document.getElementById("semi3");
const semi4 = document.getElementById("semi4");
const semi5 = document.getElementById("semi5");
const semi6 = document.getElementById("semi6");
const semi7 = document.getElementById("semi7");
const semi8 = document.getElementById("semi8");
const semi9 = document.getElementById("semi9");
const semi10 = document.getElementById("semi10");


const medio1 = document.getElementById("medio1");
const medio2 = document.getElementById("medio2");
const medio3 = document.getElementById("medio3");
const medio4 = document.getElementById("medio4");
const medio5 = document.getElementById("medio5");
const medio6 = document.getElementById("medio6");
const medio7 = document.getElementById("medio7");
const medio8 = document.getElementById("medio8");
const medio9 = document.getElementById("medio9");
const medio10 = document.getElementById("medio10");


const welter1 = document.getElementById("welter1");
const welter2 = document.getElementById("welter2");
const welter3 = document.getElementById("welter3");
const welter4 = document.getElementById("welter4");
const welter5 = document.getElementById("welter5");
const welter6 = document.getElementById("welter6");
const welter7 = document.getElementById("welter7");
const welter8 = document.getElementById("welter8");
const welter9 = document.getElementById("welter9");
const welter10 = document.getElementById("welter10");


const ligero1 = document.getElementById("ligero1");
const ligero2 = document.getElementById("ligero2");
const ligero3 = document.getElementById("ligero3");
const ligero4 = document.getElementById("ligero4");
const ligero5 = document.getElementById("ligero5");
const ligero6 = document.getElementById("ligero6");
const ligero7 = document.getElementById("ligero7");
const ligero8 = document.getElementById("ligero8");
const ligero9 = document.getElementById("ligero9");
const ligero10 = document.getElementById("ligero10");


const pluma1 = document.getElementById("pluma1");
const pluma2 = document.getElementById("pluma2");
const pluma3 = document.getElementById("pluma3");
const pluma4 = document.getElementById("pluma4");
const pluma5 = document.getElementById("pluma5");
const pluma6 = document.getElementById("pluma6");
const pluma7 = document.getElementById("pluma7");
const pluma8 = document.getElementById("pluma8");
const pluma9 = document.getElementById("pluma9");
const pluma10 = document.getElementById("pluma10");


const gallo1 = document.getElementById("gallo1");
const gallo2 = document.getElementById("gallo2");
const gallo3 = document.getElementById("gallo3");
const gallo4 = document.getElementById("gallo4");
const gallo5 = document.getElementById("gallo5");
const gallo6 = document.getElementById("gallo6");
const gallo7 = document.getElementById("gallo7");
const gallo8 = document.getElementById("gallo8");
const gallo9 = document.getElementById("gallo9");
const gallo10 = document.getElementById("gallo10");


const mosca1 = document.getElementById("mosca1");
const mosca2 = document.getElementById("mosca2");
const mosca3 = document.getElementById("mosca3");
const mosca4 = document.getElementById("mosca4");
const mosca5 = document.getElementById("mosca5");
const mosca6 = document.getElementById("mosca6");
const mosca7 = document.getElementById("mosca7");
const mosca8 = document.getElementById("mosca8");
const mosca9 = document.getElementById("mosca9");
const mosca10 = document.getElementById("mosca10");


const paja1 = document.getElementById("paja1");
const paja2 = document.getElementById("paja2");
const paja3 = document.getElementById("paja3");
const paja4 = document.getElementById("paja4");
const paja5 = document.getElementById("paja5");
const paja6 = document.getElementById("paja6");
const paja7 = document.getElementById("paja7");
const paja8 = document.getElementById("paja8");
const paja9 = document.getElementById("paja9");
const paja10 = document.getElementById("paja10");


const galloF1 = document.getElementById("galloF1");
const galloF2 = document.getElementById("galloF2");
const galloF3 = document.getElementById("galloF3");
const galloF4 = document.getElementById("galloF4");
const galloF5 = document.getElementById("galloF5");
const galloF6 = document.getElementById("galloF6");
const galloF7 = document.getElementById("galloF7");
const galloF8 = document.getElementById("galloF8");
const galloF9 = document.getElementById("galloF9");
const galloF10 = document.getElementById("galloF10");


const moscaF1 = document.getElementById("moscaF1");
const moscaF2 = document.getElementById("moscaF2");
const moscaF3 = document.getElementById("moscaF3");
const moscaF4 = document.getElementById("moscaF4");
const moscaF5 = document.getElementById("moscaF5");
const moscaF6 = document.getElementById("moscaF6");
const moscaF7 = document.getElementById("moscaF7");
const moscaF8 = document.getElementById("moscaF8");
const moscaF9 = document.getElementById("moscaF9");
const moscaF10 = document.getElementById("moscaF10");


const pajaF1 = document.getElementById("pajaF1");
const pajaF2 = document.getElementById("pajaF2");
const pajaF3 = document.getElementById("pajaF3");
const pajaF4 = document.getElementById("pajaF4");
const pajaF5 = document.getElementById("pajaF5");
const pajaF6 = document.getElementById("pajaF6");
const pajaF7 = document.getElementById("pajaF7");
const pajaF8 = document.getElementById("pajaF8");
const pajaF9 = document.getElementById("pajaF9");
const paja1F0 = document.getElementById("pajaF10");



async function informacionPeleador(elemento, id) {
    await obtenerPeleador(id)
        .then(function ({ FirstName, LastName, Nickname, WeightClass, Height, Weight,  Wins, Losses, Draws, TechnicalKnockouts,  Submissions }) {
            elemento.insertAdjacentHTML('beforeend', "El campeón es " + FirstName + " " + LastName + (Nickname!= null ? ", su apodo es " +Nickname:" " ) + ", pertenece a la categoria " + WeightClass + ", con un peso de " + Weight + "lb y una altura de " + redondear((Height / 39.370),2) + "m, ha tenido  " + Wins + " victorias, de las cuales " + TechnicalKnockouts + " han sido por K.O,  " + Submissions + " han sido por sumisión, ha empatado " + Draws + ", y perdido " + Losses + " veces");

        }).catch(function (error) {
            console.log(error);
        });
        
}

async function informacionTop(elemento, id) {
    await obtenerPeleador(id)
        .then(function ({ FirstName, LastName }) {
            elemento.insertAdjacentHTML('beforeend', FirstName + " " + LastName);

        })
        .catch(function (error) {
            console.log(error);
        });

}

function redondear(numero, digitos){
    let base = Math.pow(10, digitos);
    let entero = Math.round(numero * base);
    return entero / base;
}

// Campeones 
informacionPeleador(camp1, 140000215);
informacionPeleador(camp2, 140000086);
informacionPeleador(camp3, 140000347);
informacionPeleador(camp4, 140000145);
informacionPeleador(camp5, 140000074);
informacionPeleador(camp6, 140000123);
informacionPeleador(camp7, 140000098);
informacionPeleador(camp8, 140000141);
informacionPeleador(camp9, 140000402);
informacionPeleador(camp10, 140000446);
// Top 10 Pesado
informacionTop(pesado1, 140000558);
informacionTop(pesado2, 140000173);
informacionTop(pesado3, 140000218);
informacionTop(pesado4, 140000534);
informacionTop(pesado5, 140000647);
informacionTop(pesado6, 140000034);
informacionTop(pesado7, 140000271);
informacionTop(pesado8, 140000323);
informacionTop(pesado9, 140000299);
informacionTop(pesado10, 140000992);
// Top 10 Semi
informacionTop(semi1, 140000015);
informacionTop(semi2, 140000387);
informacionTop(semi3, 140000193);
informacionTop(semi4, 140000124);
informacionTop(semi5, 140000918);
informacionTop(semi6, 140000147);
informacionTop(semi7, 140000113);
informacionTop(semi8, 140000192);
informacionTop(semi9, 140000261);
informacionTop(semi10, 140000043);
// Top 10 Medio
informacionTop(medio1, 140000630);
informacionTop(medio2, 140000556);
informacionTop(medio3, 140000348);
informacionTop(medio4, 140000329);
informacionTop(medio5, 140000197);
informacionTop(medio6, 140000467);
informacionTop(medio7, 140000245);
informacionTop(medio8, 140000265);
informacionTop(medio9, 140000604);
informacionTop(medio10, 140000229);
// Top 10 Welter
informacionTop(welter1, 140000521);
informacionTop(welter2, 140000526);
informacionTop(welter3, 140000195);
informacionTop(welter4, 140000196);
informacionTop(welter5, 140000221);
informacionTop(welter6, 140000089);
informacionTop(welter7, 140000444);
informacionTop(welter8, 140000047);
informacionTop(welter9, 140000752);
informacionTop(welter10, 140000144);
// Top ligero
informacionTop(ligero1, 140000266);
informacionTop(ligero2, 140000247);
informacionTop(ligero3, 140000045);
informacionTop(ligero4, 140001095);
informacionTop(ligero5, 140000401);
informacionTop(ligero6, 140000867);
informacionTop(ligero7, 140000368);
informacionTop(ligero8, 140000487);
informacionTop(ligero9, 140000165);
informacionTop(ligero10, 140000096);
// Top 10 Pluma
informacionTop(pluma1, 140000267);
informacionTop(pluma2, 140000712);
informacionTop(pluma3, 140000137);
informacionTop(pluma4, 140000615);
informacionTop(pluma5, 140000421);
informacionTop(pluma6, 140000396);
informacionTop(pluma7, 140000243);
informacionTop(pluma8, 140000178);
informacionTop(pluma9, 140000136);
informacionTop(pluma10, 140000024);
// Top 10 Gallo
informacionTop(gallo1, 140000116);
informacionTop(gallo2, 140000007);
informacionTop(gallo3, 140000668);
informacionTop(gallo4, 140000139);
informacionTop(gallo5, 140000049);
informacionTop(gallo6, 140000052);
informacionTop(gallo7, 140000504);
informacionTop(gallo8, 140000138);
informacionTop(gallo9, 140000907);
informacionTop(gallo10, 140000051);
// Top 10 Mosca
informacionTop(mosca1, 140000613);
informacionTop(mosca2, 140000614);
informacionTop(mosca3, 140000258);
informacionTop(mosca4, 140000222);
informacionTop(mosca5, 140000019);
informacionTop(mosca6, 140000910);
informacionTop(mosca7, 140000059);
informacionTop(mosca8, 140000152);
informacionTop(mosca9, 140000028);
informacionTop(mosca10, 140000632);
// Top 10 Pluma F
// Top 10 Gallo F
informacionTop(galloF1, 140000471);
informacionTop(galloF2, 140000447);
informacionTop(galloF3, 140000359);
informacionTop(galloF4, 140000345);
informacionTop(galloF5, 140000159);
informacionTop(galloF6, 140000462);
informacionTop(galloF7, 140000710);
informacionTop(galloF8, 140000701);
informacionTop(galloF9, 140000128);
informacionTop(galloF10, 140000380);
// Top 10 Mosca F
informacionTop(moscaF1, 140000349);
informacionTop(moscaF2, 140000389);
informacionTop(moscaF3, 140000517);
informacionTop(moscaF4, 140000205);
informacionTop(moscaF5, 140000094);
informacionTop(moscaF6, 140000011);
informacionTop(moscaF7, 140000333);
informacionTop(moscaF8, 140000403);
informacionTop(moscaF9, 140000281);
informacionTop(moscaF10, 140000397);
// Top 10 Paja F
informacionTop(pajaF1, 140000350);
informacionTop(pajaF2, 140000634);
informacionTop(pajaF3, 140000394);
informacionTop(pajaF4, 140000296);
informacionTop(pajaF5, 140000398);
informacionTop(pajaF6, 140000235);
informacionTop(pajaF7, 140000441);
informacionTop(pajaF8, 140000240);
informacionTop(pajaF9, 140000140);
informacionTop(pajaF10, 140000432);
