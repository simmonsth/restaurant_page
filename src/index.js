import { pageLoad, loadSlogan } from './pageLoad';
import { displayAbout } from './about';
import { displayContact } from './contact';
import { displayMenu } from './menu';

pageLoad();
loadSlogan();

// listeners for menu, contact, about
document.getElementById('menu').addEventListener('click', displayMenu);
document.getElementById('about').addEventListener('click', displayAbout);
document.getElementById('contact').addEventListener('click', displayContact);

// home on logo click
document.getElementById('logoPic').addEventListener('click', loadSlogan);