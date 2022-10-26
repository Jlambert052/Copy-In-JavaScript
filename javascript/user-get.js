const display = (id) => {
    UserService.get(id)
        .done((res) => {
            render(res);
        })
        .fail((err) => {
            console.error(err);
        })

}

const render = (user) => {
    document.getElementById("xid").innerText = user.id;
    document.getElementById("xfullname").innerText = `${user.firstname} ${user.lastname}`;
    document.getElementById("xusername").innerText = `${user.username}`;
    document.getElementById("xphone").innerText = `${user.phone}`;
    document.getElementById("xemail").innerText = `${user.email}`;
    document.getElementById("xreviewer").innerText = user.isReviewer ? "Yes" : "No";
    document.getElementById("xadmin").innerText = user.isAdmin ? "Yes" : "No";
}

const remove = () => {
    let id = $("#xid").text();
    UserService.remove(id)
        .done((res) => {
            alert("removed.");

        })
        .fail((err) => {
            alert("failed to remove.");
        });
}
let parameters = UtilityService.getUrlParms();
console.debug(parameters);
let id = +parameters.id;    
display(id);