import { observable, action } from 'mobx'



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
    

    @action changeColor() {
        if (window.scrollY > 500) {
            this.backgroundColor = '#00000063'
          } else {
            this.backgroundColor = ''
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

export default new GenralStore()

