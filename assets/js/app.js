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

const footerLinks = [
    {
        text: 'Google',
        link: '#'
    },
    {
        text: 'Tutto su Google',
        link: '#'
    },
    {
        text: 'Privacy',
        link: '#'
    },
    {
        text: 'Termini',
        link: '#'
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
    menuLink.href = el.link;

    if(el.active){
        menuLink.classList.add('active')
    }

    menuLink.innerHTML = el.text;
    menu_item.append(menuLink);    
});

const footer_left = document.querySelector('.footer-left');
const footer_list = document.createElement('ul');
footer_left.append(footer_list);

footerLinks.forEach(el =>{
    const footer_item = document.createElement('li');
    footer_list.append(footer_item);
    const footer_el = document.createElement('a');
    footer_el.classList.add('footer-item');
    footer_el.href = el.link;
    footer_el.innerHTML = el.text;
    footer_item.append(footer_el);    
})