import {loadContent} from "./loadContent.js";
import {loadMenu} from "./menu.js";


function navBarFnc(){
    const homeBtn = document.getElementById('homeButton');
    //const aboutBtn = document.getElementById('aboutButton');
    const menuBtn = document.getElementById('menuButton');

    homeBtn.addEventListener('click',loadContent);
    //aboutBtn.addEventListener('click',loadAbout);
    menuBtn.addEventListener('click',loadMenu);

}

export {navBarFnc};