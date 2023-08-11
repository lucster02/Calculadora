var d = document.getElementById('result')
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
    if(x == "(" && !["+" , "-" , "*" , "/","0"].includes(ultimo) ) {
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
}

function negativo() {
    d.value += "(-"
    parenteses = true
    ponto = false
}

function zerar() {
    d.value = 0
    parenteses = false
    ponto = false
}

function inserirP() {
    let ultimo = d.value.slice(-1)
    if(ultimo === "." || ponto == true){
        return
    }
    if(["+" , "-" , "*" , "/", "("].includes(ultimo)){
        d.value += 0
    }
    d.value += "."
    ponto = true
}

function operadores(x) {
    let ultimo = d.value.slice(-1)
    if(["+" , "-" , "*" , "/"].includes(ultimo)){
        d.value = d.value.slice(0, -1)
        d.value += x
    }else {
        d.value += x
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
}