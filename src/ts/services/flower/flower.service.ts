import ApiDataSource from "../../data-sources/remote-data-sources/api.data-source";



export default class FlowerService {
    apiDataSource:ApiDataSource
    constructor(){
       this.apiDataSource = new ApiDataSource()
    }
    async getAll(){
        return await this.apiDataSource.receive("/flowers")
    }
    async getOneById(id: number){
        return await this.apiDataSource.receive("/flowers/"+ id)
    }
}