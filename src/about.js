import { holdOnClickStyle, removeOnClickStyle } from './holdOnClickStyle';

var displayAbout = function() {
    
    holdOnClickStyle('about');

    var contact = document.getElementById('contactContainer');
    var slogan = document.getElementById('welcomeSlogan');
    var menu = document.getElementById('menuContainer');
    var about = document.getElementById('aboutContainer');

    if (contact) { contact.remove(); removeOnClickStyle('contact') }
    if (slogan) { slogan.remove() }
    if (menu) { menu.remove(); removeOnClickStyle('menu') }
    if (about) { about.remove() }

    var aboutCtn = document.createElement('DIV');
    aboutCtn.id = "aboutContainer";
    document.getElementById('content').appendChild(aboutCtn);

    var aboutInfo = document.createElement('DIV');
    aboutInfo.id = "aboutInfo";
    document.getElementById('aboutContainer').appendChild(aboutInfo);

    var aboutImg = document.createElement('DIV');
    aboutImg.id = 'aboutImg';
    document.getElementById('aboutContainer').appendChild(aboutImg);

    var para = document.createElement('P');
    para.id = 'aboutPara';
    document.getElementById('aboutInfo').appendChild(para);
    para.innerHTML = `
    Scorpion is the alias of Hanzo Hasashi, formerly one of the finest 
    towel boys of the Shirai Ryu, a Japanese ninja clan. After he was killed by 
    Sub-Zero, a member of a rival clan of Chinese assassins known as the Lin 
    Kuei, Scorpion became a hellspawned revenant residing in hell (later the 
    Netherrealm) and took up cooking BBQ as a way to forget about his dead wife 
    Harumi and dead son Satoshi. Although essentially neutral in allegiance, 
    Scorpion will join forces with anyone who has a pallette for BBQ! 
    He was once manipulated by Quan Chi, whom he promised his life in exchange 
    for his impressive cooking abilities in order to re-kindle a lost
    friendship with Sub-Zero by grilling him some wagyu beef. After seeing how
    Mortal Kombat can be about true friendship, Scorpion founded Netherrealm
    bbq in 1992. With 28 years of service, Netherrealm BBQ has been an 
    integral part of the community and a netherworld BBQ favorite for decades.
    `;

    var ownerPic = document.createElement('IMG');
    ownerPic.id = 'ownerPic';
    ownerPic.setAttribute('src', './scorpion-owner.png');
    document.getElementById('aboutImg').appendChild(ownerPic);
    var caption = document.createElement('FIGCAPTION');
    caption.innerHTML = "Scorpion (Hanzo Hasashi) - Founder/Owner. Est. 1992";
    document.getElementById('aboutImg').appendChild(caption);
}

export { displayAbout };