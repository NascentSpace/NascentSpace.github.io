$(document).ready(function() {
  $('.page').css('clip-path', 'circle(0% at 50% 50%)');
  $('.page').first().css('clip-path', 'circle(100% at 50% 50%)');
  $('.page').first().css('z-index', 2);
});

var Panel1 = false;
var Panel2 = false;
var Panel3 = false;

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
function testFunction1() {
    var A = document.getElementById("Box1");
    print

    if(Panel2){
        testFunction2()
    }
    if(Panel3){
        testFunction3()
    }

    switch(Panel1) {
        case true:
        A.classList.remove('transin');
        A.classList.add('transout');
        Panel1 = false;
        break;

        case false:
        A.classList.remove('transout');
        A.classList.add('transin');
        Panel1 = true;
        break;
    }
}

function testFunction2() {
    var A = document.getElementById("Box2");
    print

    if(Panel1){
        testFunction1()
    }
    if(Panel3){
        testFunction3()
    }

    switch(Panel2) {
        case true:
        A.classList.remove('transin');
        A.classList.add('transout');
        Panel2 = false;
        break;

        case false:
        A.classList.remove('transout');
        A.classList.add('transin');
        Panel2 = true;
        break;
    }
}

function testFunction3() {
    var A = document.getElementById("Box3");
    print

    if(Panel1){
        testFunction1()
    }
    if(Panel2){
        testFunction2()
    }

    switch(Panel3) {
        case true:
        A.classList.remove('transin');
        A.classList.add('transout');
        Panel3 = false;
        break;

        case false:
        A.classList.remove('transout');
        A.classList.add('transin');
        Panel3 = true;
        break;
    }
}



function menuexpand1() {
    var M1 = document.getElementById("1")
    var M2 = document.getElementById("2")
    var M3 = document.getElementById("3")
    var M4 = document.getElementById("4")
    M1.style.zIndex = "100000";
    M2.style.zIndex = "1";
    M3.style.zIndex = "1";
    M4.style.zIndex = "1";

    if (Menu1){
        M1.classList.remove('expanded');
        Menu1 = false;
    }else{
        M1.classList.add('expanded');
        Menu1 = true;
    }
}

function menuexpand2() {
    var M1 = document.getElementById("1")
    var M2 = document.getElementById("2")
    var M3 = document.getElementById("3")
    var M4 = document.getElementById("4")
    M1.style.zIndex = "1";
    M2.style.zIndex = "100000";
    M3.style.zIndex = "1";
    M4.style.zIndex = "1";

    if (Menu2){
        M2.classList.remove('expanded');
        Menu2 = false;
    }else{
        M2.classList.add('expanded');
        Menu2 = true;
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
    }else{
        M3.classList.add('expanded');
        Menu3 = true;
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

    if (Menu4){
        M4.classList.remove('expanded');
        Menu4 = false;
    }else{
        M4.classList.add('expanded');
        Menu4 = true;
    }
}