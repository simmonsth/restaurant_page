import { holdOnClickStyle, removeOnClickStyle } from './holdOnClickStyle';

var displayMenu = function() {

    holdOnClickStyle('menu');

    var about = document.getElementById('aboutContainer');
    var slogan = document.getElementById('welcomeSlogan');
    var contact = document.getElementById('contactContainer');
    var menu = document.getElementById('menuContainer');

    if (about) { about.remove(); removeOnClickStyle('about') }
    if (slogan) { slogan.remove() }
    if (contact) { contact.remove(); removeOnClickStyle('contact') }
    if (menu) { menu.remove() }

    // populate menuContainer
    var menuCtn = document.createElement('DIV');
    menuCtn.id = "menuContainer";
    document.getElementById('content').appendChild(menuCtn);

    var menuInfo = document.createElement('DIV');
    menuInfo.id = "menuInfo";
    document.getElementById('menuContainer').appendChild(menuInfo);

    var para = document.createElement('P');
    para.id = 'menuPara';
    document.getElementById('menuInfo').appendChild(para);
    para.innerHTML = `
    Skewers/Kabobs.................................................................$3 ea.<br>
    (Choice of pork, chicken, or beef)<br>
    <br>
    Head of Lamb......................................................................$20<br>
    <br>
    12oz. Baraka Steak..............................................................$18<br>
    <br>
    Bulgogi.................................................................................$12<br>
    (Drizzled with Reptile Acid)<br>
    <br>
    Minotaur Meat......................................................................$8<br>
    (Kintaro Special)<br>
    <br>
    Wagyu..................................................................................$40 plate<br>
    <br>
    Sheeva's Bomb Ass Pork.....................................................$10 playte<br>
    (Marinated for 48 hours in Sindel's tears)<br>
    <br>
    METAL MEAT........................................................................Free<br>
    (Cyrax Special)
    `;
}

export { displayMenu };