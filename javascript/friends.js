class Friend {

    constructor(name, phone, email) {
        this.name = name;
        this.phone = phone;
        this.email = email;
    }

    toString() {
        return `${this.name} | ${this.phone} | ${this.email}`;
    }
}

let friends = [
    new Friend("Denise", "513-322-8888", "Denise@maxtrain.com"),
    new Friend("Patricia", "513-322-8888", "Patricia@maxtrain.com"),
    new Friend("Kim", "513-322-8888", "Kim@maxtrain.com")
];

const loaded = () => {

    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let friend of friends) {
        let tr = "";
        tr += "<tr>";
        tr += `<td>${friend.name}</td>`;
        tr += `<td>${friend.phone}</td>`;
        tr += `<td>${friend.email}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
}

const add = () => {
    let name = document.getElementById("xname").value;
    let phone = document.getElementById("xphone").value;
    let email = document.getElementById("xemail").value;
    let newFriend = new Friend(name, phone, email);
    friends.push(newFriend);
    loaded();
}