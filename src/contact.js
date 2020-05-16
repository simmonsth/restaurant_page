import { holdOnClickStyle, removeOnClickStyle } from "./holdOnClickStyle";

var displayContact = function() {

    holdOnClickStyle('contact');

    // check and clear other tabs
    var about = document.getElementById('aboutContainer');
    var slogan = document.getElementById('welcomeSlogan');
    var menu = document.getElementById('menuContainer');
    var contact = document.getElementById('contactContainer');

    if (about) { about.remove(); removeOnClickStyle('about') }
    if (slogan) { slogan.remove() }
    if (menu) { menu.remove(); removeOnClickStyle('menu')}
    if (contact) { contact.remove() }

    // populate contactContainer
    var contactCtn = document.createElement('DIV');
    contactCtn.id = "contactContainer";
    document.getElementById('content').appendChild(contactCtn);

    var contactInfo = document.createElement('DIV');
    contactInfo.id = "contactInfo";
    document.getElementById('contactContainer').appendChild(contactInfo);

    var contactImg = document.createElement('DIV');
    contactImg.id = 'contactImg';
    document.getElementById('contactContainer').appendChild(contactImg);

    var para = document.createElement('P');
    para.id = 'contactPara';
    document.getElementById('contactInfo').appendChild(para);
    para.innerHTML = `
    Tel: 1.800.NETHBBQ<br>
    <br>
    321 Fatality lane<br>
    Nether World City, Netherworld<br>
    44685<br>
    <br>
    Email: NRBBQ@nethermail.com<br>
    <br>
    Please call or e-mail 24 hours in advance for a reservation.
    If reserving the HellRoom, we require at least 10+ guests.
    The HellRoom must be booked at least a week in advance 
    as it is in high demand. Thank you.
    `;

    var storePic = document.createElement('IMG');
    storePic.id = 'storePic';
    storePic.setAttribute('src', './netherrealmBBQ.jpg');
    document.getElementById('contactImg').appendChild(storePic);
    var caption = document.createElement('FIGCAPTION');
    caption.innerHTML = "Netherrealm BBQ. Est. 1992";
    document.getElementById('contactImg').appendChild(caption);
}

export { displayContact };