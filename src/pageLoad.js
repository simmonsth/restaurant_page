import { holdOnClickStyle, removeOnClickStyle } from './holdOnClickStyle';

var pageLoad = function() {

    // generate header and menu buttons
    var header = document.createElement('DIV');
    header.id = 'header';
    document.getElementById('content').appendChild(header);
    var menuDiv = document.createElement('DIV');
    menuDiv.id = "menuDiv";
    document.getElementById('header').appendChild(menuDiv);
    var menuBtn = document.createElement('BUTTON');
    menuBtn.id = 'menu';
    menuBtn.innerHTML = 'MENU';
    document.getElementById('menuDiv').appendChild(menuBtn);
    var contactBtn = document.createElement('BUTTON');
    contactBtn.id = 'contact';
    contactBtn.innerHTML = 'CONTACT';
    document.getElementById('menuDiv').appendChild(contactBtn);
    var aboutBtn = document.createElement('BUTTON');
    aboutBtn.id = 'about';
    aboutBtn.innerHTML = 'ABOUT';
    document.getElementById('menuDiv').appendChild(aboutBtn);

    // logo and restaurant name for left side of header
    var logo = document.createElement('DIV');
    logo.id = 'logo';
    var logoPic = document.createElement('DIV');
    logoPic.className = 'logoEl';
    logoPic.id = 'logoPic';
    logo.appendChild(logoPic);
    document.getElementById('header').appendChild(logo);
    var imgLink = document.createElement('a');
    imgLink.setAttribute('href', '#');
    imgLink.id = 'imgLink';
    document.getElementById('logoPic').appendChild(imgLink);
    var bbqImg = document.createElement('IMG');
    bbqImg.setAttribute('src', './bbq-logo.jpg');
    bbqImg.id = 'logo';
    document.getElementById('imgLink').appendChild(bbqImg);
    var restNameDiv = document.createElement('DIV');
    restNameDiv.id = 'restNameDiv';
    restNameDiv.className = 'logoEl2';
    document.getElementById('logo').appendChild(restNameDiv);
    var restName = document.createElement('H1');
    restName.id = 'tsung';
    restName.innerHTML = 'NETHERREALM BBQ';
    var scorp = document.createElement('DIV');
    scorp.id = 'logoScorp';
    scorp.className = 'logoEl3';
    document.getElementById('logo').appendChild(scorp);
    var miniScorp = document.createElement('IMG');
    miniScorp.setAttribute('src', './scorp-logo.png');
    document.getElementById('logoScorp').appendChild(miniScorp);
    document.getElementById('restNameDiv').appendChild(restName);
}

// generate main welcome text
var loadSlogan = function() {

    var about = document.getElementById('aboutContainer');
    var contact = document.getElementById('contactContainer');
    var menu = document.getElementById('menuContainer');
    var slogan = document.getElementById('welcomeSlogan');

    if (about) { about.remove(); removeOnClickStyle('about') }
    if (contact) { contact.remove(); removeOnClickStyle('contact') }
    if (menu) { menu.remove(); removeOnClickStyle('menu') }
    if (slogan) { slogan.remove() }

    var welcomeSlogan = document.createElement('DIV');
    welcomeSlogan.id = 'welcomeSlogan';
    welcomeSlogan.innerHTML = "Get on over here! Our taste outworlds the others...";
    document.getElementById('content').appendChild(welcomeSlogan);
}    

export { pageLoad, loadSlogan };