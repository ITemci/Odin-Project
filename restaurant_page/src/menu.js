function loadMenu() {

    // changing the color of buttons
    const menuButton = document.getElementById('menuButton');
    menuButton.style.backgroundColor = 'teal';
    const homeBtn = document.getElementById('homeButton');
    homeBtn.style.backgroundColor = 'white';
    
    // creating new DOM elements and giving it valyes
    const content = document.getElementById('content');
    content.textContent = "";

    let menuHeading = document.createElement('h1');
    menuHeading.textContent = 'Menu Page';

    let menuContent = document.createElement('p');
    menuContent.textContent = 'This is menu page content div';

    

    // appending new elements to content div

    content.append(menuHeading, menuContent);
}


export {loadMenu};