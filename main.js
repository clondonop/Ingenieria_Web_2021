let url="https://fly.sportsdata.io/v3/mma/scores/json/";
let key="?key=a422a6ac8b9e40268d59c9fd08a10fdb";

function obtenerPeleas() {
    let urlPelea = url+"UFC/2021";
    return new Promise(function(resolve,reject) {
        $.get(urlPeleador+id+key, { crossDomain: true }, function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
        
    });
}

function obtenerPeleador(id){
    let urlPeleador = url+"Fighter/";
    return new Promise(function(resolve,reject) {
        $.get(urlPeleador+id+key, { crossDomain: true }, function(data){
            resolve(data);
        }).fail(function(error){
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


const gallo1f = document.getElementById("gallo1f");
const gallo2f = document.getElementById("gallo2f");
const gallo3f = document.getElementById("gallo3f");
const gallo4f = document.getElementById("gallo4f");
const gallo5f = document.getElementById("gallo5f");
const gallo6f = document.getElementById("gallo6f");
const gallo7f = document.getElementById("gallo7f");
const gallo8f = document.getElementById("gallo8f");
const gallo9f = document.getElementById("gallo9f");
const gallo10f = document.getElementById("gallo10f");


const mosca1f = document.getElementById("mosca1f");
const mosca2f = document.getElementById("mosca2f");
const mosca3f = document.getElementById("mosca3f");
const mosca4f = document.getElementById("mosca4f");
const mosca5f = document.getElementById("mosca5f");
const mosca6f = document.getElementById("mosca6f");
const mosca7f = document.getElementById("mosca7f");
const mosca8f = document.getElementById("mosca8f");
const mosca9f = document.getElementById("mosca9f");
const mosca10f = document.getElementById("mosca10f");


const paja1f = document.getElementById("paja1f");
const paja2f = document.getElementById("paja2f");
const paja3f = document.getElementById("paja3f");
const paja4f = document.getElementById("paja4f");
const paja5f = document.getElementById("paja5f");
const paja6f = document.getElementById("paja6f");
const paja7f = document.getElementById("paja7f");
const paja8f = document.getElementById("paja8f");
const paja9f = document.getElementById("paja9f");
const paja10f = document.getElementById("paja10f");


async function informacionPeleador(elemento,id){
    await obtenerPeleador(id)
    .then(function({FirstName,LastName,Nickname,WeightClass,BirthDate,Height,Weight,Reach,Wins,Losses,Draws,NoContests,TechnicalKnockouts,TechnicalKnockoutsLosses,Submissions,SubmissionLosses,TitleWins,TitleLosses,TitleDraws,CareerStats}) {
        elemento.insertAdjacentHTML('beforeend', "El peleador se llama "+FirstName+" "+LastName+", su apodo es "+Nickname+ ", pertenece a la categoria "+WeightClass+", pesa "+Weight+"lb, mide  "+(Height/39.370) +"m, ha tenido  "+Wins+" victorias, de las cuales "+TechnicalKnockouts+" han sido por K.O,  "+Submissions+" han sido por sumisión, ha empatado "+Draws+", y perdido "+Losses+" veces" );

    });
}

async function informacionTop(elemento,id){
    await obtenerPeleador(id)
    .then(function({FirstName,LastName}) {
        elemento.insertAdjacentHTML('beforeend',FirstName+" "+LastName);
    
    })
    .catch(function(error){
        console.log(error);
    });

}



