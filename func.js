$(document).ready(function() {
  $('.page').css('clip-path', 'circle(0% at 50% 50%)');
  $('.page').first().css('clip-path', 'circle(100% at 50% 50%)');
  $('.page').first().css('z-index', 2);
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

    if (Menu1){
        M1.classList.remove('expanded');
        Menu1 = false;
        hidecontent("Art")
        unfade(M4)
        unfade(M2)
        unfade(M3)
    }else{
        M1.classList.add('expanded');
        Menu1 = true;
        fade(M4)
        fade(M2)
        fade(M3)
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

    if (Menu2){
        M2.classList.remove('expanded');
        Menu2 = false;
        hidecontent("Films")
        unfade(M1)
        unfade(M4)
        unfade(M3)
    }else{
        M2.classList.add('expanded');
        Menu2 = true;
        fade(M1)
        fade(M4)
        fade(M3)
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

    if (Menu3){
        M3.classList.remove('expanded');
        Menu3 = false;
        hidecontent("Games")
        unfade(M1)
        unfade(M2)
        unfade(M4)
    }else{
        M3.classList.add('expanded');
        Menu3 = true;
        fade(M1)
        fade(M2)
        fade(M4)
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

    M4.style.pointerEvents = "none";

    if (Menu4){
        M4.classList.remove('expanded');
        Menu4 = false;
        hidecontent("Contact")
        M4.style.pointerEvents = "all";
    }else{
        M4.classList.add('expanded');
        Menu4 = true;
        sleep(250).then(() => {
            showcontent("Contact");
            M4.style.pointerEvents = "all";
        });
    }
}

function showcontent(setid){
    var C = document.getElementById(setid)
    var XB = document.getElementById("xbutton1")
    C.classList.remove('hidden');
    C.classList.add('visible');
    XB.classList.remove('hidden');
    XB.classList.add('visible');
}

function hidecontent(setid){
    var C = document.getElementById(setid)
    var XB = document.getElementById("xbutton1")
    C.classList.remove('visible');
    C.classList.add('hidden');
    XB.classList.remove('visible');
    XB.classList.add('hidden');
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
    }, 15);
}