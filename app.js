var team1={
    name:"RCB",
    score:0,
    runs:[]
};

var team2={
    name:"KXIP",
    score:0,
    runs:[]
};

var score=[0,1,2,3,4,5,6]

console.log(team1);
console.log(team2);

var toss;

window.onload=()=>{
    selectToss();
    updateName();
    updateButtontext();
    updateScores();
}

function selectToss(){
    toss=Math.round(Math.random())+1
    console.log(toss);
}

function updateName(){
    console.log("Team 1 name - "+team1.name);
    console.log("Team 2 name - "+team2.name);
}

function updateButtontext(){
   console.log( `${toss===1?team1.name:team2.name} BATTING`)

   if(team1.runs.length==6 && team2.runs.length==6){
       console.log("Both team finished Superover");
        if(team1.score>team2.score){
            console.log(team1.name+" wins");
        }
        else if(team1.score==team2.score){
            console.log("Draw");
        }
        else{
            console.log(team2.name+" wins");
        }
   }
   else{
       toss=team1.runs.length===6?2:
       team2.runs.length===6?1:toss;
   }
}

handlestrike=()=>{
    console.log("onclick works")
    var runs=score[Math.floor(Math.random()*score.length)]
    console.log(runs)
    if(toss==1){
        team1.runs.push(runs)
        console.log(runs)
        team1.score=calculatescore(team1.runs)
    }
    else{
        team2.runs.push(runs)
        console.log(runs)
        team2.score=calculatescore(team2.runs)
    }
    updateScores();
    updateButtontext();
}

function updateScores(){
    console.log("RCB Score : "+team1.score)
    console.log("KXIP Score : "+team2.score)
}

var calculatescore=(runs)=>{
    return runs.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
}