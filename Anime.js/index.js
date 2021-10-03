import anime from './node_modules/animejs/lib/anime.es.js';


/* BEGIN ANIMATION */

let enter = document.getElementById("enter"); 
let video = document.getElementById("video"); 


let animationOpacity = anime.timeline({
  autoplay:false,
  duration: 2000,
});

animationOpacity
.add({
  targets: ".enter",
  opacity: [1,0],
  delay: 1000,
  duration: 3000,
})
.add({
  targets: ".enter",
  translateY: "-100vh",
  delay: 1000,
  duration: 100,
});


function hoverEnter(){
anime({
  targets: ".enter",
  scale:[1,1.2],
  duration: 500,
  easing: 'spring(1, 80, 10, 40)',
})
}

function hoverLeave(){
  anime({
    targets: ".enter",
    scale:[1.2,1],
    duration: 500,
  })
}

let animationUp = anime({
  autoplay:false,
  targets: ".up",
  translateY: "-48vh",
  delay: 800,
  duration: 4000,
  backgroundColor: ["#00F6DE", "#C500ED"],
  easing: 'easeInOutExpo'
});

let animationDown = anime({
  autoplay:false,
  targets: ".down",
  translateY: "48vh",
  delay: 800,
  duration: 4000,
  backgroundColor: ["#00F6DE", "#C500ED"],
  easing: 'easeInOutExpo'
});


function beginAnimation(){
  animationOpacity.reset();
  animationDown.reset();
  animationUp.reset();
  animationOpacity.play();
  animationDown.play();
  animationUp.play();
}

function homeToVideo(){
 HomeTilt.play();
 bodyTilt.completed = false;
}

function videoToHome(){
  VideoTilt.play();
  VideoTilt.completed = false;
}

let HomeTilt = anime.timeline({
  autoplay:false,
  duration: 4000,
});

HomeTilt
.add({
  targets: "main",
  rotateZ: 45,
  delay:500,
  duration: 3000,
  easing: 'easeOutExpo',
})
.add({
  targets: '.title',
  translateX: '100vw',
  duration: 2500,
  easing:'easeInCubic',
}, '-=2900')
.add({
  targets: '.videoDiv',
  translateX: '100vw',
  duration: 2500,
  easing:'easeOutCubic',
}, '-=2000')
.add({
  targets: "main",
  rotateZ: 0,
  delay:500,
  duration: 3000,
  easing: 'easeOutExpo',
}, '-=900')


let VideoTilt= anime.timeline({
  autoplay:false,
  duration: 4000,
});


VideoTilt
.add({
  targets: "main",
  rotateZ: 45,
  delay:500,
  duration: 3000,
  easing: 'easeOutExpo',
})
.add({
  targets: '.videoDiv',
  translateX: '0',
  duration: 2500,
  easing:'easeOutCubic',
}, '-=2900')
.add({
  targets: '.title',
  translateX: '0',
  duration: 2500,
  easing:'easeInCubic',
}, '-=2000')
.add({
  targets: "main",
  rotateZ: 0,
  delay:500,
  duration: 3000,
  easing: 'easeOutExpo',
}, '-=900')


anime({
  autoplay:true,
  loop: true,
  targets: ".videoTitle",
  duration:10000,
  color: ["#2044E8","#C500ED","#17F105","#2044E8"],
});


enter.addEventListener("click", beginAnimation);
video.addEventListener('click', homeToVideo);
document.getElementById('back').addEventListener('click', videoToHome);
enter.addEventListener("mouseover", hoverEnter);
enter.addEventListener("mouseout", hoverLeave);