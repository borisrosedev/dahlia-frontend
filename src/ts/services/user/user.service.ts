import ApiDataSource from "../../data-sources/remote-data-sources/api.data-source";



export default class UserService {
    apiDataSource:ApiDataSource
    constructor(){
       this.apiDataSource = new ApiDataSource()
    }
    async getAll(){
        return await this.apiDataSource.receive("/users")
    }
    async register(data:any){
        return await this.apiDataSource.send("/users", data)
    }
    async getOneById(id: number){
        return await this.apiDataSource.receive("/users/"+ id)
    }
}