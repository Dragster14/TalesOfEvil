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

// - Parloir - [Rotation Statues + résultat]
function rotationStatue1() {
    document.getElementById('rotate1').style.transform += 'rotate(90deg)';
}

function rotationStatue2() {
    document.getElementById('rotate2').style.transform += 'rotate(90deg)';
}

function rotationStatue3() {
    document.getElementById('rotate3').style.transform += 'rotate(90deg)';
}

function resultatStatues() {
    document.getElementById('resultatStatues').classList.remove('d-none');
    document.getElementById('btn58_resultat').disabled = true;
    document.getElementById('btn58_1').disabled = false;
    document.getElementById('btn58_2').disabled = false;
}