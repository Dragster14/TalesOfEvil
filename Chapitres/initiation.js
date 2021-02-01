let vHistoire = document.getElementById('histoire');

// - Prologue -
function suite10() {
    document.getElementById('opacite1').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('10').innerHTML;
    document.getElementById('btn1').disabled = true;
}

// - Entrée dans la maison -
function suite218() {
    document.getElementById('opacite10').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('218').innerHTML;
    document.getElementById('btn10').disabled = true;
}

// - Le corridor - & - Vous vous croyez futés ? -
function suite295() {
    document.getElementById('opacite218').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('295').innerHTML;
    document.getElementById('btn218_1').disabled = true;
    document.getElementById('btn218_2').disabled = true;
}

function suite12() {
    document.getElementById('opacite218').classList.remove('opacite');
    document.getElementById('opacite295').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('12').innerHTML;
    document.getElementById('btn218_1').disabled = true;
    document.getElementById('btn218_2').disabled = true;
    document.getElementById('btn295').disabled = true;
}

// - Jardin au clair de lune - & - La fontaine - & - Je te tiens ! -
function suite171_1() {
    document.getElementById('opacite12').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('171').innerHTML;
    document.getElementById('btn12_1').disabled = true;
    document.getElementById('btn12_2').disabled = true;
    document.getElementById('btn171_2').classList.remove('d-none');
    document.getElementById('btn477_2').classList.remove('d-none');
}

function suite171_2() {
    document.getElementById('opacite477').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('171').innerHTML;
    document.getElementById('btn477_1').disabled = true;
}

function suite352_1() {
    document.getElementById('opacite12').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('352').innerHTML;
    document.getElementById('btn12_1').disabled = true;
    document.getElementById('btn12_2').disabled = true;
    document.getElementById('btn171_1').classList.remove('d-none');
    document.getElementById('btn477_1').classList.remove('d-none');
}

function suite352_2() {
    document.getElementById('opacite171').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('352').innerHTML;
    document.getElementById('btn171_2').disabled = true;
}

function suite414_1() {
    document.getElementById('opacite171').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('414').innerHTML;
    document.getElementById('btn171_1').disabled = true;
}

function suite414_2() {
    document.getElementById('opacite477').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('414').innerHTML;
    document.getElementById('btn477_2').disabled = true;
}

// - C'est coincé ! -
function suite477() {
    document.getElementById('opacite352').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('477').innerHTML;
    document.getElementById('btn352').disabled = true;
}

// - Qu'est-ce que c'est ? -
function suite314() {
    document.getElementById('opacite414').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('314').innerHTML;
    document.getElementById('btn414').disabled = true;
}

// - Embuscade dans les toilettes de l'horreur -
function suite321() {
    document.getElementById('opacite314').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('321').innerHTML;
    document.getElementById('btn314_1').disabled = true;
    document.getElementById('btn314_2').disabled = true;
}

function suite49() {
    document.getElementById('opacite314').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('49').innerHTML;
    document.getElementById('btn314_1').disabled = true;
    document.getElementById('btn314_2').disabled = true;
}

// - Prend ça ! - & - Joli coup ! -
function suite480() {
    document.getElementById('opacite321').classList.remove('opacite');
    document.getElementById('opacite49').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('480').innerHTML;
    document.getElementById('btn321_1').disabled = true;
    document.getElementById('btn321_2').disabled = true;
    document.getElementById('btn49_1').disabled = true;
    document.getElementById('btn49_2').disabled = true;
}

function suite347() {
    document.getElementById('opacite321').classList.remove('opacite');
    document.getElementById('opacite49').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('347').innerHTML;
    document.getElementById('btn321_1').disabled = true;
    document.getElementById('btn321_2').disabled = true;
    document.getElementById('btn49_1').disabled = true;
    document.getElementById('btn49_2').disabled = true;
}

// - Entrepôt -
function suite328() {
    document.getElementById('opacite480').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('328').innerHTML;
    document.getElementById('btn480_1').disabled = true;
    document.getElementById('btn480_2').disabled = true;
}

function suite492() {
    document.getElementById('opacite480').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('492').innerHTML;
    document.getElementById('btn480_1').disabled = true;
    document.getElementById('btn480_2').disabled = true;
}

// - Sans issue -
function suite327() {
    document.getElementById('opacite347').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('327').innerHTML;
    document.getElementById('btn347_1').disabled = true;
    document.getElementById('btn347_2').disabled = true;
    document.getElementById('btn347_3').disabled = true;
}

function suite281() {
    document.getElementById('opacite347').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('281').innerHTML;
    document.getElementById('btn347_1').disabled = true;
    document.getElementById('btn347_2').disabled = true;
    document.getElementById('btn347_3').disabled = true;
}

function suite159() {
    document.getElementById('opacite347').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('159').innerHTML;
    document.getElementById('btn347_1').disabled = true;
    document.getElementById('btn347_2').disabled = true;
    document.getElementById('btn347_3').disabled = true;
}

// - La flamme - & - Dans les ténèbres -
function suite308() {
    document.getElementById('opacite328').classList.remove('opacite');
    document.getElementById('opacite492').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('308').innerHTML;
    document.getElementById('btn328').disabled = true;
    document.getElementById('btn492').disabled = true;
}

// - Zut ! - & - La curiosité est un vilain défaut - & - Hey toi ! - & - Fuyez ! -
function suite398() {
    document.getElementById('opacite308').classList.remove('opacite');
    document.getElementById('opacite327').classList.remove('opacite');
    document.getElementById('opacite281').classList.remove('opacite');
    document.getElementById('opacite159').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('398').innerHTML;
    document.getElementById('btn308').disabled = true;
    document.getElementById('btn327').disabled = true;
    document.getElementById('btn281').disabled = true;
    document.getElementById('btn159').disabled = true;
}

// - Aaaaah ! -
function suite50() {
    document.getElementById('opacite398').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('50').innerHTML;
    document.getElementById('btn398').disabled = true;
}