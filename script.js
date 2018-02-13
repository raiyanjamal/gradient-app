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
    var reds = ["179, 27, 27", "128, 0, 0", "206, 22, 32", "169, 0, 0", "227, 66, 52", "131, 0, 0", "60, 20, 20", "255, 0, 0", "112, 28, 28", "204, 0, 0", "178, 34, 34", "164, 0, 0", "195, 0, 0", "255, 8, 0", "67, 0, 0", "215, 59, 62", "208, 0, 0", "139, 0, 0"];
    var oranges = ["255, 229, 6", "255, 179, 71", "255, 168, 18", "255, 167, 0", "255, 140, 0", "255, 127, 0", "255, 117, 24", "255, 103, 0", "204, 85, 0", "255, 191, 0", "255, 219, 88", "244, 196, 48", "255, 255, 0"];

    var getReds = reds[Math.floor(Math.random() * 18)];
    var getOranges = oranges[Math.floor(Math.random() * 13)];

    var outputReds = "rgb(" + getReds + ")";
    return outputReds;
}
// this function gives us a random RED color
function getRandomOrange() {
    var oranges = ["255, 229, 6", "255, 179, 71", "255, 168, 18", "255, 167, 0", "255, 140, 0", "255, 127, 0", "255, 117, 24", "255, 103, 0", "204, 85, 0", "255, 191, 0", "255, 219, 88", "244, 196, 48", "255, 255, 0"];

    var getOranges = oranges[Math.floor(Math.random() * 13)];

    var outputOranges = "rgb(" + getOranges + ")";
    return outputOranges;
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
    var thePad = document.getElementById('color-pad').style.background = 'linear-gradient(' +
        getRandomAngle() + 'deg' + ', ' + getRandomColor() + ' 0%, ' + getRandomColor() + ' 100%)';
    document.getElementById("gradient-output").innerHTML = thePad;
}

function setRandomRed() {
    var thePad2 = document.getElementById('color-pad2').style.background = 'linear-gradient(' +
        getRandomAngle() + 'deg' + ', ' + getRandomRed() + ' 0%, ' + getRandomOrange() + ' 100%)';
    document.getElementById("gradient-output2").innerHTML = thePad2;
}