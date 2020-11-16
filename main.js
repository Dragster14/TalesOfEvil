let vHistoire = document.getElementById('histoire');

// Sélection chapitre
/*function partieInit() {
    vHistoire.innerHTML = document.getElementById('').innerHTML;
}*/

function chap1() {
    vHistoire.innerHTML = document.getElementById('40').innerHTML;
}

// - Au commencement - & - Ah ! -
function suite225() {
    document.getElementById('opacite40').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('225').innerHTML;
    document.getElementById('btn40_1').disabled = true;
    document.getElementById('btn40_2').disabled = true;
}

function suite163() {
    document.getElementById('opacite40').classList.remove('opacite');
    document.getElementById('opacite225').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('163').innerHTML;
    document.getElementById('btn40_1').disabled = true;
    document.getElementById('btn40_2').disabled = true;
    document.getElementById('btn225').disabled = true;
}

// - Nous avons une affaire ! -
function suite88E() {
    document.getElementById('opacite163').classList.remove('opacite');
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
        vInput163.value = "";
        document.getElementById('btn163').disabled = true;
        document.getElementById('btn163-resultat').disabled = true;
        document.getElementById('input163').disabled = true;
        document.getElementById('input163').setAttribute("placeholder", 'Bien joué ! - peter.spencer.escape@gmail.com -');
    }
}

function emailResultat() {
    let vInput163 = document.getElementById('input163');

    vInput163.value = 'peter.spencer.escape@gmail.com';
    vInput163.style.borderColor = "";
    vInput163.style.boxShadow = "";
}

// - Email -
function suite30() {
    document.getElementById('opacite88E').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('30').innerHTML;
    document.getElementById('btn88E').disabled = true;
}

// - Nous sommes sur la bonne voie -
function suite448() {
    document.getElementById('opacite30').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('448').innerHTML;
    document.getElementById('btn30').disabled = true;
}

// - Chapitre 1 - & - Zut ! -
function suite118() {
    document.getElementById('opacite448').classList.remove('opacite');
    document.getElementById('opacite467').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('118').innerHTML;
    document.getElementById('btn448_1').disabled = true;
    document.getElementById('btn448_2').disabled = true;
    document.getElementById('btn467').disabled = true;
}

function suite467() {
    document.getElementById('opacite448').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('467').innerHTML;
    document.getElementById('btn448_1').disabled = true;
    document.getElementById('btn448_2').disabled = true;
}

// - Le couloir vert - & - Nouvelle voie - & - Mais que se passe-t-il ? - & - Retour dans le couloir -
function suite102() {
    document.getElementById('opacite118').classList.remove('opacite');
    document.getElementById('opacite7').classList.remove('opacite');
    document.getElementById('opacite20').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('102').innerHTML;
    document.getElementById('btn118_1').disabled = true;
    document.getElementById('btn118_2').disabled = true;
    document.getElementById('btn118_3').disabled = true;
    document.getElementById('btn7_1').disabled = true;
    document.getElementById('btn7_2').disabled = true;
    document.getElementById('btn7_3').disabled = true;
    document.getElementById('btn20_1').disabled = true;
    document.getElementById('btn20_2').disabled = true;
}

function suite274() {
    document.getElementById('opacite118').classList.remove('opacite');
    document.getElementById('opacite260').classList.remove('opacite');
    document.getElementById('opacite7').classList.remove('opacite');
    document.getElementById('opacite20').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('274').innerHTML;
    document.getElementById('btn118_1').disabled = true;
    document.getElementById('btn118_2').disabled = true;
    document.getElementById('btn118_3').disabled = true;
    document.getElementById('btn260_1').disabled = true;
    document.getElementById('btn260_2').disabled = true;
    document.getElementById('btn7_1').disabled = true;
    document.getElementById('btn7_2').disabled = true;
    document.getElementById('btn7_3').disabled = true;
    document.getElementById('btn20_1').disabled = true;
    document.getElementById('btn20_2').disabled = true;
}

function suite8() {
    document.getElementById('opacite118').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('8').innerHTML;
    document.getElementById('btn118_1').disabled = true;
    document.getElementById('btn118_2').disabled = true;
    document.getElementById('btn118_3').disabled = true;
}

// - Embuscade dans les toilettes de l'horreur -
function suite260() {
    document.getElementById('opacite102').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('260').innerHTML;
    document.getElementById('btn102').disabled = true;
}

// - Nouvelle voie -
function suite229() {
    document.getElementById('opacite260').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('229').innerHTML;
    document.getElementById('btn260_1').disabled = true;
    document.getElementById('btn260_2').disabled = true;
}

// - L'allée - & - La brume - & - L'allée - & - Mais qu'est-ce que... - & - Chargez ! - & - Ça se rapproche ! -
function suite240() {
    document.getElementById('opacite229').classList.remove('opacite');
    document.getElementById('opacite379').classList.remove('opacite');
    document.getElementById('opacite23').classList.remove('opacite');
    document.getElementById('opacite365').classList.remove('opacite');
    document.getElementById('opacite81').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('240').innerHTML;
    document.getElementById('btn229_1').disabled = true;
    document.getElementById('btn229_2').disabled = true;
    document.getElementById('btn379_1').disabled = true;
    document.getElementById('btn379_2').disabled = true;
    document.getElementById('btn23_1').disabled = true;
    document.getElementById('btn23_2').disabled = true;
    document.getElementById('btn23_3').disabled = true;
    document.getElementById('btn23_4').disabled = true;
    document.getElementById('btn365_1').disabled = true;
    document.getElementById('btn365_2').disabled = true;
    document.getElementById('btn365_3').disabled = true;
    document.getElementById('btn81_1').disabled = true;
    document.getElementById('btn81_2').disabled = true;
    document.getElementById('btn81_3').disabled = true;
}

function suite379() {
    document.getElementById('opacite229').classList.remove('opacite');
    document.getElementById('opacite474').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('379').innerHTML;
    document.getElementById('btn229_1').disabled = true;
    document.getElementById('btn229_2').disabled = true;
    document.getElementById('btn474_1').disabled = true;
    document.getElementById('btn474_2').disabled = true;
}

// - Entrepôt -
function suite128() {
    document.getElementById('opacite240').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('128').innerHTML;
    document.getElementById('btn240_1').disabled = true;
    document.getElementById('btn240_2').disabled = true;
}

function suite367() {
    document.getElementById('opacite240').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('367').innerHTML;
    document.getElementById('btn240_1').disabled = true;
    document.getElementById('btn240_2').disabled = true;
}

// - La flamme - & - Bang ! Bang ! Bang ! - & - Pas possible -
function suite103() {
    document.getElementById('opacite128').classList.remove('opacite');
    document.getElementById('opacite230').classList.remove('opacite');
    document.getElementById('opacite367').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('103').innerHTML;
    document.getElementById('btn128_1').disabled = true;
    document.getElementById('btn128_2').disabled = true;
    document.getElementById('btn230').disabled = true;
    document.getElementById('btn367_1').disabled = true;
    document.getElementById('btn367_2').disabled = true;
}

function suite230() {
    document.getElementById('opacite128').classList.remove('opacite');
    document.getElementById('opacite367').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('230').innerHTML;
    document.getElementById('btn128_1').disabled = true;
    document.getElementById('btn128_2').disabled = true;
    document.getElementById('btn367_1').disabled = true;
    document.getElementById('btn367_2').disabled = true;
}

// - Il faut accélérer - & - Bon chat ! - & - C'est ouvert ! - & - Tout va bien - & - Ouch ! - & - La brume - & - Chargez ! -
function suite406() {
    document.getElementById('opacite103').classList.remove('opacite');
    document.getElementById('opacite379').classList.remove('opacite');
    document.getElementById('opacite365').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('406').innerHTML;
    document.getElementById('btn103_1').disabled = true;
    document.getElementById('btn103_2').disabled = true;
    document.getElementById('btn379_1').disabled = true;
    document.getElementById('btn379_2').disabled = true;
    document.getElementById('btn365_1').disabled = true;
    document.getElementById('btn365_2').disabled = true;
    document.getElementById('btn365_3').disabled = true;
}

function suite249() {
    document.getElementById('opacite103').classList.remove('opacite');
    document.getElementById('opacite54').classList.remove('opacite');
    document.getElementById('opacite351').classList.remove('opacite');
    document.getElementById('opacite329').classList.remove('opacite');
    document.getElementById('opacite443').classList.remove('opacite');
    document.getElementById('opacite365').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('249').innerHTML;
    document.getElementById('btn103_1').disabled = true;
    document.getElementById('btn103_2').disabled = true;
    document.getElementById('btn54').disabled = true;
    document.getElementById('btn351').disabled = true;
    document.getElementById('btn329_1').disabled = true;
    document.getElementById('btn329_2').disabled = true;
    document.getElementById('btn443').disabled = true;
    document.getElementById('btn365_1').disabled = true;
    document.getElementById('btn365_2').disabled = true;
    document.getElementById('btn365_3').disabled = true;
}

// - Le cimetière -
function suite45() {
    document.getElementById('opacite406').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('45').innerHTML;
    document.getElementById('btn406_1').disabled = true;
    document.getElementById('btn406_2').disabled = true;
}

function suite329() {
    document.getElementById('opacite406').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('329').innerHTML;
    document.getElementById('btn406_1').disabled = true;
    document.getElementById('btn406_2').disabled = true;
}

// - Salut boule de poils ! - & - Mais qu'est-ce que... - & - Ça se rapproche ! -
function suite54() {
    document.getElementById('opacite45').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('54').innerHTML;
    document.getElementById('btn45_1').disabled = true;
    document.getElementById('btn45_2').disabled = true;
}

function suite351() {
    document.getElementById('opacite45').classList.remove('opacite');
    document.getElementById('opacite23').classList.remove('opacite');
    document.getElementById('opacite81').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('351').innerHTML;
    document.getElementById('btn45_1').disabled = true;
    document.getElementById('btn45_2').disabled = true;
    document.getElementById('btn23_1').disabled = true;
    document.getElementById('btn23_2').disabled = true;
    document.getElementById('btn23_3').disabled = true;
    document.getElementById('btn23_4').disabled = true;
    document.getElementById('btn81_1').disabled = true;
    document.getElementById('btn81_2').disabled = true;
    document.getElementById('btn81_3').disabled = true;
}

// - Tout va bien -
function suite138() {
    document.getElementById('opacite329').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('138').innerHTML;
    document.getElementById('btn329_1').disabled = true;
    document.getElementById('btn329_2').disabled = true;
}

// - Allumettes ! -
function suite443() {
    document.getElementById('opacite138').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('443').innerHTML;
    document.getElementById('btn138').disabled = true;
}

// - Garde-manger -
function suite141() {
    document.getElementById('opacite249').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('141').innerHTML;
    document.getElementById('btn249_1').disabled = true;
    document.getElementById('btn249_2').disabled = true;
}

function suite436() {
    document.getElementById('opacite249').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('436').innerHTML;
    document.getElementById('btn249_1').disabled = true;
    document.getElementById('btn249_2').disabled = true;
}

// - Le garde-manger des horreurs - & - Le garde-manger des horreurs -
function suite313() {
    document.getElementById('opacite141').classList.remove('opacite');
    document.getElementById('opacite276').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('313').innerHTML;
    document.getElementById('btn141').disabled = true;
    document.getElementById('btn276').disabled = true;
}

// - La cuisine hantée -
function suite282() {
    document.getElementById('opacite313').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('282').innerHTML;
    document.getElementById('btn313_1').disabled = true;
    document.getElementById('btn313_2').disabled = true;
    document.getElementById('btn313_3').disabled = true;
}

function suite153() {
    document.getElementById('opacite313').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('153').innerHTML;
    document.getElementById('btn313_1').disabled = true;
    document.getElementById('btn313_2').disabled = true;
    document.getElementById('btn313_3').disabled = true;
}

function suite91() {
    document.getElementById('opacite313').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('91').innerHTML;
    document.getElementById('btn313_1').disabled = true;
    document.getElementById('btn313_2').disabled = true;
    document.getElementById('btn313_3').disabled = true;
}

// - Plutôt seul que mal accompagné ? - & - Encore pire... - & - Vlan ! -
function suite257() {
    document.getElementById('opacite282').classList.remove('opacite');
    document.getElementById('opacite361').classList.remove('opacite');
    document.getElementById('opacite146').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('257').innerHTML;
    document.getElementById('btn282').disabled = true;
    document.getElementById('btn361').disabled = true;
    document.getElementById('btn146').disabled = true;
}

// - Salle à manger - & - On peut y arriver -
function suite87() {
    document.getElementById('opacite257').classList.remove('opacite');
    document.getElementById('opacite22').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('87').innerHTML;
    document.getElementById('btn257_1').disabled = true;
    document.getElementById('btn257_2').disabled = true;
    document.getElementById('btn22_1').disabled = true;
    document.getElementById('btn22_2').disabled = true;
    document.getElementById('btn22_3').disabled = true;
}

function suite22() {
    document.getElementById('opacite257').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('22').innerHTML;
    document.getElementById('btn257_1').disabled = true;
    document.getElementById('btn257_2').disabled = true;
}

// - L'enfer vert - & - Découverte douce-amère - & - On peut y arriver -
function suite464() {
    document.getElementById('opacite87').classList.remove('opacite');
    document.getElementById('opacite22').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('464').innerHTML;
    document.getElementById('btn87_1').disabled = true;
    document.getElementById('btn87_2').disabled = true;
    document.getElementById('btn22_1').disabled = true;
    document.getElementById('btn22_2').disabled = true;
    document.getElementById('btn22_3').disabled = true;
}

function suite58() {
    document.getElementById('opacite87').classList.remove('opacite');
    document.getElementById('opacite464').classList.remove('opacite');
    document.getElementById('opacite22').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('58').innerHTML;
    document.getElementById('btn87_1').disabled = true;
    document.getElementById('btn87_2').disabled = true;
    document.getElementById('btn464').disabled = true;
    document.getElementById('btn22_1').disabled = true;
    document.getElementById('btn22_2').disabled = true;
    document.getElementById('btn22_3').disabled = true;
}

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

function suite491() {
    document.getElementById('opacite58').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('491').innerHTML;
    document.getElementById('btn58_1').disabled = true;
    document.getElementById('btn58_2').disabled = true;
}

function suite293() {
    document.getElementById('opacite58').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('293').innerHTML;
    document.getElementById('btn58_1').disabled = true;
    document.getElementById('btn58_2').disabled = true;
}

// - Hourra ! - & - Un coup de maître ! -
function suite335() {
    document.getElementById('opacite491').classList.remove('opacite');
    document.getElementById('opacite35').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('335').innerHTML;
    document.getElementById('btn491').disabled = true;
    document.getElementById('btn35').disabled = true;
}

// - Garde-manger puant -
function suite125() {
    document.getElementById('opacite335').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('125').innerHTML;
    document.getElementById('btn335').disabled = true;
}

// - Retour vers le putride -
function suite440() {
    document.getElementById('opacite125').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('440').innerHTML;
    document.getElementById('btn125').disabled = true;
}

// - Choix difficiles - & - Une belle salade ! - - Qu'est-ce qui s'est passé ? -
function suite264() {
    document.getElementById('opacite440').classList.remove('opacite');
    document.getElementById('opacite337').classList.remove('opacite');
    document.getElementById('opacite473').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('264').innerHTML;
    document.getElementById('btn440_1').disabled = true;
    document.getElementById('btn440_2').disabled = true;
    document.getElementById('btn337').disabled = true;
    document.getElementById('btn473').disabled = true;
}

function suite105() {
    document.getElementById('opacite440').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('105').innerHTML;
    document.getElementById('btn440_1').disabled = true;
    document.getElementById('btn440_2').disabled = true;
}

// - Le Psychopathe - & - Il se rapproche ! - & - Il est tout proche ! - & - Put*** ! - & - Fini de jouer ! -
function suite417() {
    document.getElementById('opacite264').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('417').innerHTML;
    document.getElementById('btn264_1').disabled = true;
    document.getElementById('btn264_2').disabled = true;
    document.getElementById('btn264_3').disabled = true;
}

function suite359() {
    document.getElementById('opacite264').classList.remove('opacite');
    document.getElementById('opacite417').classList.remove('opacite');
    document.getElementById('opacite476').classList.remove('opacite');
    document.getElementById('opacite394').classList.remove('opacite');
    document.getElementById('opacite98').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('359').innerHTML;
    document.getElementById('btn264_1').disabled = true;
    document.getElementById('btn264_2').disabled = true;
    document.getElementById('btn264_3').disabled = true;
    document.getElementById('btn417_1').disabled = true;
    document.getElementById('btn417_2').disabled = true;
    document.getElementById('btn417_3').disabled = true;
    document.getElementById('btn417_4').disabled = true;
    document.getElementById('btn476_1').disabled = true;
    document.getElementById('btn476_2').disabled = true;
    document.getElementById('btn476_3').disabled = true;
    document.getElementById('btn476_4').disabled = true;
    document.getElementById('btn394_1').disabled = true;
    document.getElementById('btn394_2').disabled = true;
    document.getElementById('btn394_3').disabled = true;
    document.getElementById('btn394_4').disabled = true;
    document.getElementById('btn98_1').disabled = true;
    document.getElementById('btn98_2').disabled = true;
}

function suite56() {
    document.getElementById('opacite264').classList.remove('opacite');
    document.getElementById('opacite417').classList.remove('opacite');
    document.getElementById('opacite476').classList.remove('opacite');
    document.getElementById('opacite394').classList.remove('opacite');
    document.getElementById('opacite98').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('56').innerHTML;
    document.getElementById('btn264_1').disabled = true;
    document.getElementById('btn264_2').disabled = true;
    document.getElementById('btn264_3').disabled = true;
    document.getElementById('btn417_1').disabled = true;
    document.getElementById('btn417_2').disabled = true;
    document.getElementById('btn417_3').disabled = true;
    document.getElementById('btn417_4').disabled = true;
    document.getElementById('btn476_1').disabled = true;
    document.getElementById('btn476_2').disabled = true;
    document.getElementById('btn476_3').disabled = true;
    document.getElementById('btn476_4').disabled = true;
    document.getElementById('btn394_1').disabled = true;
    document.getElementById('btn394_2').disabled = true;
    document.getElementById('btn394_3').disabled = true;
    document.getElementById('btn394_4').disabled = true;
    document.getElementById('btn98_1').disabled = true;
    document.getElementById('btn98_2').disabled = true;
}

// - Il se rapproche ! -
function suite476() {
    document.getElementById('opacite417').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('476').innerHTML;
    document.getElementById('btn417_1').disabled = true;
    document.getElementById('btn417_2').disabled = true;
    document.getElementById('btn417_3').disabled = true;
    document.getElementById('btn417_4').disabled = true;
}

// - Il est tout proche ! -
function suite394() {
    document.getElementById('opacite476').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('394').innerHTML;
    document.getElementById('btn476_1').disabled = true;
    document.getElementById('btn476_2').disabled = true;
    document.getElementById('btn476_3').disabled = true;
    document.getElementById('btn476_4').disabled = true;
}

// - Put*** ! -
function suite98() {
    document.getElementById('opacite394').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('98').innerHTML;
    document.getElementById('btn394_1').disabled = true;
    document.getElementById('btn394_2').disabled = true;
    document.getElementById('btn394_3').disabled = true;
    document.getElementById('btn394_4').disabled = true;
}

// - Retour dans le Hall - & - Retourne en enfer ! - & - Prends-la -
function suite143() {
    document.getElementById('opacite359').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('143').innerHTML;
    document.getElementById('btn359_1').disabled = true;
    document.getElementById('btn359_2').disabled = true;
}

function suite237() {
    document.getElementById('opacite359').classList.remove('opacite');
    document.getElementById('opacite104').classList.remove('opacite');
    document.getElementById('opacite243').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('237').innerHTML;
    document.getElementById('btn359_1').disabled = true;
    document.getElementById('btn359_2').disabled = true;
    document.getElementById('btn104').disabled = true;
    document.getElementById('btn243').disabled = true;
}

// - Tommy ! -
function suite439() {
    document.getElementById('opacite143').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('439').innerHTML;
    document.getElementById('btn143_1').disabled = true;
    document.getElementById('btn143_2').disabled = true;
    document.getElementById('btn143_3').disabled = true;
}

function suite181() {
    document.getElementById('opacite143').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('181').innerHTML;
    document.getElementById('btn143_1').disabled = true;
    document.getElementById('btn143_2').disabled = true;
    document.getElementById('btn143_3').disabled = true;
}

function suite479() {
    document.getElementById('opacite143').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('479').innerHTML;
    document.getElementById('btn143_1').disabled = true;
    document.getElementById('btn143_2').disabled = true;
    document.getElementById('btn143_3').disabled = true;
}

// - Chose promise... - & - Malédiction ! - & - Mais c'est un monstre ! -
function suite435() {
    document.getElementById('opacite439').classList.remove('opacite');
    document.getElementById('opacite47').classList.remove('opacite');
    document.getElementById('opacite56').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('435').innerHTML;
    document.getElementById('btn439').disabled = true;
    document.getElementById('btn47').disabled = true;
    document.getElementById('btn56').disabled = true;
}

// - Yippeeki-yay - & - Viens prends tes clés -
function suite104() {
    document.getElementById('opacite181').classList.remove('opacite');
    document.getElementById('opacite42').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('104').innerHTML;
    document.getElementById('btn181_1').disabled = true;
    document.getElementById('btn181_2').disabled = true;
    document.getElementById('btn42_1').disabled = true;
    document.getElementById('btn42_2').disabled = true;
}

function suite47() {
    document.getElementById('opacite181').classList.remove('opacite');
    document.getElementById('opacite42').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('47').innerHTML;
    document.getElementById('btn181_1').disabled = true;
    document.getElementById('btn181_2').disabled = true;
    document.getElementById('btn42_1').disabled = true;
    document.getElementById('btn42_2').disabled = true;
}

// - Les voilà tes clés ! -
function suite243() {
    document.getElementById('opacite479').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('243').innerHTML;
    document.getElementById('btn479_1').disabled = true;
    document.getElementById('btn479_2').disabled = true;
}

function suite42() {
    document.getElementById('opacite479').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('42').innerHTML;
    document.getElementById('btn479_1').disabled = true;
    document.getElementById('btn479_2').disabled = true;
}

// - Le puits -
function suite16() {
    document.getElementById('opacite105').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('16').innerHTML;
    document.getElementById('btn105_1').disabled = true;
    document.getElementById('btn105_2').disabled = true;
}

function suite117() {
    document.getElementById('opacite105').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('117').innerHTML;
    document.getElementById('btn105_1').disabled = true;
    document.getElementById('btn105_2').disabled = true;
}

// - Ciseaux ! - & - Broyés ! -
function suite287() {
    document.getElementById('opacite16').classList.remove('opacite');
    document.getElementById('opacite117').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('287').innerHTML;
    document.getElementById('btn16').disabled = true;
    document.getElementById('btn117').disabled = true;
}

// - La plante carnivore - & - Pas une bonne idée - & - Alternatives ? -
function suite421() {
    document.getElementById('opacite287').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('421').innerHTML;
    document.getElementById('btn287_1').disabled = true;
    document.getElementById('btn287_2').disabled = true;
    document.getElementById('btn287_3').disabled = true;
}

function suite31() {
    document.getElementById('opacite287').classList.remove('opacite');
    document.getElementById('opacite421').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('31').innerHTML;
    document.getElementById('btn287_1').disabled = true;
    document.getElementById('btn287_2').disabled = true;
    document.getElementById('btn287_3').disabled = true;
    document.getElementById('btn421_1').disabled = true;
    document.getElementById('btn421_2').disabled = true;
    document.getElementById('btn421_3').disabled = true;
}

function suite89() {
    document.getElementById('opacite287').classList.remove('opacite');
    document.getElementById('opacite421').classList.remove('opacite');
    document.getElementById('opacite31').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('89').innerHTML;
    document.getElementById('btn287_1').disabled = true;
    document.getElementById('btn287_2').disabled = true;
    document.getElementById('btn287_3').disabled = true;
    document.getElementById('btn421_1').disabled = true;
    document.getElementById('btn421_2').disabled = true;
    document.getElementById('btn421_3').disabled = true;
    document.getElementById('btn31_1').disabled = true;
    document.getElementById('btn31_2').disabled = true;
    document.getElementById('btn31_3').disabled = true;
}

// - Pas une bonne idée - & - Alternatives ? - & - Bonne idée... Mais en fait pas du tout ! -
function suite343() {
    document.getElementById('opacite421').classList.remove('opacite');
    document.getElementById('opacite31').classList.remove('opacite');
    document.getElementById('opacite89').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('343').innerHTML;
    document.getElementById('btn421_1').disabled = true;
    document.getElementById('btn421_2').disabled = true;
    document.getElementById('btn421_3').disabled = true;
    document.getElementById('btn31_1').disabled = true;
    document.getElementById('btn31_2').disabled = true;
    document.getElementById('btn31_3').disabled = true;
    document.getElementById('btn89_1').disabled = true;
    document.getElementById('btn89_2').disabled = true;
}

// - Alternatives ? - & - Je t'ai eue ! - & - Bonne idée... Mais en fait pas du tout ! -
function suite205() {
    document.getElementById('opacite31').classList.remove('opacite');
    document.getElementById('opacite255').classList.remove('opacite');
    document.getElementById('opacite89').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('205').innerHTML;
    document.getElementById('btn31_1').disabled = true;
    document.getElementById('btn31_2').disabled = true;
    document.getElementById('btn31_3').disabled = true;
    document.getElementById('btn255').disabled = true;
    document.getElementById('btn89_1').disabled = true;
    document.getElementById('btn89_2').disabled = true;
}

// - Taillons-la en pièces ! -
function suite255() {
    document.getElementById('opacite343').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('255').innerHTML;
    document.getElementById('btn343_1').disabled = true;
    document.getElementById('btn343_2').disabled = true;
}

function suite277() {
    document.getElementById('opacite343').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('277').innerHTML;
    document.getElementById('btn343_1').disabled = true;
    document.getElementById('btn343_2').disabled = true;
}

// - On peut encore y arriver ! - & - Elle est troublée ! On peut y arriver ! -
function suite466() {
    document.getElementById('opacite277').classList.remove('opacite');
    document.getElementById('opacite205').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('466').innerHTML;
    document.getElementById('btn277_1').disabled = true;
    document.getElementById('btn277_2').disabled = true;
    document.getElementById('btn205_1').disabled = true;
    document.getElementById('btn205_2').disabled = true;
}

// - Finissons-en ! -
function suite337() {
    document.getElementById('opacite466').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('337').innerHTML;
    document.getElementById('btn466_1').disabled = true;
    document.getElementById('btn466_2').disabled = true;
}

function suite473() {
    document.getElementById('opacite466').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('473').innerHTML;
    document.getElementById('btn466_1').disabled = true;
    document.getElementById('btn466_2').disabled = true;
}

// - Ennuis en vue ! -
function suite35() {
    document.getElementById('opacite293').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('35').innerHTML;
    document.getElementById('btn293').disabled = true;
}

// - Un pour tous, tous pour un ! - & - C'est dégoûtant ! -
function suite361() {
    document.getElementById('opacite153').classList.remove('opacite');
    document.getElementById('opacite91').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('361').innerHTML;
    document.getElementById('btn153_1').disabled = true;
    document.getElementById('btn153_2').disabled = true;
    document.getElementById('btn91_1').disabled = true;
    document.getElementById('btn91_2').disabled = true;
}

function suite146() {
    document.getElementById('opacite153').classList.remove('opacite');
    document.getElementById('opacite91').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('146').innerHTML;
    document.getElementById('btn153_1').disabled = true;
    document.getElementById('btn153_2').disabled = true;
    document.getElementById('btn91_1').disabled = true;
    document.getElementById('btn91_2').disabled = true;
}

// - Jouer dans le noir - & - C'est dégoûtant ! - & - C'est quoi ce bordel ? - & - Oh ! - & - Qu'est-ce que c'est ? - & - Hein ? - & - Claustrophobie -
function suite348_436() {
    document.getElementById('opacite436').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('348').innerHTML;
    document.getElementById('btn436_1').disabled = true;
    document.getElementById('btn436_2').disabled = true;
    document.getElementById('btn436_3').disabled = true;
    document.getElementById('btn436_4').disabled = true;
    document.getElementById('btn436_5').disabled = true;
    document.getElementById('btn436_6').disabled = true;
}

function suite348_69() {
    document.getElementById('opacite69').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('348').innerHTML;
    document.getElementById('btn69_1').disabled = true;
    document.getElementById('btn69_2').disabled = true;
    document.getElementById('btn69_3').disabled = true;
    document.getElementById('btn69_4').disabled = true;
    document.getElementById('btn69_5').disabled = true;
    document.getElementById('btn69_6').disabled = true;
    document.getElementById('btn69_7').disabled = true;
}

function suite348_432() {
    document.getElementById('opacite432').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('348').innerHTML;
    document.getElementById('btn432_1').disabled = true;
    document.getElementById('btn432_2').disabled = true;
    document.getElementById('btn432_3').disabled = true;
    document.getElementById('btn432_4').disabled = true;
    document.getElementById('btn432_5').disabled = true;
    document.getElementById('btn432_6').disabled = true;
    document.getElementById('btn432_7').disabled = true;
}
    
function suite348_363() {
    document.getElementById('opacite363').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('348').innerHTML;
    document.getElementById('btn363_1').disabled = true;
    document.getElementById('btn363_2').disabled = true;
    document.getElementById('btn363_3').disabled = true;
    document.getElementById('btn363_4').disabled = true;
    document.getElementById('btn363_5').disabled = true;
    document.getElementById('btn363_6').disabled = true;
    document.getElementById('btn363_7').disabled = true;
}
    
function suite348_386() {
    document.getElementById('opacite386').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('348').innerHTML;
    document.getElementById('btn386_1').disabled = true;
    document.getElementById('btn386_2').disabled = true;
    document.getElementById('btn386_3').disabled = true;
    document.getElementById('btn386_4').disabled = true;
    document.getElementById('btn386_5').disabled = true;
    document.getElementById('btn386_6').disabled = true;
    document.getElementById('btn386_7').disabled = true;
}
    
function suite348_62() {
    document.getElementById('opacite62').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('348').innerHTML;
    document.getElementById('btn62_1').disabled = true;
    document.getElementById('btn62_2').disabled = true;
    document.getElementById('btn62_3').disabled = true;
    document.getElementById('btn62_4').disabled = true;
    document.getElementById('btn62_5').disabled = true;
    document.getElementById('btn62_6').disabled = true;
    document.getElementById('btn62_7').disabled = true;
}

function suite69_436() {
    document.getElementById('opacite436').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('69').innerHTML;
    document.getElementById('btn436_1').disabled = true;
    document.getElementById('btn436_2').disabled = true;
    document.getElementById('btn436_3').disabled = true;
    document.getElementById('btn436_4').disabled = true;
    document.getElementById('btn436_5').disabled = true;
    document.getElementById('btn436_6').disabled = true;
}

function suite69_348() {
    document.getElementById('opacite348').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('69').innerHTML;
    document.getElementById('btn348_1').disabled = true;
    document.getElementById('btn348_2').disabled = true;
    document.getElementById('btn348_3').disabled = true;
    document.getElementById('btn348_4').disabled = true;
    document.getElementById('btn348_5').disabled = true;
    document.getElementById('btn348_6').disabled = true;
    document.getElementById('btn348_7').disabled = true;
}

function suite69_432() {
    document.getElementById('opacite432').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('69').innerHTML;
    document.getElementById('btn432_1').disabled = true;
    document.getElementById('btn432_2').disabled = true;
    document.getElementById('btn432_3').disabled = true;
    document.getElementById('btn432_4').disabled = true;
    document.getElementById('btn432_5').disabled = true;
    document.getElementById('btn432_6').disabled = true;
    document.getElementById('btn432_7').disabled = true;
}

function suite69_363() {
    document.getElementById('opacite363').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('69').innerHTML;
    document.getElementById('btn363_1').disabled = true;
    document.getElementById('btn363_2').disabled = true;
    document.getElementById('btn363_3').disabled = true;
    document.getElementById('btn363_4').disabled = true;
    document.getElementById('btn363_5').disabled = true;
    document.getElementById('btn363_6').disabled = true;
    document.getElementById('btn363_7').disabled = true;
}
    
function suite69_386() {
    document.getElementById('opacite386').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('69').innerHTML;
    document.getElementById('btn386_1').disabled = true;
    document.getElementById('btn386_2').disabled = true;
    document.getElementById('btn386_3').disabled = true;
    document.getElementById('btn386_4').disabled = true;
    document.getElementById('btn386_5').disabled = true;
    document.getElementById('btn386_6').disabled = true;
    document.getElementById('btn386_7').disabled = true;
}

function suite69_62() {
    document.getElementById('opacite62').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('69').innerHTML;
    document.getElementById('btn62_1').disabled = true;
    document.getElementById('btn62_2').disabled = true;
    document.getElementById('btn62_3').disabled = true;
    document.getElementById('btn62_4').disabled = true;
    document.getElementById('btn62_5').disabled = true;
    document.getElementById('btn62_6').disabled = true;
    document.getElementById('btn62_7').disabled = true;
}

function suite432_436() {
    document.getElementById('opacite436').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('432').innerHTML;
    document.getElementById('btn436_1').disabled = true;
    document.getElementById('btn436_2').disabled = true;
    document.getElementById('btn436_3').disabled = true;
    document.getElementById('btn436_4').disabled = true;
    document.getElementById('btn436_5').disabled = true;
    document.getElementById('btn436_6').disabled = true;
}

function suite432_348() {
    document.getElementById('opacite348').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('432').innerHTML;
    document.getElementById('btn348_1').disabled = true;
    document.getElementById('btn348_2').disabled = true;
    document.getElementById('btn348_3').disabled = true;
    document.getElementById('btn348_4').disabled = true;
    document.getElementById('btn348_5').disabled = true;
    document.getElementById('btn348_6').disabled = true;
    document.getElementById('btn348_7').disabled = true;
}

function suite432_69() {
    document.getElementById('opacite69').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('432').innerHTML;
    document.getElementById('btn69_1').disabled = true;
    document.getElementById('btn69_2').disabled = true;
    document.getElementById('btn69_3').disabled = true;
    document.getElementById('btn69_4').disabled = true;
    document.getElementById('btn69_5').disabled = true;
    document.getElementById('btn69_6').disabled = true;
    document.getElementById('btn69_7').disabled = true;
}

function suite432_363() {
    document.getElementById('opacite363').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('432').innerHTML;
    document.getElementById('btn363_1').disabled = true;
    document.getElementById('btn363_2').disabled = true;
    document.getElementById('btn363_3').disabled = true;
    document.getElementById('btn363_4').disabled = true;
    document.getElementById('btn363_5').disabled = true;
    document.getElementById('btn363_6').disabled = true;
    document.getElementById('btn363_7').disabled = true;
}

function suite432_386() {
    document.getElementById('opacite386').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('432').innerHTML;
    document.getElementById('btn386_1').disabled = true;
    document.getElementById('btn386_2').disabled = true;
    document.getElementById('btn386_3').disabled = true;
    document.getElementById('btn386_4').disabled = true;
    document.getElementById('btn386_5').disabled = true;
    document.getElementById('btn386_6').disabled = true;
    document.getElementById('btn386_7').disabled = true;
}

function suite432_62() {
    document.getElementById('opacite62').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('432').innerHTML;
    document.getElementById('btn62_1').disabled = true;
    document.getElementById('btn62_2').disabled = true;
    document.getElementById('btn62_3').disabled = true;
    document.getElementById('btn62_4').disabled = true;
    document.getElementById('btn62_5').disabled = true;
    document.getElementById('btn62_6').disabled = true;
    document.getElementById('btn62_7').disabled = true;
}

function suite363_436() {
    document.getElementById('opacite436').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('363').innerHTML;
    document.getElementById('btn436_1').disabled = true;
    document.getElementById('btn436_2').disabled = true;
    document.getElementById('btn436_3').disabled = true;
    document.getElementById('btn436_4').disabled = true;
    document.getElementById('btn436_5').disabled = true;
    document.getElementById('btn436_6').disabled = true;
}

function suite363_348() {
    document.getElementById('opacite348').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('363').innerHTML;
    document.getElementById('btn348_1').disabled = true;
    document.getElementById('btn348_2').disabled = true;
    document.getElementById('btn348_3').disabled = true;
    document.getElementById('btn348_4').disabled = true;
    document.getElementById('btn348_5').disabled = true;
    document.getElementById('btn348_6').disabled = true;
    document.getElementById('btn348_7').disabled = true;
}

function suite363_69() {
    document.getElementById('opacite69').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('363').innerHTML;
    document.getElementById('btn69_1').disabled = true;
    document.getElementById('btn69_2').disabled = true;
    document.getElementById('btn69_3').disabled = true;
    document.getElementById('btn69_4').disabled = true;
    document.getElementById('btn69_5').disabled = true;
    document.getElementById('btn69_6').disabled = true;
    document.getElementById('btn69_7').disabled = true;
}
    
function suite363_432() {
    document.getElementById('opacite432').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('363').innerHTML;
    document.getElementById('btn432_1').disabled = true;
    document.getElementById('btn432_2').disabled = true;
    document.getElementById('btn432_3').disabled = true;
    document.getElementById('btn432_4').disabled = true;
    document.getElementById('btn432_5').disabled = true;
    document.getElementById('btn432_6').disabled = true;
    document.getElementById('btn432_7').disabled = true;
}

function suite363_386() {
    document.getElementById('opacite386').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('363').innerHTML;
    document.getElementById('btn386_1').disabled = true;
    document.getElementById('btn386_2').disabled = true;
    document.getElementById('btn386_3').disabled = true;
    document.getElementById('btn386_4').disabled = true;
    document.getElementById('btn386_5').disabled = true;
    document.getElementById('btn386_6').disabled = true;
    document.getElementById('btn386_7').disabled = true;
}

function suite363_62() {
    document.getElementById('opacite386').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('363').innerHTML;
    document.getElementById('btn62_1').disabled = true;
    document.getElementById('btn62_2').disabled = true;
    document.getElementById('btn62_3').disabled = true;
    document.getElementById('btn62_4').disabled = true;
    document.getElementById('btn62_5').disabled = true;
    document.getElementById('btn62_6').disabled = true;
    document.getElementById('btn62_7').disabled = true;
}

function suite386_436() {
    document.getElementById('opacite436').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('386').innerHTML;
    document.getElementById('btn436_1').disabled = true;
    document.getElementById('btn436_2').disabled = true;
    document.getElementById('btn436_3').disabled = true;
    document.getElementById('btn436_4').disabled = true;
    document.getElementById('btn436_5').disabled = true;
    document.getElementById('btn436_6').disabled = true;
}

function suite386_348() {
    document.getElementById('opacite348').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('386').innerHTML;
    document.getElementById('btn348_1').disabled = true;
    document.getElementById('btn348_2').disabled = true;
    document.getElementById('btn348_3').disabled = true;
    document.getElementById('btn348_4').disabled = true;
    document.getElementById('btn348_5').disabled = true;
    document.getElementById('btn348_6').disabled = true;
    document.getElementById('btn348_7').disabled = true;
}

function suite386_69() {
    document.getElementById('opacite69').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('386').innerHTML;
    document.getElementById('btn69_1').disabled = true;
    document.getElementById('btn69_2').disabled = true;
    document.getElementById('btn69_3').disabled = true;
    document.getElementById('btn69_4').disabled = true;
    document.getElementById('btn69_5').disabled = true;
    document.getElementById('btn69_6').disabled = true;
    document.getElementById('btn69_7').disabled = true;
}

function suite386_432() {
    document.getElementById('opacite432').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('386').innerHTML;
    document.getElementById('btn432_1').disabled = true;
    document.getElementById('btn432_2').disabled = true;
    document.getElementById('btn432_3').disabled = true;
    document.getElementById('btn432_4').disabled = true;
    document.getElementById('btn432_5').disabled = true;
    document.getElementById('btn432_6').disabled = true;
    document.getElementById('btn432_7').disabled = true;
}

function suite386_363() {
    document.getElementById('opacite363').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('386').innerHTML;
    document.getElementById('btn363_1').disabled = true;
    document.getElementById('btn363_2').disabled = true;
    document.getElementById('btn363_3').disabled = true;
    document.getElementById('btn363_4').disabled = true;
    document.getElementById('btn363_5').disabled = true;
    document.getElementById('btn363_6').disabled = true;
    document.getElementById('btn363_7').disabled = true;
}

function suite386_62() {
    document.getElementById('opacite62').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('386').innerHTML;
    document.getElementById('btn62_1').disabled = true;
    document.getElementById('btn62_2').disabled = true;
    document.getElementById('btn62_3').disabled = true;
    document.getElementById('btn62_4').disabled = true;
    document.getElementById('btn62_5').disabled = true;
    document.getElementById('btn62_6').disabled = true;
    document.getElementById('btn62_7').disabled = true;
}

function suite62_436() {
    document.getElementById('opacite436').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('62').innerHTML;
    document.getElementById('btn436_1').disabled = true;
    document.getElementById('btn436_2').disabled = true;
    document.getElementById('btn436_3').disabled = true;
    document.getElementById('btn436_4').disabled = true;
    document.getElementById('btn436_5').disabled = true;
    document.getElementById('btn436_6').disabled = true;
}

function suite62_348() {
    document.getElementById('opacite348').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('62').innerHTML;
    document.getElementById('btn348_1').disabled = true;
    document.getElementById('btn348_2').disabled = true;
    document.getElementById('btn348_3').disabled = true;
    document.getElementById('btn348_4').disabled = true;
    document.getElementById('btn348_5').disabled = true;
    document.getElementById('btn348_6').disabled = true;
    document.getElementById('btn348_7').disabled = true;
}

function suite62_69() {
    document.getElementById('opacite69').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('62').innerHTML;
    document.getElementById('btn69_1').disabled = true;
    document.getElementById('btn69_2').disabled = true;
    document.getElementById('btn69_3').disabled = true;
    document.getElementById('btn69_4').disabled = true;
    document.getElementById('btn69_5').disabled = true;
    document.getElementById('btn69_6').disabled = true;
    document.getElementById('btn69_7').disabled = true;
}

function suite62_432() {
    document.getElementById('opacite432').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('62').innerHTML;
    document.getElementById('btn432_1').disabled = true;
    document.getElementById('btn432_2').disabled = true;
    document.getElementById('btn432_3').disabled = true;
    document.getElementById('btn432_4').disabled = true;
    document.getElementById('btn432_5').disabled = true;
    document.getElementById('btn432_6').disabled = true;
    document.getElementById('btn432_7').disabled = true;
}

function suite62_363() {
    document.getElementById('opacite363').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('62').innerHTML;
    document.getElementById('btn363_1').disabled = true;
    document.getElementById('btn363_2').disabled = true;
    document.getElementById('btn363_3').disabled = true;
    document.getElementById('btn363_4').disabled = true;
    document.getElementById('btn363_5').disabled = true;
    document.getElementById('btn363_6').disabled = true;
    document.getElementById('btn363_7').disabled = true;
}

function suite62_386() {
    document.getElementById('opacite386').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('62').innerHTML;
    document.getElementById('btn386_1').disabled = true;
    document.getElementById('btn386_2').disabled = true;
    document.getElementById('btn386_3').disabled = true;
    document.getElementById('btn386_4').disabled = true;
    document.getElementById('btn386_5').disabled = true;
    document.getElementById('btn386_6').disabled = true;
    document.getElementById('btn386_7').disabled = true;
}

// - C'est dégoûtant ! - & - C'est quoi ce bordel ? - & - Oh ! - & - Qu'est-ce que c'est ? - & - Hein ? - & - Claustrophobie -
function suite276() {
    document.getElementById('opacite348').classList.remove('opacite');
    document.getElementById('opacite69').classList.remove('opacite');
    document.getElementById('opacite432').classList.remove('opacite');
    document.getElementById('opacite363').classList.remove('opacite');
    document.getElementById('opacite386').classList.remove('opacite');
    document.getElementById('opacite62').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('276').innerHTML;
    document.getElementById('btn348_1').disabled = true;
    document.getElementById('btn348_2').disabled = true;
    document.getElementById('btn348_3').disabled = true;
    document.getElementById('btn348_4').disabled = true;
    document.getElementById('btn348_5').disabled = true;
    document.getElementById('btn348_6').disabled = true;
    document.getElementById('btn348_7').disabled = true;
    document.getElementById('btn69_1').disabled = true;
    document.getElementById('btn69_2').disabled = true;
    document.getElementById('btn69_3').disabled = true;
    document.getElementById('btn69_4').disabled = true;
    document.getElementById('btn69_5').disabled = true;
    document.getElementById('btn69_6').disabled = true;
    document.getElementById('btn69_7').disabled = true;
    document.getElementById('btn432_1').disabled = true;
    document.getElementById('btn432_2').disabled = true;
    document.getElementById('btn432_3').disabled = true;
    document.getElementById('btn432_4').disabled = true;
    document.getElementById('btn432_5').disabled = true;
    document.getElementById('btn432_6').disabled = true;
    document.getElementById('btn432_7').disabled = true;
    document.getElementById('btn363_1').disabled = true;
    document.getElementById('btn363_2').disabled = true;
    document.getElementById('btn363_3').disabled = true;
    document.getElementById('btn363_4').disabled = true;
    document.getElementById('btn363_5').disabled = true;
    document.getElementById('btn363_6').disabled = true;
    document.getElementById('btn363_7').disabled = true;
    document.getElementById('btn386_1').disabled = true;
    document.getElementById('btn386_2').disabled = true;
    document.getElementById('btn386_3').disabled = true;
    document.getElementById('btn386_4').disabled = true;
    document.getElementById('btn386_5').disabled = true;
    document.getElementById('btn386_6').disabled = true;
    document.getElementById('btn386_7').disabled = true;
    document.getElementById('btn62_1').disabled = true;
    document.getElementById('btn62_2').disabled = true;
    document.getElementById('btn62_3').disabled = true;
    document.getElementById('btn62_4').disabled = true;
    document.getElementById('btn62_5').disabled = true;
    document.getElementById('btn62_6').disabled = true;
    document.getElementById('btn62_7').disabled = true;
}

// - Sans équivoque -
function suite474() {
    document.getElementById('opacite274').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('474').innerHTML;
    document.getElementById('btn274').disabled = true;
}

// - L'allée -
function suite23() {
    document.getElementById('opacite474').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('23').innerHTML;
    document.getElementById('btn474_1').disabled = true;
    document.getElementById('btn474_2').disabled = true;
}

// - Mais qu'est-ce que... - & - Ça se rapproche ! -
function suite365() {
    document.getElementById('opacite23').classList.remove('opacite');
    document.getElementById('opacite81').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('365').innerHTML;
    document.getElementById('btn23_1').disabled = true;
    document.getElementById('btn23_2').disabled = true;
    document.getElementById('btn23_3').disabled = true;
    document.getElementById('btn23_4').disabled = true;
    document.getElementById('btn81_1').disabled = true;
    document.getElementById('btn81_2').disabled = true;
    document.getElementById('btn81_3').disabled = true;
}

function suite81() {
    document.getElementById('opacite23').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('81').innerHTML;
    document.getElementById('btn23_1').disabled = true;
    document.getElementById('btn23_2').disabled = true;
    document.getElementById('btn23_3').disabled = true;
    document.getElementById('btn23_4').disabled = true;
}

// - Jardin au clair de lune - & - Golem ! - & - Anges et Démons -
function suite253() {
    document.getElementById('opacite8').classList.remove('opacite');
    document.getElementById('opacite309').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('253').innerHTML;
    document.getElementById('btn8_1').disabled = true;
    document.getElementById('btn8_2').disabled = true;
    document.getElementById('btn8_3').disabled = true;
    document.getElementById('btn309_1').disabled = true;
    document.getElementById('btn309_2').disabled = true;
}

function suite309() {
    document.getElementById('opacite8').classList.remove('opacite');
    document.getElementById('opacite253').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('309').innerHTML;
    document.getElementById('btn8_1').disabled = true;
    document.getElementById('btn8_2').disabled = true;
    document.getElementById('btn8_3').disabled = true;
    document.getElementById('btn253_1').disabled = true;
    document.getElementById('btn253_2').disabled = true;
}

function suite7() {
    document.getElementById('opacite8').classList.remove('opacite');
    document.getElementById('opacite253').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('7').innerHTML;
    document.getElementById('btn8_1').disabled = true;
    document.getElementById('btn8_2').disabled = true;
    document.getElementById('btn8_3').disabled = true;
    document.getElementById('btn253_1').disabled = true;
    document.getElementById('btn253_2').disabled = true;
}

// - Mais que se passe-t-il ? -
function suite46() {
    document.getElementById('opacite7').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('46').innerHTML;
    document.getElementById('btn7_1').disabled = true;
    document.getElementById('btn7_2').disabled = true;
    document.getElementById('btn7_3').disabled = true;
}

// - On a manqué un truc ? - & - De la brume ? -
function suite65() {
    document.getElementById('opacite46').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('65').innerHTML;
    document.getElementById('btn46_1').disabled = true;
    document.getElementById('btn46_2').disabled = true;
}

function suite20() {
    document.getElementById('opacite46').classList.remove('opacite');
    document.getElementById('opacite168').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('20').innerHTML;
    document.getElementById('btn46_1').disabled = true;
    document.getElementById('btn46_2').disabled = true;
    document.getElementById('btn168').disabled = true;
}

// - Le Bureau -
function suite168() {
    document.getElementById('opacite65').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('168').innerHTML;
    document.getElementById('btn65').disabled = true;
}

// Audio
function btnAudio() {
    window.open('https://www.youtube.com/watch?v=BuhiXmnMYPA&ab_channel=AmbientWorlds', '_blank');
}