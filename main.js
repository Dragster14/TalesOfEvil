let vHistoire = document.getElementById('histoire');

// - Au commencement - & - Ah ! -
function suite225() {
    vHistoire.innerHTML += document.getElementById('225').innerHTML;
    document.getElementById('btn40_1').disabled = true;
    document.getElementById('btn40_2').disabled = true;
}

function suite163() {
    vHistoire.innerHTML += document.getElementById('163').innerHTML;
    document.getElementById('btn40_1').disabled = true;
    document.getElementById('btn40_2').disabled = true;
    document.getElementById('btn225').disabled = true;
}

// - Nous avons une affaire ! -
function suite88E() {
    let vInput163 = document.getElementById('input163');

    if (vInput163.value != 'peter.spencer.escape@gmail.com') {
        vInput163.style.borderColor = "red";
        vInput163.style.boxShadow = "0px 0px 8px red";
        vInput163.value = "";
        document.getElementById('input163').setAttribute("placeholder", 'Vraiment...? :(');
    } else {
        vInput163.style.borderColor = "green";
        vInput163.style.boxShadow = "";
        vHistoire.innerHTML += document.getElementById('88E').innerHTML;
        document.getElementById('btn163').disabled = true;
        document.getElementById('input163').disabled = true;
        document.getElementById('input163').setAttribute("placeholder", 'Bien joué ! - peter.spencer.escape@gmail.com -');
    }
}

// - Email -
function suite30() {
    vHistoire.innerHTML += document.getElementById('30').innerHTML;
    document.getElementById('btn88E').disabled = true;
}

// - Nous sommes sur la bonne voie -
function suite448() {
    vHistoire.innerHTML += document.getElementById('448').innerHTML;
    document.getElementById('btn30').disabled = true;
}

// - Chapitre 1 - & - Zut ! -
function suite118() {
    vHistoire.innerHTML += document.getElementById('118').innerHTML;
    document.getElementById('btn448_1').disabled = true;
    document.getElementById('btn448_2').disabled = true;
    document.getElementById('btn467').disabled = true;
}

function suite467() {
    vHistoire.innerHTML += document.getElementById('467').innerHTML;
    document.getElementById('btn448_1').disabled = true;
    document.getElementById('btn448_2').disabled = true;
}

// - Le couloir vert -
let v8 = document.getElementById('8');
let vBtn118_1 = document.getElementById('btn118_1');
let vBtn118_2 = document.getElementById('btn118_2');
let vBtn118_3 = document.getElementById('btn118_3');

function suite102() {
    vHistoire.innerHTML += document.getElementById('102').innerHTML;
    document.getElementById('btn8_1').disabled = true;
    document.getElementById('btn8_2').disabled = true;
    document.getElementById('btn8_3').disabled = true;
}

function suite274() {
    vHistoire.innerHTML += document.getElementById('274').innerHTML;
    document.getElementById('btn8_1').disabled = true;
    document.getElementById('btn8_2').disabled = true;
    document.getElementById('btn8_3').disabled = true;
}

function suite8() {
    vHistoire.innerHTML += document.getElementById('8').innerHTML;
    document.getElementById('btn8_1').disabled = true;
    document.getElementById('btn8_2').disabled = true;
    document.getElementById('btn8_3').disabled = true;
}

// - Jardin au clair de lune -
let v253 = document.getElementById('253');
let v309 = document.getElementById('309');
let v7 = document.getElementById('7');
let vBtn8_1 = document.getElementById('btn8_1');
let vBtn8_2 = document.getElementById('btn8_2');
let vBtn8_3 = document.getElementById('btn8_3');
let vBtn253_1 = document.getElementById('btn253_1');
let vBtn253_2 = document.getElementById('btn253_2');
let vBtn309_1 = document.getElementById('btn309_1');
let vBtn309_2 = document.getElementById('btn309_2');

function suite253() {
    v253.classList.remove('d-none');
    vBtn8_1.setAttribute('disabled', "");
    vBtn8_2.setAttribute('disabled', "");
    vBtn8_3.setAttribute('disabled', "");
    vBtn309_1.setAttribute('disabled', "");
}

function suite309() {
    v309.classList.remove('d-none'); 
    vBtn8_1.setAttribute('disabled', "");
    vBtn8_2.setAttribute('disabled', "");
    vBtn8_3.setAttribute('disabled', "");
    vBtn253_1.setAttribute('disabled', "");  
}

function suite7() {
    v7.classList.remove('d-none');
    vBtn8_1.setAttribute('disabled', "");
    vBtn8_2.setAttribute('disabled', "");
    vBtn8_3.setAttribute('disabled', "");
    vBtn253_2.setAttribute('disabled', "");
    vBtn309_2.setAttribute('disabled', "");
}