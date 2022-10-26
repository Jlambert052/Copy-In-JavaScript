const save = () => {
    var user = getUserData();
    UserService.create(user)
        .done((res) => {
            clearUserData();
            alert("created!");
        })
        .fail((err) => {
            alert("failed!")
        });
}

const clearUserData = () => {
    $("#xusername").val("");
    $("#xpassword").val("");
    $("#xfirstname").val("");
    $("#xlastname").val("");
    $("#xphone").val("");
    $("#xemail").val("");
    $("#isreviewer").prop("checked", false);
    $("#isadmin").prop("checked", false);
}

const getUserData = () => {
    var user = {
        id: 0,
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