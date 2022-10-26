const refresh = () => {
    VendorService.list()
            .done((res) => {
                display(res);
            })
            .fail((err) => {
                console.error(err);
            });

}

const display = (vendors) => {
    let tbodyCtrl = document.getElementById("tbody");
    tbodyCtrl.innerHTML = "";
    for(let vendor of vendors) {

        let row = "<tr>";
        row += `<td>${vendor.id}</td>`;
        row += `<td>${vendor.code}</td>`;
        row += `<td>${vendor.name}</td>`;
        row += `<td>${vendor.address}</td>`;
        row += `<td>${vendor.city}</td>`;
        row += `<td>${vendor.state}</td>`;
        row += `<td>${vendor.zip}</td>`;
        row += `<td>${vendor.phone}</td>`;
        row += `<td>${vendor.email}</td>`;
        row += `<td> <a href="vendor-get.html?id=${vendor.id}">Detail</a>`
        row +=      `  |  `
        row +=      `<a href="vendor-change.html?id=${vendor.id}">Change</a> </td>`
        row += "</tr>";
        tbodyCtrl.innerHTML += row; 
    }
}

refresh();