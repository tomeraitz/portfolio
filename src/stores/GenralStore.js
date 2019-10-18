import { observable, action, toJS } from 'mobx'
import AOS from 'aos';
import api from '../consts/fromID'
import 'aos/dist/aos.css';
import axios from "axios";


class GenralStore {
    @observable active = 'Home'
    @observable activeClassNa = "nav-bar regularSection"
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
    @observable Projects = {}
    @observable Home = {};
    @observable Contact = {}
    @observable loadApp = ''


                        
    @action async checkWithServer(){
        await axios.get(`http://localhost:8000${api.sendToMail}`)
        .then(response =>{
            console.log("response from server", response)
            this.loadApp = JSON.stringify({response})
            
         })
        .catch(error =>{})
     }

    @action changeColor(scrollCloseDescription) {
        if (window.scrollY >= this.Home.offsetTop && window.scrollY < this.Projects.offsetTop - 30) {
            this.activeClassNa = "nav-bar regularSection"
            this.changeActive('Home');
            if(window.scrollY < this.Projects.offsetTop -300) scrollCloseDescription() 
            
          } 
          
          else if(window.scrollY >= this.Projects.offsetTop- 30 && window.scrollY < this.Contact.offsetTop -50 ){
            this.activeClassNa = "nav-bar blackSection"
            this.changeActive('Projects')
          }
          else if(window.scrollY >= this.Contact.offsetTop -50) {
            this.activeClassNa = "nav-bar regularSection"
            this.changeActive('Contact')
            scrollCloseDescription();
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

    @action handleLoad(){
        console.log("loaded")
        this.checkWithServer()
      }
}
AOS.init();

export default new GenralStore()

