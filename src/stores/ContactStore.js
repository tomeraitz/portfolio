import { observable ,action } from 'mobx'
import fromId from '../consts/fromID'
import axios from "axios";


class ContactStore {
    @observable name = ''
    @observable email = ''
    @observable message = ''
    @observable phone = ''

    @action sendTomail(e){
       const state = {name : this.name, email : this.email, message : this.message}
        axios.post(
            `https://formcarry.com/s/${fromId}`, 
            state, 
            {headers: {"Accept": "application/json"}}
            )
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });

        e.preventDefault();
    }

    @action changeState(e){
        this[e.target.name] = e.target.value
    }

}

export default new ContactStore()

