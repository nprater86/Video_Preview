console.log("page loaded...");

function over(element) {
    element.play();
    element.muted = true;
}

function out(element) {
    element.pause();
    element.muted = false;
}

function volumeUp(element) {
    element.muted = false;
}