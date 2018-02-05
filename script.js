function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomColor() {
    var thePad = document.getElementById('color-pad').style.background = 'linear-gradient(' +
        'to right' + ', ' + getRandomColor() + ' 0%, ' + getRandomColor() + ' 100%)';

    document.getElementById("gradient-output").innerHTML = thePad;

    console.log(thePad);
    return thePad;
}

document.getElementById("gradient-output").innerHTML = setRandomColor();