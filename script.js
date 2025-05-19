// Function for the rainbow text
function rainbowTextEffect() {
    var rainbowText = document.createElement('h1');
    rainbowText.textContent = "Welcome to the Rainbow!";
    document.body.appendChild(rainbowText);
    
    var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
    var i = 0;

    setInterval(function() {
        rainbowText.style.color = colors[i % colors.length];
        i++;
    }, 500);
}

// Function for confetti
function confettiEffect() {
    function createConfetti() {
        var confetti = document.createElement('div');
        confetti.style.position = 'absolute';
        confetti.style.top = Math.random() * window.innerHeight + 'px';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        confetti.style.borderRadius = '50%';
        confetti.style.animation = 'fall 3s infinite linear';
        document.body.appendChild(confetti);

        setTimeout(function() {
            confetti.remove();
        }, 3000);
    }

    setInterval(createConfetti, 100);
}

// Function for bouncing ball
function bouncingBallEffect() {
    var ball = document.createElement('div');
    ball.style.position = 'absolute';
    ball.style.width = '50px';
    ball.style.height = '50px';
    ball.style.backgroundColor = 'pink';
    ball.style.borderRadius = '50%';
    ball.style.left = '50px';
    ball.style.top = '50px';
    document.body.appendChild(ball);

    var dx = 2;
    var dy = 2;

    function moveBall() {
        var ballRect = ball.getBoundingClientRect();

        if (ballRect.left + ballRect.width >= window.innerWidth || ballRect.left <= 0) {
            dx = -dx;
        }
        if (ballRect.top + ballRect.height >= window.innerHeight || ballRect.top <= 0) {
            dy = -dy;
        }

        ball.style.left = ballRect.left + dx + 'px';
        ball.style.top = ballRect.top + dy + 'px';
    }

    setInterval(moveBall, 10);
}

// Function for dancing text
function dancingTextEffect() {
    var dancingText = document.createElement('h2');
    dancingText.textContent = "Watch me dance!";
    document.body.appendChild(dancingText);

    var position = 0;
    var direction = 1;

    function dance() {
        dancingText.style.transform = `translateY(${position}px)`;
        position += direction;

        if (position >= 30 || position <= -30) {
            direction = -direction;
        }
    }

    setInterval(dance, 50);
}

// Function for spinning wheel
function spinningWheelEffect() {
    var wheel = document.createElement('div');
    wheel.style.width = '100px';
    wheel.style.height = '100px';
    wheel.style.border = '10px solid blue';
    wheel.style.borderRadius = '50%';
    wheel.style.borderTop = '10px solid red';
    wheel.style.position = 'absolute';
    wheel.style.left = '50%';
    wheel.style.top = '50%';
    wheel.style.transformOrigin = 'center';
    document.body.appendChild(wheel);

    var angle = 0;
    function spin() {
        angle += 5;
        wheel.style.transform = `rotate(${angle}deg)`;
    }

    setInterval(spin, 50);
}

// Function for fireworks display
function fireworksEffect() {
    function createFirework() {
        var firework = document.createElement('div');
        firework.style.position = 'absolute';
        firework.style.top = Math.random() * window.innerHeight + 'px';
        firework.style.left = Math.random() * window.innerWidth + 'px';
        firework.style.width = '20px';
        firework.style.height = '20px';
        firework.style.borderRadius = '50%';
        firework.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        firework.style.animation = 'explode 1s forwards';
        document.body.appendChild(firework);

        setTimeout(function() {
            firework.remove();
        }, 1000);
    }

    setInterval(createFirework, 300);
}

// Function for text that follows the mouse
function mouseFollowerTextEffect() {
    var mouseText = document.createElement('div');
    mouseText.textContent = 'Follow me!';
    mouseText.style.position = 'absolute';
    mouseText.style.fontSize = '24px';
    mouseText.style.color = 'purple';
    document.body.appendChild(mouseText);

    document.addEventListener('mousemove', function(event) {
        mouseText.style.left = event.pageX + 'px';
        mouseText.style.top = event.pageY + 'px';
    });
}

// Function for sound effect on click
function clickSoundEffect() {
    var sound = new Audio('https://www.soundjay.com/button/beep-07.wav');
    document.body.addEventListener('click', function() {
        sound.play();
    });
}

// Function for displaying the Rainbow Roach image
function rainbowRoachEffect() {
    var img = document.createElement('img');
    img.src = 'https://raw.githubusercontent.com/AlexandroLuis/xss-fun/refs/heads/main/Rainbow_Roach.gif';
    document.body.appendChild(img);
}


function activateEffects() {
    rainbowTextEffect();
    confettiEffect();
    bouncingBallEffect();
    dancingTextEffect();
    spinningWheelEffect();
    fireworksEffect();
    mouseFollowerTextEffect();
    clickSoundEffect();
    rainbowRoachEffect();
}
