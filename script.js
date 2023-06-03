const data = require("./pytania.js");

const pytanie_div = document.getElementById("pytanie");
const odpowiedzi_div = document.getElementById("odpowiedzi");

let pytania_wyk2 = [];
let pytania_wyk3 = [];
let pytania_wyk4 = [];
let pytania_wyk5 = [];
let pytania_wyk6 = [];
let pytania_wyk7 = [];
let pytania_wyk8 = [];
let pytania_wyk9 = [];
let pytania_wyk10 = [];
let pytania_wyk11 = [];
let pytania_baza = [];
let pytania_wszystko = [];


function setPytania(data,array){
    for(let i = 0, j=0; i < data.length; i = i+6,j++){

        let pytanie = {
            id: j,
            pytanie: data[i],
            poprawne: data[i+1],
            odpowiedzi: [data[i+2],data[i+3],data[i+4],data[i+5]]
        }
        array.push(pytanie);
    }
}

generateStart();


function start(e){
    let target = getTarget(e);
    let id = target.id;
    switch (id){
        case 'wyk_2':
            setPytania(data.wyk_2,pytania_wyk2);
            nextQuestion(pytania_wyk2);
            break;
        case 'wyk_3':
            break;
        case 'wyk_4':
            break;
        case 'wyk_5':
            break;
        case 'wyk_6':
            break;
        case 'wyk_7':
            break;
        case 'wyk_8':
            break;
        case 'wyk_9':
            break;
        case 'wyk_10':
            break;
        case 'wyk_11':
            break;
        case 'baza':
            setPytania(data.baza,pytania_baza);
            nextQuestion(pytania_baza);
            break;
        case 'wszystko':
            break;
    }
} 

function createDiv(id,className,content){
    const div = document.createElement("div");
    div.id = id;
    div.className = className;
    div.textContent = content;
    return div;
}

function getTarget(e){
    return e.target;
}
function generateStart(){
    pytanie_div.textContent = "Wybierz opcję!";
    odpowiedzi_div.innerHTML = "";
    for(let i=2;i<12;i++){
        odpowiedzi_div.append(createDiv("wyk_"+i,"wybor","Wykład "+i));
    }
    odpowiedzi_div.append(createDiv("baza","wybor","Baza"));
    odpowiedzi_div.append(createDiv("wszystko","wybor","Wszystko"));

    const wybor_div = document.getElementsByClassName("wybor");
    for(let i=0;i<wybor_div.length;i++){
        wybor_div[i].addEventListener('click',start);
    }
}
function nextQuestion(pytania){
    const random_pyt = Math.floor(Math.random() * pytania.length)
    pytanie_div.textContent = pytania[random_pyt].pytanie;
    odpowiedzi_div.innerHTML = "";
    let odpowiedzi = pytania[random_pyt].odpowiedzi.slice();
    for(let i=0;i<4;i++){
    const random_odp = Math.floor(Math.random() * (4-i));
    const div = document.createElement("div");
    div.className = "odpowiedz";
    div.id = "odp_" + i;
    div.textContent = odpowiedzi[random_odp];
    div.addEventListener("click",function(){
        checkAnswer(pytania,random_pyt);
    });
    odpowiedzi_div.append(div);
    odpowiedzi.splice(random_odp,1);
    }

}
let isCliced = false;
function checkAnswer(pytania,id){
    if(isCliced){
        isCliced = false;
        if(pytania.length==0){
            generateStart()
            return
        }
        nextQuestion(pytania);
        return
    }
    let odpowiedzi_divs = document.getElementsByClassName("odpowiedz");
    for(let i=0; i < pytania[id].poprawne;i++){
        for(let j=0; j < odpowiedzi_divs.length; j++){
            if(odpowiedzi_divs[j].textContent == pytania[id].odpowiedzi[i]){
                odpowiedzi_divs[j].className = "poprawne";
            }
        }
    }
    pytania.splice(id,1);
    
    isCliced = true;

}