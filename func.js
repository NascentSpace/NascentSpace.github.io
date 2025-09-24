$(document).ready(function() {
  $('.page').css('clip-path', 'circle(0% at 50% 50%)');
  $('.page').first().css('clip-path', 'circle(100% at 50% 50%)');
  $('.page').first().css('z-index', 2);

particlesJS('particles-js',
  
  {
    "particles": {
    "number": {
      "value": 142,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#f03838"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 4
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 0,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1.2,
      "direction": "bottom",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "remove"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 0.12140833670578695
        }
      },
      "bubble": {
        "distance": 400,
        "size": 11.98724557071278,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  }
  }

);
});

var Menu1 = false;
var Menu2 = false;
var Menu3 = false;
var Menu4 = false;

function TestsFunction() {
    var T = document.getElementById("TestsDiv");
    if (T.style.display==="none"){
        T.style.display = "block";
    } else{
        T.style.display = "none";  // <-- Set it to block
    }
}
    
function AboutFunction() {
    var A = document.getElementById("About"), B = document.getElementById("Portfolio"), C = document.getElementById("Contact");
    B.style.display = "none";
    C.style.display = "none";
    A.style.display = "block";
}

function PortfolioFunction() {
    var A = document.getElementById("Portfolio"), B = document.getElementById("About"), C = document.getElementById("Contact");
    B.style.display = "none";
    C.style.display = "none";
    A.style.display = "block";
}

function ContactFunction() {
    var A = document.getElementById("Contact"), B = document.getElementById("Portfolio"), C = document.getElementById("About");
    B.style.display = "none";
    C.style.display = "none";
    A.style.display = "block";
}

function Fade() {
    ("p").fadeOut()
}

//Testing zone

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function menuexpand1() {
    var M1 = document.getElementById("1")
    var M2 = document.getElementById("2")
    var M3 = document.getElementById("3")
    var M4 = document.getElementById("4")
    M1.style.zIndex = "1000";
    M2.style.zIndex = "1";
    M3.style.zIndex = "1";
    M4.style.zIndex = "1";
    demouse()

    if (!Menu1){
        M1.classList.add('expanded');
        Menu1 = true;
        console.log("art expanded")
        sleep(250).then(() => {
            showcontent("Art");
        });
    }
}

function menuexpand2() {
    var M1 = document.getElementById("1")
    var M2 = document.getElementById("2")
    var M3 = document.getElementById("3")
    var M4 = document.getElementById("4")
    M1.style.zIndex = "1";
    M2.style.zIndex = "1000";
    M3.style.zIndex = "1";
    M4.style.zIndex = "1";
    console.log("games expanded")
    demouse()
    console.log("Expandfunc")
    if (!Menu2){
        M2.classList.add('expanded');
        Menu2 = true;
        console.log(Menu2)
        sleep(250).then(() => {
            showcontent("Films");
        });
    }
}

function menuexpand3() {
    var M1 = document.getElementById("1")
    var M2 = document.getElementById("2")
    var M3 = document.getElementById("3")
    var M4 = document.getElementById("4")
    M1.style.zIndex = "1";
    M2.style.zIndex = "1";
    M3.style.zIndex = "1000";
    M4.style.zIndex = "1";

    demouse()

    if (!Menu3){
        M3.classList.add('expanded');
        Menu3 = true;
        sleep(250).then(() => {
            showcontent("Games");
        });
    }
}

function menuexpand4() {
    var M1 = document.getElementById("1")
    var M2 = document.getElementById("2")
    var M3 = document.getElementById("3")
    var M4 = document.getElementById("4")
    M1.style.zIndex = "1";
    M2.style.zIndex = "1";
    M3.style.zIndex = "1";
    M4.style.zIndex = "1000";

    demouse()

    if (!Menu4){
        M4.classList.add('expanded');
        Menu4 = true;
        sleep(250).then(() => {
            showcontent("About");
        });
    }
}
//FIX WHATEVERS GOING ON HERE GAMES AND FILMS NOT WORKING FOR SOME REASON
function multicollapse(){
    var M1 = document.getElementById("1");
    var M2 = document.getElementById("2");
    var M3 = document.getElementById("3");
    var M4 = document.getElementById("4");
    var A1 = document.getElementById("Art")
    var B1 = document.getElementById("Games")
    var C1 = document.getElementById("Films")
    var D1 = document.getElementById("About")
    var backthing = document.getElementById("backer");
    M1.classList.remove('expanded');
    M2.classList.remove('expanded');
    M3.classList.remove('expanded');
    M4.classList.remove('expanded');
    console.log(Menu2)

    if(Menu1){
        A1.classList.remove('visible');
        A1.classList.add('hidden');
        M1.scrollTop = 0;
    }

    B1.classList.remove('visible');
    B1.classList.add('hidden');
    M2.scrollTop = 0;

    C1.classList.remove('visible');
    C1.classList.add('hidden');
    M3.scrollTop = 0;
    
    if(Menu4){
        D1.classList.remove('visible');
        D1.classList.add('hidden');
        M4.scrollTop = 0;
    }
    
    M1.scrollTop = 0;
    M2.scrollTop = 0;
    M3.scrollTop = 0;
    M4.scrollTop = 0;
    Menu1 = false;
    Menu2 = false;
    Menu3 = false;
    Menu4 = false;
    backthing.style.display = "none";
    demouse()
}

function demouse(){
    var M1 = document.getElementById("1")
    var M2 = document.getElementById("2")
    var M3 = document.getElementById("3")
    var M4 = document.getElementById("4")
    var backthing = document.getElementById("backer")
    M1.style.pointerEvents = "none";
    M2.style.pointerEvents = "none";
    M3.style.pointerEvents = "none";
    M4.style.pointerEvents = "none";
    backthing.style.pointerEvents = "none";

    sleep(250).then(() => {
        M1.style.pointerEvents = "all";
        M2.style.pointerEvents = "all";
        M3.style.pointerEvents = "all";
        M4.style.pointerEvents = "all";
        backthing.style.pointerEvents = "all";
    });
}

function showcontent(setid){
    var C = document.getElementById(setid)
    var backthing = document.getElementById("backer")
    C.classList.remove('hidden');
    C.classList.add('visible');
    backthing.style.display = "block";
    backthing.style.pointerEvents = "all";
}

function hidecontent(setid){
    var backthing = document.getElementById("backer");
    var C = document.getElementById(setid)
    C.classList.remove('visible');
    C.classList.add('hidden');
    backthing.style.display = "none";
    backthing.style.pointerEvents = "none";
    console.log(setid)
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 35);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 55);
}

