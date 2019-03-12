import { observable ,action } from 'mobx'
import fromId from '../consts/fromID'
import axios from "axios";


class ContactStore {
    @observable name = ''
    @observable email = ''
    @observable message = ''
    @observable phone = ''

    @action async sendTomail(e){
       const state = {name : this.name, email : this.email, message : this.message}
       if(state.name && (state.email || state.phone)){
            await axios.post(
              `https://formcarry.com/s/${fromId}`, 
              state, 
              {headers: {"Accept": "application/json"}}
              )
              .then(response =>{
                console.log(response);
              })
              .catch(error =>{
                console.log(error);
          })
          await this.setState()
       }
       else{
        console.log("no data")
       }
        
    }

    @action changeState(e){
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

