var rotate = document.getElementById("rotate");
rotate.addEventListener("click", function () {
    var rotate = document.getElementById("int").style.transform = "rotate(360deg)";
});
var search = document.getElementById("search");
search.addEventListener("click", function () {
    var text = document.getElementById("inp").value;
    if (text === "blue") {
        document.getElementById("int").style.background = "blue";
    } else if (text === "orange") {
        document.getElementById("int").style.background = "orange";
    } else if (text === "white") {
        document.getElementById("int").style.background = "white";
    } else if (text === "black") {
        document.getElementById("int").style.background = "black";
    } else if (text === "yellow") {
        document.getElementById("int").style.background = "yellow";
    } else if (text === "purple") {
        document.getElementById("int").style.background = "purple";
    } else if (text === "maroon") {
        document.getElementById("int").style.background = "maroon";
    } else if (text === "brown") {
        document.getElementById("int").style.background = "brown";
    } else if (text === "aqua") {
        document.getElementById("int").style.background = "aqua";
    } else if (text === "red") {
        document.getElementById("int").style.background = "red";
    } else if (text === "grey") {
        document.getElementById("int").style.background = "grey";
    } else if (text === "green") {
        document.getElementById("int").style.background = "green";
    } else if (text === "pink") {
        document.getElementById("int").style.background = "pink";
    } else if (text === "" || text === null) {
        alert("the field cant be empty");

















    } else {
        document.write("!!!!!!! error; color not found");
    }












});
var blue = document.getElementById("blue");
blue.addEventListener("click", function () {
    document.getElementById("int").style.background = "blue";
});
var white = document.getElementById("white");
white.addEventListener("click", function () {
    document.getElementById("int").style.background = "white";

});
var orange = document.getElementById("orange");
orange.addEventListener("click", function () {
    document.getElementById("int").style.background = "orange";

});