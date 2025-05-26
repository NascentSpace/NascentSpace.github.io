function TestsFunction() {
    var T = document.getElementById("TestsDiv");
    if (T.style.display==="none"){
        T.style.display = "block";
    } else{
        T.style.display = "none";  // <-- Set it to block
    }
}
    

function AboutFunction() {
    var C = document.getElementsByClassName("container")
    var D = document.getElementsByName("container")
    var A = document.getElementById("About");
    C.style.display = "none";
    A.style.display = "block";
}