const body = document.querySelector("body");
const letters = 'abcdefghijklmnopqrstuvwxyz';

function randomLetter() { 
    return letters[Math.floor(Math.random() * 25)];
}
let secretLetter = randomLetter();
console.log(secretLetter);

document.body.addEventListener('keyup', function(event) {
    const userKey = event.key.toLowerCase();
    if (secretLetter === userKey) {
        const h3Tag = document.createElement("h3");
        h3Tag.textContent = "SECRET KEY PRESSED " + secretLetter;
        body.appendChild(h3Tag);
        secretLetter = randomLetter();
        console.log(secretLetter);
    }  
});