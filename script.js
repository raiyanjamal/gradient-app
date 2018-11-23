// this function gives us a random color-stop
let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// this function gives us a random RED color
// let getRandomRed = () => {
//     let reds = ["179, 27, 27", "128, 0, 0", "206, 22, 32", "169, 0, 0", "227, 66, 52", "131, 0, 0", "60, 20, 20", "255, 0, 0", "112, 28, 28", "204, 0, 0", "178, 34, 34", "164, 0, 0", "195, 0, 0", "255, 8, 0", "67, 0, 0", "215, 59, 62", "208, 0, 0", "139, 0, 0"];
//     let oranges = ["255, 229, 6", "255, 179, 71", "255, 168, 18", "255, 167, 0", "255, 140, 0", "255, 127, 0", "255, 117, 24", "255, 103, 0", "204, 85, 0", "255, 191, 0", "255, 219, 88", "244, 196, 48", "255, 255, 0"];

//     let getReds = reds[Math.floor(Math.random() * 18)];
//     let getOranges = oranges[Math.floor(Math.random() * 13)];

//     let outputReds = "rgb(" + getReds + ")";
//     return outputReds;
// }

// this function gives us a random RED color
// let getRandomOrange = () => {
//     let oranges = ["255, 229, 6", "255, 179, 71", "255, 168, 18", "255, 167, 0", "255, 140, 0", "255, 127, 0", "255, 117, 24", "255, 103, 0", "204, 85, 0", "255, 191, 0", "255, 219, 88", "244, 196, 48", "255, 255, 0"];

//     let getOranges = oranges[Math.floor(Math.random() * 13)];

//     let outputOranges = "rgb(" + getOranges + ")";
//     return outputOranges;
// }

// this function gives us a random direction
let getRandomAngle = () => {
    let angle = 4.04;
    angle *= Math.floor(Math.random() * 90);
    return Math.floor(angle);
}

// this function prepare the linear gradient,
// outputs gradient & background code
let setRandomColor = () => {
    let thePad = document.getElementById('color-pad').style.background = `linear-gradient(${getRandomAngle()}deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`;

    document.getElementById("gradient-output").innerHTML = thePad;
    let elmnt = document.getElementById("color-pad");
    elmnt.scrollIntoView({ behavior: 'smooth' });
}