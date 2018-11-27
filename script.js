// this function gives us a random color-stop
let getRandomColor = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// this function gives us a random angle in deg
let getRandomAngle = () => {
    let angle = 4.04;
    angle *= Math.floor(Math.random() * 90);
    return Math.floor(angle);
}

// finally, generates the linear-gradient
let getRandomGradient = () => {
    return `linear-gradient(${getRandomAngle()}deg, ${getRandomColor()} 0%, ${getRandomColor()} 100%)`;
}

// here on click, it prepares the linear gradient,
// outputs the gradient & also background code
document.getElementById('sub-btn').addEventListener("click", () => {
    // scroll to color-pad smoothly
    let elmnt = document.getElementById("color-pad");
    elmnt.scrollIntoView({ behavior: 'smooth' });
    // updates css, brackground
    let thePad = document.getElementById('color-pad').style.background = getRandomGradient();
    // updates the output view
    document.getElementById("gradient-output").innerHTML = thePad;
})