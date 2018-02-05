// this function gives us a random hex code
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// this function prepare the linear gradient,
// outputs gradient & background code
function setRandomColor() {
    var thePad = document.getElementById('color-pad').style.background = 'linear-gradient(' +
        'to right' + ', ' + getRandomColor() + ' 0%, ' + getRandomColor() + ' 100%)';

    document.getElementById("gradient-output").innerHTML = thePad;

    return thePad;
}

//document.getElementById("color-pad").css = setRandomColor();