function loadContent() {
    
    // changing background color for buttons
    const homeBtn = document.getElementById('homeButton');
    homeBtn.style.backgroundColor = 'teal';
    const menuButton = document.getElementById('menuButton');
    menuButton.style.backgroundColor = 'white';
    
    //clearing content container
    const content = document.getElementById('content');
    content.textContent = "";

    //creating new DOM elements and giving it values
    let heading = document.createElement('h1');
    heading.textContent = 'My Reastaurant Name';

    let description = document.createElement('p');
    description.textContent = 'Some text about my beatyful reastaurant bla blab bla';

    
    // appending new elements to the content div
    content.append(heading,description);

}

export {loadContent};