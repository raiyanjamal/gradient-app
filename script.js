// this function gives us a random color-stop
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// this function gives us a random direction
function getRandomAngle() {
    var angle = 4.04;
    angle *= Math.floor(Math.random() * 90);
    return Math.floor(angle);
}
// this function prepare the linear gradient,
// outputs gradient & background code
function setRandomColor() {
    var inAngle = getRandomAngle();
    var thePad = document.getElementById('color-pad').style.background = 'linear-gradient(' +
        inAngle + 'deg' + ', ' + getRandomColor() + ' 0%, ' + getRandomColor() + ' 100%)';
    document.getElementById("gradient-output").innerHTML = thePad;
    return thePad;
}