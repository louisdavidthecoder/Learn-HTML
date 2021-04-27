let welcome = document.querySelector('.typewriter');
let welcomeMessage = "Learn";
let i = 0;

function type() {
    if(i < welcomeMessage.length) {
       welcome.innerHTML += welcomeMessage.charAt(i);
       i++;
       setTimeout(type, 700); 
    }
};

type();