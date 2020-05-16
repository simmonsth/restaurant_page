var holdOnClickStyle = function(element) {
    // hold tab styling
    document.getElementById(element).style = `
    font-size: 72px;
    color: rgb(184, 0, 0);
    border: 1px solid;
    border-left-color: tomato;
    border-top-color: tomato;
    border-right-color: tomato;
    border-bottom-color: transparent;
    height: 60px;
    `
}

var removeOnClickStyle = function(element) {
    document.getElementById(element).removeAttribute('style');
}

export { holdOnClickStyle, removeOnClickStyle }