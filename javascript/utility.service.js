class UtilityService {

    //
    //http://127.0.0.1/user-detail.html?id=1&a=0&b=1&c=2
    //strip all but data after question mark (?)
    //id=1&a=0&b=1&c=2
    //substring by the ampersand
    // ["id=1", "a=o". "b=1", "c=2"]
    // {id: 1, a: 0. b: 1, c: 2 }
    static getUrlParms = () => {
        let url = document.URL;
        //split on
        let parameters = url.split("?")[1];
        parameters = parameters.split("&");
        let json = {};
        for(let parameter of parameters) {
            let keyValue = parameter.split("=");
            json[keyValue[0]]=keyValue[1]
        }
        return json;
    }
}