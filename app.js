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
    document.getElementById("team1name").textContent=team1.name;
    document.getElementById("team2name").textContent=team2.name;
}

function updateButtontext(){ 
    var button =document.getElementById("strikebutton")
    var result=document.getElementById("result")
    if(team1.runs.length==6 && team2.runs.length==6){
       console.log("Both team finished Superover");
       button.remove();
        /*if(team1.score>team2.score){
            console.log(team1.name+" wins");
        }
        else if(team1.score==team2.score){
            console.log("Draw");
        }
        else{
            console.log(team2.name+" wins");
        }*/
        console.log(team1.score===team2.score?"Draw":`${team1.score>team2.score?team1.name:team2.name} Wins`)
        result.textContent=team1.score==team2.score?"Draw":`${team1.score>team2.score?team1.name:team2.name} Wins`
   }
   else{
       toss=team1.runs.length===6?2:
       team2.runs.length===6?1:toss;
   }
   console.log( `${toss===1?team1.name:team2.name} BATTING`)
   document.getElementById("strikebutton").textContent= `${toss===1?team1.name:team2.name} BATTING`
}

handlestrike=()=>{
    var runs=score[Math.floor(Math.random()*score.length)]
    if(toss==1){
        team1.runs.push(runs);
        console.log(runs);
        team1.score=calculatescore(team1.runs);
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
    console.log("Team 1 Score : "+team1.score);
    console.log("Team 2 Score : "+team2.score);
    document.getElementById("team1score").textContent=team1.score;
    document.getElementById("team2score").textContent=team2.score;
    updateRuns();
}

var calculatescore=(runs)=>{
    return runs.map(num=>{
        return num;
    }).reduce((total,num)=>total+num);
}

function updateRuns(){
    var team1runs = document.getElementById("team1runs").children

    team1.runs.forEach((run,index)=>{
        team1runs[index].textContent=run
    });

    var team2runs = document.getElementById("team2runs").children

    team2.runs.forEach((run,index)=>{
        team2runs[index].textContent=run
    });
}