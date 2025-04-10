

export default class LocalStorageDataSource {
    constructor(){}
    get(key:string){
        return JSON.parse(localStorage.getItem(key))
    }

    remove(key:string){
        localStorage.removeItem(key)
        return "item removed locally"
    }

    set(key:string, data: any){
        localStorage.setItem(key, JSON.stringify(data))
        return "new item set locally"
    }

    update(key:string, data:any){
        const localData = this.get(key)
        this.set(key, { ...data, ...localData})
        return "item updated locally"
    }
}