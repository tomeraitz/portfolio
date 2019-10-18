import projectsProtfolio from '../consts/projects'
import {
    observable,
    action,
    toJS
} from 'mobx'

let _self;

class ProjectStore {
    @observable projects = projectsProtfolio
    @observable cssId = `ProjectCards`
    @observable labels = [{
            text: 'All',
            class: 'label active-label'
        },
        {
            text: 'Nodejs',
            class: 'label'
        },
        {
            text: 'PHP',
            class: 'label'
        },
        {
            text: 'React',
            class: 'label'
        },
        {
            text: 'SQL',
            class: 'label'
        },
        {
            text: 'MongoDB',
            class: 'label'
        },
        {
            text: 'WebSokect',
            class: 'label'
        },


    ];
    @observable index =  window.innerWidth >= 768 ?  7 : 5;
    @observable counter = 0
    @observable activeLabel = 'All'
    

    @action handelResponsive(self) {
        let lastIndex = this.index
        window.innerWidth >= 768 ? this.index = 7 : this.index = 5;
        if(lastIndex !== this.index) self.forceUpdate();
    }

    @action handelClickLabel=(label, self)=>{
        this.activeLabel = `${label}`;
        if(_self === undefined)   _self = self
     
        this.labels.forEach(i =>{
            i.text === `${label}` ? i.class = 'label active-label' : i.class = 'label'
        })
        this.projects = this.filterProjectes();
        
        if(window.innerWidth > 1065 && this.projects.length === 2 ){
            this.cssId ='ProjectCards-2-items'
        }
        else{
            this.cssId = `ProjectCards`
        }
        _self.forceUpdate();
    }

    filterProjectes=()=>{
     let filtterArray = []
     this.activeLabel === 'All' ? filtterArray = projectsProtfolio :
     filtterArray =  projectsProtfolio.filter(item => item.labels.find(label => label.text == this.activeLabel))
     return filtterArray
    }

    @action openDescription=(id)=>{
        console.log("id : ",toJS(id) )
        this.projects[id].cssDescription = this.projects[id].cssDescription == "none" ? "block" : "none";
        this.projects[id].cssDescriptionGrid  = this.projects[id].cssDescriptionGrid  == "none" ? "grid" : "none";
        _self.forceUpdate();
    }

    @action scrollCloseDescription=()=>{
        this.projects.forEach(project=>{
            project.cssDescription = "none"
            project.cssDescriptionGrid = "none"
        })
        _self.forceUpdate();
    }

    @action hoverLabel=(id, index)=>{
        console.log("this.projects : ",toJS(this.projects) );
        console.log("id : ",toJS(id) )
        this.projects[id].labels[index].cssClassHover = 'projects-label-des-clor';
        _self.forceUpdate();
    }

    @action hoverLeaveLabel=(id, index)=>{
        this.projects[id].labels[index].cssClassHover = 'projects-label-des';
        _self.forceUpdate();
    }

}


export default new ProjectStore()