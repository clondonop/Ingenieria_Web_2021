let url="https://fly.sportsdata.io/v3/mma/scores/json/";
let key="?key=a422a6ac8b9e40268d59c9fd08a10fdb";

function obtenerPeleador(id){
    let urlPeleador = url+"Fighter/"
    return new Promise(function(resolve,reject) {
        $.get(urlPeleador+id+key, { crossDomain: true }, function(data){
            resolve(data);
        }).fail(function(error){
            reject(error);
        });
        
    });
}

let fName,lName,nName,weightClass,birthDate,height,weight,reach,wins,losses,draws,noContests,technicalKO,technicalKOLosses,submissions,submissionLosses,titleWins,titleLosses,titleDraws,careerStats;


async function informacionTop(id){
    await obtenerPeleador(id)
    .then(function({FirstName,LastName}) {
        top1.insertAdjacentHTML('beforeend',FirstName+" "+LastName);

    });
}

async function informacionPeleador(id){
    await obtenerPeleador(id)
    .then(function({FirstName,LastName,Nickname,WeightClass,BirthDate,Height,Weight,Reach,Wins,Losses,Draws,NoContests,TechnicalKnockouts,TechnicalKnockoutsLosses,Submissions,SubmissionLosses,TitleWins,TitleLosses,TitleDraws,CareerStats}) {
        fName = FirstName;
        lName = LastName;
        nName = Nickname;
        weightClass = WeightClass;
        birthDate = BirthDate;
        height = Height;
        weight = Weight;
        reach = Reach;
        wins = Wins;
        losses = Losses;
        draws = Draws;
        noContests = NoContests;
        technicalKO= TechnicalKnockouts;
        technicalKOLosses = TechnicalKnockoutsLosses;
        submissions = Submissions;
        submissionLosses = SubmissionLosses;
        titleWins = TitleWins;
        titleDraws = TitleDraws;
        titleLosses = TitleLosses;
        careerStats = CareerStats;  

    });
}

// Campeones 
informacionPeleador(camp1,140000215);
informacionPeleador(camp2,140000086);
informacionPeleador(camp3,140000347);
informacionPeleador(camp4,140000145);
informacionPeleador(camp5,140000074);
informacionPeleador(camp6,140000074);
informacionPeleador(camp7,140000098);
informacionPeleador(camp8,140000141);
informacionPeleador(camp9,140000402);
informacionPeleador(camp10,140000446);
// Top 10 Pesado
informacionTop(pesado1,140000558);
informacionTop(pesado2,140000173);
informacionTop(pesado3,140000218);
informacionTop(pesado4,140000534);
informacionTop(pesado5,140000647);
informacionTop(pesado6,140000034);
informacionTop(pesado7,140000271);
informacionTop(pesado8,140000323);
informacionTop(pesado9,140000299);
informacionTop(pesado10,140000992);
// Top 10 Semi
informacionTop(semi1,140000015);
informacionTop(semi2,140000387);
informacionTop(semi3,140000193);
informacionTop(semi4,140000124);
informacionTop(semi5,140000918);
informacionTop(semi6,140000147);
informacionTop(semi7,140000113);
informacionTop(semi8,140000192);
informacionTop(semi9,140000261);
informacionTop(semi10,140000043);
// Top 10 Medio
informacionTop(medio1,140000630);
informacionTop(medio2,140000556);
informacionTop(medio3,140000348);
informacionTop(medio4,140000329);
informacionTop(medio5,140000197);
informacionTop(medio6,140000467);
informacionTop(medio7,140000245);
informacionTop(medio8,140000265);
informacionTop(medio9,140000604);
informacionTop(medio10,140000229);
// Top 10 Welter
informacionTop(welter1,140000521);
informacionTop(welter2,140000526);
informacionTop(welter3,140000195);
informacionTop(welter4,140000196);
informacionTop(welter5,140000221);
informacionTop(welter6,140000089);
informacionTop(welter7,140000444);
informacionTop(welter8,140000047);
informacionTop(welter9,140000752);
informacionTop(welter10,140000144);
// Top ligero
informacionTop(ligero1,140000266);
informacionTop(ligero2,140000247);
informacionTop(ligero3,140000045);
informacionTop(ligero4,140001095);
informacionTop(ligero5,140000401);
informacionTop(ligero6,140000867);
informacionTop(ligero7,140000368);
informacionTop(ligero8,140000487);
informacionTop(ligero9,140000165);
informacionTop(ligero10,140000096);
// Top 10 Pluma
informacionTop(pluma1,140000267);
informacionTop(pluma2,140000712);
informacionTop(pluma3,140000137);
informacionTop(pluma4,140000615);
informacionTop(pluma5,140000421);
informacionTop(pluma6,140000396);
informacionTop(pluma7,140000243);
informacionTop(pluma8,140000178);
informacionTop(pluma9,140000136);
informacionTop(pluma10,140000024);
// Top 10 Gallo
informacionTop(gallo1,140000116);
informacionTop(gallo2,140000007);
informacionTop(gallo3,140000668);
informacionTop(gallo4,140000139);
informacionTop(gallo5,140000049);
informacionTop(gallo6,140000052);
informacionTop(gallo7,140000504);
informacionTop(gallo8,140000138);
informacionTop(gallo9,140000907);
informacionTop(gallo10,140000051);
// Top 10 Mosca
informacionTop(mosca1,140000613);
informacionTop(mosca2,140000614);
informacionTop(mosca3,140000258);
informacionTop(mosca4,140000222);
informacionTop(mosca5,140000019);
informacionTop(mosca6,140000910);
informacionTop(mosca7,140000059);
informacionTop(mosca8,140000152);
informacionTop(mosca9,140000028);
informacionTop(mosca10,140000632);
// Top 10 Pluma F
// Top 10 Gallo F
informacionTop(galloF1,140000471);
informacionTop(galloF2,140000447);
informacionTop(galloF3,140000359);
informacionTop(galloF4,140000345);
informacionTop(galloF5,140000159);
informacionTop(galloF6,140000462);
informacionTop(galloF7,140000710);
informacionTop(galloF8,140000701);
informacionTop(galloF9,140000128);
informacionTop(galloF10,140000380);
// Top 10 Mosca F
informacionTop(moscaF1,140000349);
informacionTop(moscaF2,140000389);
informacionTop(moscaF3,140000517);
informacionTop(moscaF4,140000205);
informacionTop(moscaF5,140000094);
informacionTop(moscaF6,140000011);
informacionTop(moscaF7,140000333);
informacionTop(moscaF8,140000403);
informacionTop(moscaF9,140000281);
informacionTop(moscaF10,140000397);
// Top 10 Paja F
informacionTop(pajaF1,140000350);
informacionTop(pajaF2,140000634);
informacionTop(pajaF3,140000394);
informacionTop(pajaF4,140000296);
informacionTop(pajaF5,140000398);
informacionTop(pajaF6,140000235);
informacionTop(pajaF7,140000441);
informacionTop(pajaF8,140000240);
informacionTop(pajaF9,140000140);
informacionTop(pajaF10,140000432);