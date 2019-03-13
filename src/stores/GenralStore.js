import { observable, action } from 'mobx'
import AOS from 'aos';
import 'aos/dist/aos.css';


class GenralStore {
    @observable backgroundColor
    @observable active = 'Home'
    @observable items = [{
                            id : 'Home',
                            className: "NavItems active",
                        }, 
                        {
                            id: 'Projects',
                            className: "NavItems",
                        } ,  
                        {
                            id: 'Contact',
                            className: "NavItems",
                        }
                        ]
    @observable HomeHeight
    @observable projectsHeight
    @observable isLoaded = false

    @action changeColor() {
   
        if (window.scrollY < this.HomeHeight) {
            this.backgroundColor = '#00000063'
            this.changeActive('Home')
          } 
          
          else if(window.scrollY < this.projectsHeight ){
            this.backgroundColor = '#00000063'
            this.changeActive('Projects')
          }
          else {
            this.backgroundColor = '#00000063'
            this.changeActive('Contact')
        }
    }

    @action whatIsActive(){
        this.items.forEach(i => {
            if(i.id === this.active){
                i.className = "NavItems active"
            }
            else{
                i.className = "NavItems"
            }
        })
 
    }

    @action changeActive(id){
        this.active = id
        this.whatIsActive()
    }
}
AOS.init();

export default new GenralStore()

