let log = console.log;
document.addEventListener('DOMContentLoaded', init);

function init() {
    let txt = document.getElementById('name');
    txt.addEventListener('keydown', anyKey);
    let conv = document.getElementById('convert');
    conv.addEventListener('click',entr);
}

function anyKey(ev) {
    //log(ev.type, ev.target);
    let target = ev.currentTarget;
    let tag = target.tagName;
    let char = ev.char || ev.charCode || ev.which;
    //log(char,tag);
    if (char == 190) {
        ev.preventDefault();
    }
    let s = String.fromCharCode(char);
    log(s);
}

function entr(en) {
    log(char.value);
}