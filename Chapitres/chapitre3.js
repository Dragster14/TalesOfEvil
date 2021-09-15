let vHistoire = document.getElementById('histoire');

function videoDaphne() {
    window.open('http://www.talesofevil.com/wp-content/uploads/daphne-1-fra.mp4');
}

// - Chapitre 3 -
function suite83() {
    document.getElementById('opacite330').classList.remove('opacite');
    vHistoire.innerHTML += document.getElementById('83').innerHTML;
    document.getElementById('btn330_1').disabled = true;
    document.getElementById('btn330_2').disabled = true;
}