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

let gradIndex = 0;
// checks if there are any stored data
if(window.localStorage.length > 0) {
    // set gradIndex to the length of localStorage
    // e.g. if there are 10 stored data set gradIndex to 11
    gradIndex = window.localStorage.length;
    
    // updates index, history
    document.getElementById('history-header').innerHTML = "history (" + window.localStorage.length + ")";
    let parent = document.getElementById("flex-container");
    
    // this loop goes through the localStorage & creates child div
    for(let i = 0; i < window.localStorage.length; i++) {
        let inner = JSON.parse(window.localStorage[i]);

        let child = document.createElement('div');
        let childName = 'flex-item-' + i;
        child.setAttribute('id', childName);
        child.setAttribute('class', 'flex-item');
        parent.appendChild(child);
        document.getElementById(childName).style.background = inner[0].value;
    }
} else {
    document.getElementById('history-header').innerHTML = "empty!"
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
    // changes from "none" to "block" for the copy icon
    document.getElementById("copy").style.display = "block";
    
    // pushing the gradient data to localStorage
    let gradData = [];
    gradData.push({
        "id": gradIndex, 
        "value" : thePad
    })
    localStorage.setItem(gradIndex, JSON.stringify(gradData))
    gradIndex++;

    // updates index, history
    document.getElementById('history-header').innerHTML = "history (" + window.localStorage.length + ")";

    // creates child div and displays the gradient
    let parent = document.getElementById("flex-container");
    let child = document.createElement('div');
    let childName = 'flex-item-' + gradIndex;
    child.setAttribute('id', childName);
    child.setAttribute('class', 'flex-item');
    parent.appendChild(child);
    document.getElementById(childName).style.background = thePad;
    
})

document.getElementById('copy').addEventListener("click", () => {
    let copyText = document.getElementById("gradient-output").innerHTML;
    window.prompt("Copy to clipboard: Press Command + C or Ctrl + C, Enter", copyText);
})