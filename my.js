let log = console.log;
document.addEventListener('DOMContentLoaded', init);

function init() {
    let txt = document.getElementById('name');
    txt.addEventListener('keydown', anyKey);
}

function anyKey(ev) {
    //log(ev.type, ev.target);
    let target = ev.currentTarget;
    let tag = target.tagName;
    let char = ev.char || ev.charCode || ev.which;
    log(char,tag);
    if (char == 190) {
        ev.preventDefault();
    }
}