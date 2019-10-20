import projectsProtfolio from '../consts/projects'
import {
    observable,
    action,
    toJS,
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
    @observable index = window.innerWidth >= 768 ? 7 : 5;
    @observable counter = 0
    @observable activeLabel = 'All'
    @observable isCanGoToUrl = false;
    @observable lastId = -1;
    @observable isCanCloseDes = {};
    @observable isCanOpenDes = true

    @action handelResponsive(self) {
        let lastIndex = this.index
        window.innerWidth >= 768 ? this.index = 7 : this.index = 5;
        if (lastIndex !== this.index) self.forceUpdate();
    }

    @action handelClickLabel = (label, self) => {
        this.activeLabel = `${label}`;
        if (_self === undefined) _self = self

        this.labels.forEach(i => {
            i.text === `${label}` ? i.class = 'label active-label' : i.class = 'label'
        })
        this.projects = this.filterProjectes();

        if (window.innerWidth > 1065 && this.projects.length === 2) {
            this.cssId = 'ProjectCards-2-items'
        } else {
            this.cssId = `ProjectCards`
        }
        _self.forceUpdate();
    }

    filterProjectes = () => {
        let filtterArray = []
        this.activeLabel === 'All' ? filtterArray = projectsProtfolio :
            filtterArray = projectsProtfolio.filter(item => item.labels.find(label => label.text === this.activeLabel));
        filtterArray.forEach((label, index) => {
            label.id = index;
        })
        return filtterArray
    }

    @action openDescription = (id) => {
        if (window.innerWidth >= 700) {
            if (this.lastId !== id) {
                this.isCanGoToUrl = false;
                this.lastId = id

                var openUrlTimeOut = () => this.isCanGoToUrl = true;
                setTimeout(openUrlTimeOut, 800);
            }
            this.projects[id].cssDescription = "block";
            this.projects[id].cssDescriptionGrid = "grid";
        }

        _self.forceUpdate();
    }

    @action closeDescription = (id) => {
        if (window.innerWidth >= 700) {
            this.projects[id].cssDescriptionGrid = "none";
            this.projects[id].cssDescription = "none";
        }
        _self.forceUpdate();
    }

    @action openDescriptionPhone = (e, id) => {
     
        if(this.projects[id].cssDescription == "block" && !this.isCanOpenDes) return
            if(this.projects[id].cssDescription == "none" && this.isCanOpenDes){
                console.log("In openDescriptionPhone");
                if (this.lastId !== id) {
                    this.isCanGoToUrl = false;
                    this.lastId = id
    
                    var openUrlTimeOut = () => this.isCanGoToUrl = true;
                    setTimeout(openUrlTimeOut, 800);
                }
                this.projects[id].cssDescription = "block";
                this.projects[id].cssDescriptionGrid = "grid";
            }
            _self.forceUpdate();
    }

    @action closeDescriptionPhone = (e,id) => {
        console.log("In closeDescriptionPhone");
        if(this.projects[id].cssDescription == "none" && !this.isCanOpenDes) return
        var closeDes =()=>{
            if(this.projects[id].cssDescription == "block" && this.isCanOpenDes){
                this.projects[id].cssDescription = "none";
                this.projects[id].cssDescriptionGrid = "none";
                _self.forceUpdate();
            }
        }
        setTimeout(closeDes , 300)
    }

    @action cantStartTouch = () =>{
        this.isCanOpenDes =false;
    }

    @action canStartTouch = () =>{
        this.isCanOpenDes =true;
    }

    @action scrollCloseDescription = () => {
        this.projects.forEach(project => {
            project.cssDescription = "none"
            project.cssDescriptionGrid = "none"
        })
        _self.forceUpdate();
    }

    @action hoverLabel = (id, index) => {
        this.projects[id].labels[index].cssClassHover = 'projects-label-des-clor';
        _self.forceUpdate();
    }

    @action hoverLeaveLabel = (id, index) => {
        this.projects[id].labels[index].cssClassHover = 'projects-label-des';
        _self.forceUpdate();
    }

    @action openUrl = (url, target) => {
        // console.log("this.isCanGoToUrl : ", toJS(this.isCanGoToUrl))
        if (this.isCanGoToUrl) window.open(url, target);
        _self.forceUpdate();
    }

}


export default new ProjectStore()