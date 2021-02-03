function buttonOpen() {
    document.getElementById("right-panel").setAttribute('class','open');
    document.getElementById("left-panel").setAttribute('class','open');
    document.getElementById("h1").setAttribute('class','open');
    document.getElementById("bars").setAttribute('class','open');
    document.getElementById("bars").setAttribute('onclick','buttonClose()');
}

function buttonClose() {
    document.getElementById("right-panel").removeAttribute('class');
    document.getElementById("left-panel").removeAttribute('class');
    document.getElementById("h1").removeAttribute('class');
    document.getElementById("bars").removeAttribute('class');
    document.getElementById("bars").setAttribute('onclick','buttonOpen()');
}