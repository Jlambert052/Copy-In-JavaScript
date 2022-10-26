const url = "http://localhost:5432/api/users";

class UserService {

    static list = () => {
        return $.getJSON(`${url}`);
    };

    static get = (id) => {
        return $.getJSON(`${url}/${id}`);
    };

    static create = (user) => {
        return $.ajax({
            method: "POST",
            url: `${url}`,
            data: JSON.stringify(user),
            contentType: "application/json"
        })
    }

    static change = (user) => {
        return $.ajax({
            method: "PUT",
            url: `${url}/${user.id}`,
            data: JSON.stringify(user),
            contentType: "application/json"
        })
    }

    static remove = (id) => {
        return $.ajax({
            method: "DELETE",
            url: `${url}/${id}`
        })        
    }
}