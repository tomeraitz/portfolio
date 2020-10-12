import {
    observable,
    action
} from 'mobx'

import axios from "axios";


class GenralStore {
    @observable active = 'Home'
    @observable activeClassNa = "nav-bar regularSection"
    @observable items = [{
            id: 'Home',
            className: "nav-items active",
        },
        {
            id: 'Projects',
            className: "nav-items",
        },
        {
            id: 'Contact',
            className: "nav-items",
        },
        {
            id: 'Blog',
            className: "nav-items",
        },
    ]
    @observable HomeHeight
    @observable projectsHeight
    @observable isLoaded = false
    @observable Projects = {}
    @observable Home = {};
    @observable Contact = {}
    @observable loadApp = '';
    @observable openMenu = false;
    @observable humbuggerClass = 'humbugger-regular';

    // Check with server if the website is ready
    @action async checkWithServer() {
        if (navigator.onLine && window.location.hostname !== 'localhost') {
            await axios.get(`${process.env.REACT_APP_API_Mail}`)
                .then(response => {
                    this.loadApp = JSON.stringify({
                        response
                    })

                })
                .catch(error => {})
        } else {
            this.loadApp = 'redy'
        }

    }

    // Change the navigation buttom color
    @action changeColor(scrollCloseDescription) {
        if (window.scrollY >= this.Home.offsetTop && window.scrollY < this.Projects.offsetTop - 30) {
            if (window.innerWidth >= 700) this.activeClassNa = "nav-bar regularSection"
            this.changeActive('Home');
            this.humbuggerClass = 'humbugger-regular';
            if (window.scrollY < this.Projects.offsetTop - 300) scrollCloseDescription()

        } else if (window.scrollY >= this.Projects.offsetTop - 30 && window.scrollY < this.Contact.offsetTop - 50) {
            if (window.innerWidth >= 700) this.activeClassNa = "nav-bar blackSection"
            this.changeActive('Projects')
            if(!this.openMenu ) this.humbuggerClass = 'humbugger-gray';
        } else if (window.scrollY >= this.Contact.offsetTop - 50) {
            if (window.innerWidth >= 700) this.activeClassNa = "nav-bar regularSection"
            this.changeActive('Contact')
            this.humbuggerClass = 'humbugger-regular';
            scrollCloseDescription();
        }
    }

    // Check what is active and change to active (Navigation)
    @action changeActive(id) {
        this.active = id
        this.items.forEach(i => {
            i.id === this.active ? i.className = "nav-items active" : i.className = "nav-items"
        })
    }

    // When pressing on navigation, make a smooth scrolling
    @action jumpto(id) {
        id === 'Home' ? this.Home.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            }) :
            id === 'Projects' ? this.Projects.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            }) :
            id === 'Contact' ? this.Contact.scrollIntoView({
                block: 'start',
                behavior: 'smooth'
            }) :
            window.open("https://dev.to/tomeraitz", "_blank")
    }

    @action toggleMenu() {
        this.openMenu = !this.openMenu;
        const items = document.getElementsByClassName('nav-items');
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = this.openMenu ? 'grid' : 'none';
        }
        this.activeClassNa = this.openMenu ? "nav-bar blackSection" : "nav-bar regularSection";
        if (window.scrollY >= this.Projects.offsetTop - 30 && window.scrollY < this.Contact.offsetTop - 50) {
            this.humbuggerClass = !this.openMenu ? 'humbugger-gray' : 'humbugger-regular'
        }
    }

    @action setToDefault() {
        const items = document.getElementsByClassName('nav-items');
        for (let i = 0; i < items.length; i++) {
            items[i].style.display = window.innerWidth >= 700 ? 'grid' : 'none';
        }

    }
}


export default new GenralStore()