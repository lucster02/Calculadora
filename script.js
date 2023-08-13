var d = document.getElementById('result')
var p = document.getElementById('previsao')
var parenteses = false
var ponto = false

function inserir(x) {
    let ultimo = d.value.slice(-1)
    if(parenteses == true && x == "("){
        d.value += ")"
        parenteses = false
        ponto = false
        return
    }
    else if((x == "("  || x == "(-") && !["+" , "-" , "*" , "/"].includes(ultimo) ) {
        d.value += "*"
        parenteses = true;
    }
    if(x == "(") {
        parenteses = true;
        ponto = false
    }
    if(d.value== 0){
        d.value = x
    }else{
        d.value += x
    }
    prever()
}

function prever() {
    p.textContent = eval(d.value)
}

function negativo() {
    parenteses = true
    ponto = false
    inserir("(-")
}

function zerar() {
    d.value = 0
    parenteses = false
    ponto = false
    prever()
}

function inserirP() {
    let ultimo = d.value.slice(-1)
    if(ultimo === "." || ponto == true){
        return
    }
    if(["+" , "-" , "*" , "/", "("].includes(ultimo)){
        inserir(0)
    }
    ponto = true
    inserir(".")
}

function operadores(x) {
    let ultimo = d.value.slice(-1)
    if(["+" , "-" , "*" , "/"].includes(ultimo)){
        d.value = d.value.slice(0, -1)
        inserir(x)
    }else {
        inserir(x)
    }
    ponto = false
}

function somar() {
    if(parenteses == true) { 
        inserir("(")
        somar()
    }else {
    d.value = eval(d.value)
    parenteses = false
    ponto = false
    }
    prever()
}