import { observable ,action } from 'mobx'
import api from '../consts/fromID'
import axios from "axios";


class ContactStore {
    @observable name = ''
    @observable email = ''
    @observable message = ''
    @observable phone = ''
    @observable error = ''
    @observable ispopUp = false
    @observable messageTitle = ''
    @observable messageTitle2 = ''

    @action async sendTomail(e){
       const state = {name : this.name, email : this.email, phone : this.phone, message : this.message}
       if(state.name && (state.email || state.phone)){
            await axios.post(
              `https://formcarry.com/s/${api.id}`, 
              state, 
              {headers: {"Accept": "application/json"}}
              )
              .then(response =>{
                this.messageTitle = 'Done!'
                this.messageTitle2 = 'Message Was sent'
                this.ispopUp = true
                setTimeout(() =>  this.ispopUp = false,3000)
              })
              .catch(error =>{
                this.messageTitle = 'Error!'
                this.messageTitle2 = `Message Wasn't sent`
                this.ispopUp = true
                setTimeout(() =>  this.ispopUp = false,3000)
          })

          await axios.post(`${api.internalUrl}`, state, {headers: {"Accept": "application/json"}})
            .then(response =>{ })
            .catch(error =>{})

          await this.setState()
       }
       else{
        this.error = 'Please fill up the form'
       }
        
    }

    @action changeState(e){
        this.error = ''
        this[e.target.name] = e.target.value
    }

    setState(){
      this.name =''
      this.email = ''
      this.phone = ''
      this.message = ''
    }

}

export default new ContactStore()

