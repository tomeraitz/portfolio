import { observable, action } from 'mobx'
import AOS from 'aos';
import api from '../consts/fromID'
import 'aos/dist/aos.css';
import axios from "axios";


class GenralStore {
    @observable active = 'Home'
    @observable items = [{
                            id : 'Home',
                            className: "nav-items active",
                        }, 
                        {
                            id: 'Projects',
                            className: "nav-items",
                        } ,  
                        {
                            id: 'Contact',
                            className: "nav-items",
                        }]
    @observable HomeHeight
    @observable projectsHeight
    @observable isLoaded = false
    @observable Projects
    @observable Home
    @observable Contact
    @observable loadApp = ''

    @action async checkWithServer(){
        await axios.get(`${api.sendToMail}`)
        .then(response =>{
            console.log("response from server", response.data)
            this.loadApp = response.data
         })
        .catch(error =>{})
     }

    @action changeColor() {
        if (window.scrollY === 0 || window.scrollY < this.HomeHeight) {
            this.changeActive('Home')
          } 
          
          else if(window.scrollY < this.projectsHeight &&  window.scrollY > this.HomeHeight){
            this.changeActive('Projects')
          }
          else {
            this.changeActive('Contact')
        }
    }

    @action whatIsActive(){
        this.items.forEach(i => {
            i.id === this.active ? i.className = "nav-items active" : i.className = "nav-items"
        })
    }

    @action changeActive(id){
        this.active = id
        this.whatIsActive()
    }

    @action jumpto(id){
        id === 'Home' ? this.Home.scrollIntoView({block: 'start', behavior: 'smooth'}) : 
        id === 'Projects' ? this.Projects.scrollIntoView({block: 'start', behavior: 'smooth'}) :
        this.Contact.scrollIntoView({block: 'start', behavior: 'smooth'})
    }
}
AOS.init();

export default new GenralStore()

