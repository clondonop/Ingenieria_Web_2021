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



const top1 = document.getElementById("top1");

let fName;

let lName;

let nName;

let weightClass;

let birthDate;

let height;


let weight;

let reach;


let wins;


let losses;


let draws;

let noContests;

let technicalKO;

let technicalKOLosses;

let submissions;

let submissionLosses;

let titleWins;


let titleLosses;


let titleDraws;


let careerStats;





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

let nombre = informacionTop(140000098);
console.log(nombre);

