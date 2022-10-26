const refresh = () => {
    UserService.list()
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
        row += `<td>`
        row +=       `<a href="user-get.html?id=${user.id}">Detail</a>`
        row +=      `  |  `
        row +=      `<a href="user-change.html?id=${user.id}">Change</a>`
        row += `</td>` 
        row += "</tr>";
        tbodyCtrl.innerHTML += row;
    }

}

refresh();