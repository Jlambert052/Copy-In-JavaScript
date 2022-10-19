const refresh = () => {
    $.getJSON("http://localhost:5432/api/users")
        .done((res) => {
            display(res);
        })
        .fail((err) => {
            console.error(err);
        });
}

const display = (users) => {
    let tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(let user of users) {
        let row = "<tr>";
        row += `<td>${user.id}</td>`;
        row += `<td>${user.firstname} ${user.lastname}</td>`;
        row += `<td>${user.username}</td>`;
        row += `<td>${user.phone}</td>`;
        row += `<td>${user.email}</td>`;
        row += `<td>${user.isReviewer ? "Yes" : "No"}</td>`;
        row += `<td>${user.isAdmin ? "Yes" : "No"}</td>`;
        row += "</tr>";
        tbodyCtrl.innerHTML += row;
    }

}

refresh();