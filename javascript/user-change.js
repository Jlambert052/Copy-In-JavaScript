const get = (id) => {
    UserService.get(id)
        .done((res) => {
            setUserData(res);
        })
        .fail((err) => {
            alert("not found.");
        })
}

const save = () => {
    let user = getUserData();
    UserService.change(user)
        .done((res) => {
            clearUserData();
            alert("changed!");
        })
        .fail((err) => {
            alert("failed!")
        });
}

const setUserData = (user) => {
    $("#xid").val(user.id);
    $("#xusername").val(user.username);
    $("#xpassword").val(user.password);
    $("#xfirstname").val(user.firstname);
    $("#xlastname").val(user.lastname);
    $("#xphone").val(user.phone);
    $("#xemail").val(user.email);
    $("#xisreviewer").prop("checked", user.isReviewer);
    $("#xisadmin").prop("checked", user.isAdmin);
};

const clearUserData = () => {
    $("#xid").val(0);
    $("#xusername").val("");
    $("#xpassword").val("");
    $("#xfirstname").val("");
    $("#xlastname").val("");
    $("#xphone").val("");
    $("#xemail").val("");
    $("#xisreviewer").prop("checked", false);
    $("#xisadmin").prop("checked", false);
}



const getUserData = () => {
    var user = {
        id: $("#xid").val(),
        username: $("#xusername").val(),
        password: $("#xpassword").val(),
        firstname: $("#xfirstname").val(),
        lastname: $("#xlastname").val(),
        phone: $("#xphone").val(),
        email: $("#xemail").val(),
        isReviewer: $("#xisreviewer").prop("checked"),
        isAdmin: $("#xisadmin").prop("checked")
    };
    console.debug(user);
    return user;
}

let parameters = UtilityService.getUrlParms();
console.debug(parameters);
let id = +parameters.id;    
get(id);