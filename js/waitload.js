function waitLoad(idToHide) {
    console.log('waitload');
    document.getElementById(idToHide).style.display = "none";
    document.getElementById("loadDiv").style.visibility = "visible";
    document.getElementById("loadDiv").style.display = "";
}

function waitLoadDone(idToShow) {
    document.getElementById("loadDiv").style.visibility = "hidden";
    document.getElementById("loadDiv").style.display = "none";
    document.getElementById(idToShow).style.display = "";
}