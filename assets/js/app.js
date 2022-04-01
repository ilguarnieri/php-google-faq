const headerLinks = [
    {
        text: 'Introduzione',
        link: '#',
        active: false
    },
    {
        text: 'Norme sulla privacy',
        link: '#',
        active: false
    },
    {
        text: 'Termini di servizio',
        link: '#',
        active: false
    },
    {
        text: 'Tecnologie',
        link: '#',
        active: false
    },
    {
        text: 'Domande frequenti',
        link: '#',
        active: true
    }
];

const header_bottom = document.querySelector('.header-bottom');
const list = document.createElement('ul');
header_bottom.append(list);

headerLinks.forEach(el => {
    const menu_item = document.createElement('li');
    menu_item.classList.add('menu-item');
    list.append(menu_item);
    const menuLink = document.createElement('a');
    menuLink.src = el.link;

    if(el.active){
        menuLink.classList.add('active')
    }
    
    menuLink.innerHTML = el.text;
    menu_item.append(menuLink);    
});