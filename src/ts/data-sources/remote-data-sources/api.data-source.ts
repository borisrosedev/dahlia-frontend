

export default class ApiDataSource {
    URL = "http://localhost:3000/api/v1"
    async send(endpoint:string, data:any, method:string = "POST", token?: string){
    
        const request = {
            method: method,
            headers: {
                "Content-Type": "application/json",
               
            },
            body: JSON.stringify(data)
        }

        if(token){
            request.headers["Authorization"] = "Bearer " + token
        }

        try {
            const response = await fetch(this.URL + endpoint, request)
            const jsResponse = await response.json()
            return jsResponse
        } catch(err){
            console.log(err)
        }


    }

    async receive(endpoint:string, token?: string){

        const request = { method: "GET" } as any

        if(token){
            request.headers["Authorization"] = "Bearer " + token
        }

        try {
            const response = await fetch(this.URL + endpoint, request)
            const jsResponse = await response.json()
            return jsResponse
        } catch(err){
            console.log(err)
        }


    }
}