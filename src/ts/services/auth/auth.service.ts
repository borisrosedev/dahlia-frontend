import LocalStorageDataSource from "../../data-sources/local-data-sources/localstorage.data-source";
import ApiDataSource from "../../data-sources/remote-data-sources/api.data-source";

export default class AuthService {
    private localStorageDataSource: LocalStorageDataSource;
    private apiDataSource: ApiDataSource;
    constructor(){
        this.localStorageDataSource = new LocalStorageDataSource()
        this.apiDataSource = new ApiDataSource()
    }
    async login(data:any){
        const token = await this.apiDataSource.send("/users/login", data)
        if(token){
            this.localStorageDataSource.set("dahlia:token", token)
        } else {
            console.log("no token")
        }
    
    }

    logout(){
        this.localStorageDataSource.remove("dahlia:token")
    }
}