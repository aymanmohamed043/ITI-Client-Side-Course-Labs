export function greetUser(uName="user"){
    return `hello ${uName}` 
}

export default class DataFetcher{
    constructor(url){
        this.url = url;
        console.log("hello from data fecher class")
}

    async getUser(id) {
    try {
        let response = await fetch(this.url)
        let data = await response.json()
        console.log("data from fetcher class :  ", data[id-1])
       
    } catch (error) {
        console.log("error", error);
        
    }
}
}