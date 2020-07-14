let uploadBtn = document.getElementById('upload-btn');
let message = document.getElementById('message');
let cloudsContainer = document.getElementById('clouds-container');
let clouds = document.getElementsByClassName('cloud');
let cloudComponents = document.getElementsByClassName('cloud-components');
let particles = document.getElementsByClassName('particles');

function animate() {
    message.classList.add("fade-out");
    setTimeout(() => {
        clouds[0].classList.add("slide-LR");
        clouds[1].classList.add("slide-up-down");
        clouds[2].classList.add("slide-RL");
        for (let i=0; i<particles.length; i++){
            particles[i].classList.add("slide-up");
        }
        for (let i=0; i<cloudComponents.length; i++){
            cloudComponents[i].classList.add("to-blue-color");
        }
    }, 600);
    setTimeout(() => {
        message.innerText = "DONE";
        message.classList.add("fade-in");
        cloudsContainer.classList.add("fade-out");
    }, 5500);
}

uploadBtn.addEventListener("click", animate);