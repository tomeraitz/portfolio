import { observable, action } from 'mobx'
import projects from '../consts/projects'


class ProjectStore {
    @observable projects = projects

}

export default new ProjectStore()

