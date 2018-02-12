// this function gives us a random color-stop
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// this function gives us a random RED color
function getRandomRed() {
    var reds = ["50, 20, 20", "179, 27, 27", "128, 0, 0", "206, 22, 32", "169, 0, 0", "227, 66, 52", "131, 0, 0", "60, 20, 20", "255, 0, 0", "112, 28, 28", "204, 0, 0", "178, 34, 34", "164, 0, 0", "195, 0, 0", "255, 8, 0", "67, 0, 0", "215, 59, 62", "208, 0, 0", "139, 0, 0"];

    var getReds = reds[Math.floor(Math.random() * 19)];

    var outputRGB = "rgb(" + getReds + ")";
    return outputRGB;
}
console.log(getRandomRed());

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
}

function setRandomRed() {
    var inAngle = getRandomAngle();
    var thePad2 = document.getElementById('color-pad2').style.background = 'linear-gradient(' +
        inAngle + 'deg' + ', ' + getRandomRed() + ' 0%, ' + "rgb(239, 137, 6)" + ' 100%)';
    document.getElementById("gradient-output2").innerHTML = thePad2;
}